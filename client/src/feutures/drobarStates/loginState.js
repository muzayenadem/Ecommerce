import { createSlice } from "@reduxjs/toolkit";
const initailState ={
    isOpen : false
}
const loginSlice = createSlice({
    name:'loginState',
    initialState:initailState,
    reducers:{
        yesOpend:(state) =>{
            state.isOpen = true
        },
        noOpend:(state,action)=>{
            state.isOpen =  false
        },
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(cakeOrdered,(state)=>{
    //         state.quantity--
    //     })
    // }
})
export default loginSlice.reducer
export const {yesOpend,noOpend} = loginSlice.actions