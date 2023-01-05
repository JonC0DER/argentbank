import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginToken } from '../API/apiManager';

const SignIn = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (event) =>  setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)

  const canSave = [email, password].every(Boolean)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(canSave){
      try {
        dispatch( 
          fetchLoginToken({ email, password })
        ).unwrap()
      } catch (error) {
        console.log('Failed to log In ', error)
      }

      setEmail('')
      setPassword('')
    }
  }

  return (
    <main className='main bg-dark'>
      <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                  value={email} 
                  type="text" id="username" 
                  onChange={handleChangeEmail}   
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                  value={password} 
                  type="password" id="password" 
                  onChange={handleChangePassword}   
                />
              </div>
              <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
              </div>
              <button 
                className="sign-in-button" 
                onClick={handleSubmit}
                disabled={!canSave}
              >Sign In</button>
          </form>
      </section>
    </main>
  )
}

export default SignIn