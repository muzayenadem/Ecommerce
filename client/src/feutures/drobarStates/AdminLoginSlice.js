import { createSlice } from "@reduxjs/toolkit";

const initailState ={
    isOpen :  false
}
const adminLoginSlice = createSlice({
    name:'adminLoginState',
    initialState:initailState,
    reducers:{
        yesOpendAdminLogin:(state) =>{
            state.isOpen = true
        },
        noOpendAdminLogin:(state,action)=>{
            state.isOpen =  false
        },
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(cakeOrdered,(state)=>{
    //         state.quantity--
    //     })
    // }
})
export default adminLoginSlice.reducer
export const {yesOpendAdminLogin,noOpendAdminLogin} = adminLoginSlice.actions