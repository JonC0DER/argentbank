import { useDispatch, useSelector } from "react-redux"
import { updateEditUser } from "../API/apiManager"
import { useState } from "react"
import { editProfile, selectUserToken } from "../redux_components/Reducer"

export const EditMode = () => {

    const dispatch = useDispatch()

    const token = useSelector(selectUserToken)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onChangeFirstName = (e) => setFirstName(e.target.value)
    const onChangeLastName = (e) => setLastName(e.target.value)

    const canSave = [firstName, lastName].every(Boolean)

    const cancel = (e = null) => {
        if (e !== null) e.preventDefault()
        setFirstName('')
        setLastName('')
    }

    const save = (e) => {
        e.preventDefault()
        if (canSave) {
            try {
                dispatch(updateEditUser({ firstName, lastName, token }))
                dispatch(editProfile(false))
            } catch (error) {
                console.log('Failed to save the edition', error)
            }

            cancel()
        }
    }

    return (
        <div className="header" >
            <h1>Welcome back</h1>
            <form>
                <div className="input-line-wrapper">
                    <input
                        id="firstname"
                        type="text"
                        value={firstName}
                        onChange={onChangeFirstName}
                    />
                    <input
                        id="lastname"
                        type="text"
                        value={lastName}
                        onChange={onChangeLastName}
                    />
                </div>
                <div className="btn-line-wrapper">
                    <button
                        type="submit"
                        onClick={save}
                        className="edit-button"
                    >Save</button>
                    <button
                        type="submit"
                        onClick={cancel}
                        className="edit-button"
                    >Cancel</button>
                </div>
            </form>
        </div>
    )
}