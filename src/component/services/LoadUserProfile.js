import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { loadUserAccount } from "../../API/apiManager"
import UserProfile from "../../pages/UserProfile"

export const LoadUserProfile = ({ userToken }) => {
  const dispatch = useDispatch()
  const [bool, setBool] = useState(false)

  useEffect(() => {
    if (userToken) {
      dispatch(loadUserAccount(userToken)).then(() => {
        setBool(true)
      }).catch((error) => {
        console.log('Failed to load user Profile', error)
        setBool(false)
      })
    }
  }, [userToken]) // eslint-disable-line

  return (
    <>
      {bool && <UserProfile />}
    </>
  )
}

export default LoadUserProfile