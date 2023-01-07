import { useDispatch, useSelector } from "react-redux"
import { editProfile, getEditBtnProfile, getUserProfile, getUserProfileStatus, selectUserToken } from "../redux_components/Reducer"
import { Suspense } from "react"
import Loading from "../component/Loading"
import { EditMode } from "../component/EditMode"

const UserProfile = () => {
  const dispatch = useDispatch()

  const profile = useSelector(getUserProfile)
  const profileStatus = useSelector(getUserProfileStatus)

  const editBtn = useSelector(getEditBtnProfile)

  const onEdit = () => {
    try {
      dispatch(editProfile(true))
    } catch (error) {
      console.log('Failed to set True value to edit btn, ', error)
    }
  }

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
      {editBtn
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
    profileStatus === 200
      ? <ContentAccount data={profile} />
      : <Loading msg={'Loading user Profile'} />
  )

  return (
    <Suspense fallback={<Loading msg={'Loading user Profile'} />}>
      {<UserProfileIsLoad />}
    </Suspense>
  )
}

export default UserProfile