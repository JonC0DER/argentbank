import { useDispatch, useSelector } from "react-redux"
import { loadUserAccount } from "../API/apiManager"
import ReactLoading from 'react-loading'
import { Suspense, useEffect } from "react"
import { getUserProfile } from "../redux_components/Reducer"
import { Navigate, useNavigate } from "react-router-dom"

export const UserAccount = ({userToken}) => {
  console.log(userToken)
  const dispatch = useDispatch()
  //const navigate = useNavigate()
  const profile = useSelector(getUserProfile)
  
  if (userToken) {
    try {   
      const a = loadUserAccount(userToken)
      //a.then(r => console.log(r))
      console.log(a.data)
      dispatch(
        //loadUserAccount(userToken)
        a
      ).unwrap()
    } catch (error) {
      console.log('Failed to load user Profile', error)
    }
  }
   
  useEffect(()=>{
    console.log(profile)
  }, [profile])

  const Loading = () => (
      <div>
          <h1>...</h1>
          <div>
              <ReactLoading 
                  type="bars"
                  color="LightGreen"
                  height={800}
                  width={200}
              />
          </div>
      </div>
  )

  //const UserProfile = () => ( profile && profile.status === 200 ? <ContentAccount data={profile} /> : <Loading/>)

  const ContentAccount = () => (
      <main className='main bg-dark'>
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
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

  return (
    <Suspense fallback={<Loading/>}>
      <ContentAccount/>
    </Suspense>
  )
}

export default UserAccount