import { useDispatch, useSelector } from "react-redux"
import { getUserProfile, getUserProfileStatus, selectUserToken } from "../redux_components/Reducer"
import { Suspense, useState } from "react"
import Loading from "../component/Loading"
import { updateEditUser } from "../API/apiManager"

const UserProfile = () => {
  const dispatch = useDispatch()

  const profile = useSelector(getUserProfile)
  const profileStatus = useSelector(getUserProfileStatus)
  const token = useSelector(selectUserToken)

  const [bool, setBool] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onEdit = () => setBool(true)

  const onChangeFirstName = (e) => setFirstName(e.target.value)
  const onChangeLastName = (e) => setLastName(e.target.value)

  const canSave = [firstName, lastName].every(Boolean)

  const save = () => {
    if (canSave) {
      try {
        dispatch(updateEditUser({ firstName, lastName, token }))
      } catch (error) {
        console.log('Failed to save the edition', error)
      }

      setFirstName('')
      setLastName('')
    }
  }

  const cancel = () => {
    setFirstName('')
    setLastName('')
  }

  const EditMode = () => (
    <div className="header">
      <h1>Welcome back</h1>
      <form>
        <input
          id="firstname"
          type="text"
          value={firstName}
          onChange={onChangeFirstName}
        />
        <input
          id="lastname"
          type="text"
          value={lastName}
          onChange={onChangeLastName}
        />
        <button
          onClick={save}
          className="save-edit-btn"
        >Save</button>
        <button
          onClick={cancel}
          className="cancel-edit-btn"
        >Cancel</button>
      </form>
    </div>
  )

  const Standard = ({ name }) => (
    <div className="header">
      <h1>Welcome back<br />{`${name.first} ${name.last}`}!</h1>
      <button
        onClick={onEdit}
        className="edit-button"
      >Edit Name</button>
    </div>
  )

  const ContentAccount = ({ data }) => (
    <main className='main bg-dark'>
      <span className="user-profile-message">{data.message}</span>
      {bool
        ? <EditMode />
        : <Standard name={{ first: data.body.firstName, last: data.body.lastName }} />
      }
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )

  const UserProfileIsLoad = () => (
    profileStatus === "succeeded"
      ? <ContentAccount data={profile} />
      : <Loading />
  )

  return (
    <Suspense fallback={<Loading msg={'Loading user Profile'} />}>
      {<UserProfileIsLoad />}
    </Suspense>
  )
}

export default UserProfile