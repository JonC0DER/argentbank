import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginToken, loadUserAccount } from "../API/apiManager";

const initialState = {
    email: '',
    password: '',
    status: 'idle',
    token: null,
    profile: {}
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginAdd: {
            reducer(state, action) {
                state.email = action.payload.email
                state.password = action.payload.password
            }
        },
        logOut: state => initialState
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLoginToken.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchLoginToken.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.token = action.payload.body.token
            })
            .addCase(fetchLoginToken.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
            .addCase(loadUserAccount.pending, (state) => {
                state.status = "pending"
                //state.addProfile.status = "pending"
            })
            .addCase(loadUserAccount.fulfilled, (state, action) => {
                //state.addProfile.status = "succeeded"
                state.status = "succeeded"
                state.profile = action.payload
            })
            .addCase(loadUserAccount.rejected, (state, action) => {
                state.status = 'failed'
                //state.addProfile.status = "failed"
                state.error = action.error.message;
            })
    }
})

export const selectUserLogin = (state) => state.login
export const selectUserToken = (state) => state.login.token
export const getUserProfile = (state) => state.login.profile
export const getUserProfileStatus = (state) => state.login.status

export const { loginAdd, logOut } = loginSlice.actions

export default loginSlice.reducer