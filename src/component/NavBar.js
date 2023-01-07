import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUserProfileName, selectUserToken } from '../redux_components/Reducer'

export const NavBar = () => {

  const userToken = useSelector(selectUserToken)
  const userName = useSelector(getUserProfileName)
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1)

  const LoggedInNav = () => (
    <>
      <NavLink className="main-nav-item" to="/user-account">
        <i className="fa fa-user-circle"></i>&nbsp;
        {userName ? capitalize(userName) : "UserName"}
      </NavLink>
      <NavLink className="main-nav-item" to="/sign-out">
        <i className="fa fa-sign-out"></i>&nbsp;
        Sign Out
      </NavLink>
    </>
  )

  const SignInNav = () => (
    <>
      <NavLink className="main-nav-item" to="/sign-up">
        <i className="fa fa-file-text"></i>&nbsp;
        Sign Up
      </NavLink>
      <NavLink className="main-nav-item" to="/sign-in">
        <i className="fa fa-sign-in"></i>&nbsp;
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
        {!userToken ? <SignInNav /> : <LoggedInNav />}
      </div>
    </nav>
  )

}

export default NavBar