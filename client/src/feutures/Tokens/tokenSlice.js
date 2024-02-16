import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
   laoding:false,
   token:undefined,
   error:""
}



export const fetchToken = createAsyncThunk('token/userToken',()=>{
   return axios.get('http://localhost:4300/loggedin')
   .then((result) =>{
      return result.data
   })
})


const tokenSlice = createSlice({
   name:"token",
   initialState,initialState,
   extraReducers:(builder)=>{
      builder.addCase(fetchToken.pending,(state)=>{
         state.laoding = true
      })
      builder.addCase(fetchToken.fulfilled,(state,action)=>{
         state.laoding = false,
         state.token = action.payload
         state.error = ''
      })
      builder.addCase(fetchToken.rejected,(state,action)=>{
         state.laoding = false,
         state.token = 'error of request'
         state.error = state.error
      })
   }
})

export default tokenSlice.reducer