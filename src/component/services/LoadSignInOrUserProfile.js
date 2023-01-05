import SignIn from '../../pages/SignIn'
import { useSelector } from 'react-redux'
import { selectUserToken } from '../../redux_components/Reducer'
import LoadUserProfile from './LoadUserProfile'

const LoadSignInOrUserProfile = () => {
    const userToken = useSelector(selectUserToken)
    const IsTokenExist = () => ( 
        !userToken
            ? <SignIn/>
            : <LoadUserProfile userToken={userToken}/>
    ) 
  
    return ( <IsTokenExist/> )
}

export default LoadSignInOrUserProfile