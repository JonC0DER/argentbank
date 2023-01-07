import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import SignOut from "../../pages/SignOut"
import { logOut } from "../../redux_components/Reducer"

const OnSignOut = () => {
    const dispatch = useDispatch()
    const [bool, setBool] = useState(false)

    useEffect(() => {
        try {
            dispatch(logOut())
            setBool(true)
        } catch (error) {
            console.log('Failed to log out', error)
            setBool(false)
        }
    }, [])

    return (bool ? <SignOut /> : <Navigate to='/user-account' />)

}

export default OnSignOut