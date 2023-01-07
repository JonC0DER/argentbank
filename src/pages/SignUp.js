import Loading from "../component/Loading"
import { useSelector } from "react-redux"
import { getUserProfileStatus, getUserProfileMSG } from "../redux_components/Reducer"
import { RegisterForm } from '../component/RegstrationForm'
import { Navigate } from "react-router-dom"
import { useState } from "react"

const SignUp = () => {

    const registrationStatus = useSelector(getUserProfileStatus)
    const registrationMSG = useSelector(getUserProfileMSG)
    let isRegisterTrue = registrationStatus === 200

    const isMSG = () => {
        return Boolean(registrationMSG) ? registrationMSG : ''
    }

    const SuccessToRegister = ({ msg }) => {
        isRegisterTrue = false

        return (
            <>
                <h1>{msg}</h1>
                <Loading msg={'Redirection'} />
                <Navigate to='/sign-in' />
            </>
        )
    }

    return (
        <main className='main bg-dark'>
            <section className="sign-in-content">
                {isRegisterTrue
                    ? <SuccessToRegister msg={isMSG()} />
                    : <RegisterForm msg={isMSG()} />
                }
            </section>
        </main>
    )
}

export default SignUp