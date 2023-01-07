import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../API/apiManager"

export const RegisterForm = ({ msg }) => {
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleChangeFirstName = (event) => setFirstName(event.target.value)
    const handleChangeLastName = (event) => setLastName(event.target.value)
    const handleChangeEmail = (event) => setEmail(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)
    const handleChangeConfirmPassword = (event) => setConfirmPassword(event.target.value)

    const isPwdAreEqual = password === confirmPassword
    const canSave = [firstName, lastName, email].every(Boolean) && isPwdAreEqual

    const handleSubmit = (event) => {
        event.preventDefault()

        if (canSave) {
            try {
                dispatch(registerUser(
                    {
                        email: email,
                        password: password,
                        firstName: firstName,
                        lastName: lastName
                    }
                ))
            } catch (error) {
                console.log('Failed to register user ', error)
            }
        }
    }
    return (
        <>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In {msg}</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="firstname">FirstName</label>
                    <input
                        value={firstName}
                        type="text" id="firstname"
                        onChange={handleChangeFirstName}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">LastName</label>
                    <input
                        value={lastName}
                        type="text" id="lastname"
                        onChange={handleChangeLastName}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        type="email" id="email"
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
                <div className="input-wrapper">
                    <label htmlFor="confirm-password">Configure Password</label>
                    <input
                        value={confirmPassword}
                        type="password" id="confirm-password"
                        onChange={handleChangeConfirmPassword}
                    />
                </div>
                <button
                    className="sign-in-button"
                    onClick={handleSubmit}
                    disabled={!canSave}
                >Sign Up</button>
            </form>
        </>
    )
}