import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
   laoding:false,
   data:[],
   error:""
}



export const fetchProductToken = createAsyncThunk('productData/fetchProductToken',()=>{
   return axios.get('http://localhost:4300/products')
   .then((result) =>{
      return result.data
   })
})


const   ProductTokenSlice = createSlice({
   name:"productData",
   initialState,initialState,
   extraReducers:(builder)=>{
      builder.addCase(fetchProductToken.pending,(state)=>{
         state.laoding = true
      })
      builder.addCase(fetchProductToken.fulfilled,(state,action)=>{
         state.laoding = false,
         state.data = action.payload
         state.error = ''
      })
      builder.addCase(fetchProductToken.rejected,(state,action)=>{
         state.laoding = false,
         state.data = 'error of request'
         state.error = action.payload
         
      })
   }
})

export default ProductTokenSlice.reducer