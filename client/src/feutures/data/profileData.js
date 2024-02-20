import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
   laoding:false,
   profile:undefined,
   error:""
}



export const fetchProfileData = createAsyncThunk('profileData/fetchProfileData',()=>{
   return axios.get('http://localhost:4300/profiledata')
   .then((result) =>{
      return result.data
   })
})


const userDataSlice = createSlice({
    name:"profileData",
    initialState,initialState,
    extraReducers:(builder)=>{
       builder.addCase(fetchProfileData.pending,(state)=>{
          state.laoding = true
       })
       builder.addCase(fetchProfileData.fulfilled,(state,action)=>{
          state.laoding = false,
          state.profile = action.payload
          state.error = ''
       })
       builder.addCase(fetchProfileData.rejected,(state,action)=>{
          state.laoding = false,
          state.profile = action.payload
          state.error = state.error
       })
    }
 })
 
 export default userDataSlice.reducer