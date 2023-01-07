import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from './NavBar'
import OnSignOut from '../component/services/OnSignOut'
import LoadSignInOrUserProfile from './services/LoadSignInOrUserProfile'
import SignUp from '../pages/SignUp'
import UserProfile from '../pages/UserProfile'

const RouterLogic = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={
          <LoadSignInOrUserProfile />
        } />
        <Route path="/user-account" element={
          <LoadSignInOrUserProfile />
        } />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/sign-out' element={<OnSignOut />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterLogic