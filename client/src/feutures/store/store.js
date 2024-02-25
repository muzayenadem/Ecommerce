import { configureStore } from "@reduxjs/toolkit";

import signReducer from "../drobarStates/signUpState";
import loginReducer from "../drobarStates/loginState";
import adminLoginReducer from "../drobarStates/AdminLoginSlice";

import profileDataReducer from "../data/profileData";

import mainSearchedDataReducer from "../Searched/mainSearchedSlice";
// tokens
import adminTokenReducer from '../Tokens/adminToken';
import tokenReducer from '../Tokens/tokenSlice';
import productTokenReducer from '../Tokens/productToken'
const store = configureStore({
    reducer:{
        token:tokenReducer,
        loginState:loginReducer,
        signUpState:signReducer,
        adminLoginState:adminLoginReducer,
        adminTokenState:adminTokenReducer,
        productTokenState:productTokenReducer,
        profileData:profileDataReducer,
        mainSearchedData:mainSearchedDataReducer,
    }
})

export default store