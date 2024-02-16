import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
   laoding:false,
   token:undefined,
   error:""
}



export const fetchAdminToken = createAsyncThunk('adminToken/fetchAdminToken',()=>{
   return axios.get('http://localhost:4300/adminloggedin')
   .then((result) =>{
      return result.data
   })
})


const adminTokenSlice = createSlice({
   name:"adminToken",
   initialState,initialState,
   extraReducers:(builder)=>{
      builder.addCase(fetchAdminToken.pending,(state)=>{
         state.laoding = true
      })
      builder.addCase(fetchAdminToken.fulfilled,(state,action)=>{
         state.laoding = false,
         state.token = action.payload
         state.error = ''
      })
      builder.addCase(fetchAdminToken.rejected,(state,action)=>{
         state.laoding = false,
         state.token = 'error of request'
         state.error = state.error
      })
   }
})

export default adminTokenSlice.reducer