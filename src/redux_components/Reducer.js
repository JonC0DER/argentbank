import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginToken, loadUserAccount, registerUser, updateEditUser } from "../API/apiManager";

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
        logOut: state => initialState,
        editProfile: {
            reducer(state, action) {
                state.profile.editbutton = action.payload
            }
        }
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
            .addCase(updateEditUser.pending, (state) => {
                state.status = "pending"
            })
            .addCase(updateEditUser.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.profile = action.payload
            })
            .addCase(updateEditUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.status = "pending"
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.profile = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
    }
})

export const selectUserLogin = (state) => state.login
export const selectUserToken = (state) => state.login.token
export const getUserProfile = (state) => state.login.profile
export const getUserProfileName = (state) => state.login.profile.body && state.login.profile.body.firstName
export const getUserProfileStatus = (state) => state.login.profile.status && state.login.profile.status
export const getUserProfileMSG = (state) => state.login.profile.message && state.login.profile.message
export const getEditBtnProfile = (state) => state.login.profile.editbutton

export const { loginAdd, logOut, editProfile } = loginSlice.actions

export default loginSlice.reducer