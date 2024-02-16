import { createSlice } from "@reduxjs/toolkit";
const initailState ={
    isOpen : false
}
const signUpSlice = createSlice({
    name:'signUpState',
    initialState:initailState,
    reducers:{
        yesOpendSignup:(state) =>{
            state.isOpen = true
        },
        noOpendSignup:(state,action)=>{
            state.isOpen =  false
        },
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(cakeOrdered,(state)=>{
    //         state.quantity--
    //     })
    // }
})
export default signUpSlice.reducer
export const {yesOpendSignup,noOpendSignup} = signUpSlice.actions