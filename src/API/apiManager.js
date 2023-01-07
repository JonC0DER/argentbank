import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const LINK = 'http://localhost:3001/api/v1/user/'

export const fetchLoginToken = createAsyncThunk('user/login', async (initialLogin) => {
  const response = await axios.post(LINK + 'login', initialLogin)
  return response.data
})

export const loadUserAccount = createAsyncThunk('user/profile', async (initialToken) => {
  const setToken = 'Bearer '.concat(initialToken)
  let instance = axios.create({
    headers: { 'Authorization': setToken }
  })
  const response = await instance.post(LINK + 'profile')
  return response.data
})

export const updateEditUser = createAsyncThunk('user/profile/edit', async (initialEdition) => {
  const names = {
    "firstName": initialEdition.firstName,
    "lastName": initialEdition.lastName
  }
  const token = 'Bearer '.concat(initialEdition.token)
  let instance = axios.create({
    headers: { 'Authorization': token }
  })
  const response = await instance.put(LINK + 'profile', names)
  return response.data
})

export const registerUser = createAsyncThunk('user/signup', async (initialRegistration) => {
  const response = await axios.post(LINK + 'signup', initialRegistration)
  return response.data
})