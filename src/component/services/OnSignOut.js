//import { useState } from "react"
import { useDispatch } from "react-redux"
import SignOut from "../../pages/SignOut"
import { logOut } from "../../redux_components/Reducer"

const OnSignOut = () => {
    const dispatch = useDispatch()
//    const [bool, setBool] = useState(false)
    try {
        dispatch( logOut() )
  //      setBool(true)
    } catch (error) {
        console.log('Failed to log out', error)
    }

    /*const IsTrue = () => bool 
        ? <SignOut/> 
        : <h3>Failed to load signout component</h3>
*/
    //return (<IsTrue/>)
    return (<SignOut/>)

}

export default OnSignOut