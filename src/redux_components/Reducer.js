import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginToken, loadUserAccount } from "../API/apiManager";

const initialState = {
    email: '',
    password: '',
    status: 'idle',
    token: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginAdd: {
            reducer(state, action){
                state.email = action.payload.email
                state.password = action.payload.password
            }
        },
        logOut: {
            reducer(state){
                console.log('on log out reducer')
                state.login = initialState
            }
        }
    },
    extraReducers(builder){
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
            .addCase(loadUserAccount.fulfilled, (state, action) => {
                state.profile = action.payload
            })
    }
})

export const selectUserLogin = (state) => state.login
export const selectUserToken = (state) => state.login.token
export const getUserProfile = (state) => state.profile

export const { loginAdd, logOut } = loginSlice.actions

export default loginSlice.reducer