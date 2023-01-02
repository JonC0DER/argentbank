import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectUserToken } from '../redux_components/Reducer'

export const NavBar = () => {

  const userToken = useSelector(selectUserToken)

  const LoggedIn = () => (
    <>
      <NavLink className="main-nav-item" to="/user-account">
        <i className="fa fa-user-circle"></i>
        Tony
      </NavLink>
      <NavLink className="main-nav-item" to="/sign-out">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </NavLink>
    </>
  )

  const SignIn = () => (
    <>
      <NavLink className="main-nav-item" to="/sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </>
  )

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image"
          src={require("../assets/images/argentBankLogo.png")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div> 
        {!userToken ? <SignIn/>: <LoggedIn/>}
      </div>
    </nav>
  )

}

export default NavBar