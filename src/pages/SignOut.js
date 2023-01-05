import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectUserToken } from "../redux_components/Reducer"
import { Suspense } from "react"
import Loading from "../component/Loading"

const SignOut = () => {
    
    const token = useSelector(selectUserToken)
    console.log(token)

    return (
        <Suspense fallback={<Loading msg={'Log Out'}/>}>
            {!token && <Navigate to='/' />}
        </Suspense>
    )
}

export default SignOut