import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from './NavBar'
import SignInOrUserAccount from '../pages/SignInOrUserAccount'
import SignOut from '../pages/SignOut'

const RouterLogic = () => {
  return (
      <BrowserRouter>  
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={
              <SignInOrUserAccount />
            } />
            <Route path="/user-account" element={
              <SignInOrUserAccount />
            } />
            <Route path='/sign-out' element={<SignOut/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default RouterLogic