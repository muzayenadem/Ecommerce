import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
   laoding:false,
   searchedData:undefined,
   error:""
}



export const fetchMainSearchedData = createAsyncThunk('mainSearchedData/fetchMainSearchedData',(value)=>{
   return axios.get('http://localhost:4300/searchproductcategory'+value)
   .then((result) =>{
      return result.data
   })
})


const mainSeachedData = createSlice({
    name:"mainSeachedData",
    initialState,initialState,
    extraReducers:(builder)=>{
       builder.addCase(fetchMainSearchedData.pending,(state)=>{
          state.laoding = true
       })
       builder.addCase(fetchMainSearchedData.fulfilled,(state,action)=>{
          state.laoding = false,
          state.searchedData = action.payload
          state.error = ''
       })
       builder.addCase(fetchMainSearchedData.rejected,(state,action)=>{
          state.laoding = false,
          state.searchedData = action.payload
          state.error = state.error
       })
    }
 })
 
 export default mainSeachedData.reducer