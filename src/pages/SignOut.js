import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { logOut, selectUserToken } from "../redux_components/Reducer"
import ReactLoading from 'react-loading'
import { Suspense } from "react"

const SignOut = () => {
    const dispatch = useDispatch()
    
    const onLogOut = () => dispatch( logOut() )
    //const onLogOutTest = () => console.log('logout test')

    const Loading = () => (
        <div>
            <h1>Log Out...</h1>
            <div onLoad={onLogOut}>
                <ReactLoading 
                    type="bars"
                    color="LightGreen"
                    height={800}
                    width={200}
                />
            </div>
        </div>
    )

    const ManageLogOut = () => {
        const token = useSelector(selectUserToken)
        return token
            ? <Loading />
            : <Navigate to='/' />
    }
 
    return (
        <Suspense fallback={<Loading/>}>
            <ManageLogOut/>
        </Suspense>
    )
}

export default SignOut