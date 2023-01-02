import SignIn from '../pages/SignIn'
import UserAccount from '../pages/UserAccount'
import { useSelector } from 'react-redux'
import { selectUserToken } from '../redux_components/Reducer'

const SignInOrUserAccount = () => {
    const userToken = useSelector(selectUserToken)
    const IsTokenExist = () => ( 
        !userToken
            ? <SignIn/>
            : <UserAccount userToken={userToken}/>
    ) 
  
    return (
        <IsTokenExist/>
    )
}

export default SignInOrUserAccount