import { useState } from 'react';
import { useDispatch } from "react-redux"
import { loadUserAccount } from "../../API/apiManager"
import UserProfile from "../../pages/UserProfile"

export const LoadUserProfile = ({userToken}) => {
  const dispatch = useDispatch()
  const [bool, setBool] = useState(false)
  
  const onLoadingUserAccount = () =>{

    if (userToken) {
      try {   
        dispatch( loadUserAccount(userToken) )//.unwrap()
        setBool(true)
        //return true
      } catch (error) {
        console.log('Failed to load user Profile', error)
        setBool(false)
        //return false
      }
    }
  }

  const IsAccountLoaded = () => {
    onLoadingUserAccount()
    return (
      <>
        {bool && <UserProfile/>}
      </>
    )
  }

  return (<IsAccountLoaded/>)
}

export default LoadUserProfile