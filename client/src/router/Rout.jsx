import React from 'react'
import {BrowserRouter as  Router,Route,Link, Routes } from 'react-router-dom'
import Home from '../container/Home/Home'
import Login from '../components/login/Login'
import Signup from '../components/signup/Signup'
import Dashboard from '../container/Home/Dashboard'
import Products from '../components/Products/Products'
import PostProduct from '../components/Products/PostProduct'
import UpdateProduct from '../components/Products/UpdateProduct'
import MostLikedProduct from '../components/Products/MostLikedProduct'
import MostSelledProduct from '../components/Products/MostSelledProduct'
import DeleteProduct from '../components/Products/DeleteProduct'
import ListProduct from '../components/Products/ListProduct'
import SingleUpdateProduct from '../components/Products/SingleUpdateProduct'
import { useParams,useLocation } from 'react-router-dom'
import SingleProduct from '../components/home/SingleProduct'
import ProductsOutPage from '../components/home/ProductsOutPage'
import AllHomeComponents from '../components/home/AllHomeComponents'
import UpdateProfile from '../components/profile/UpdateProfile'
import MainProfile from '../components/profile/MainProfile'
import Notification from '../components/profile/Notification'
import ChosePlan from '../components/profile/ChosePlan'
import PasswordAndSecurity from '../components/profile/PasswordAndSecurity'
function Rout() {
  const videoId = useParams()
  return (
   <Router>
    <Routes>
      <Route path='/' element={<AllHomeComponents/>}>
        <Route path='' element={<ProductsOutPage/>}/>
        <Route path='home/:productId' element={<SingleProduct/>}/> 
    <Route path='/:productId' element={<SingleProduct/>}/> 
    </Route>
    <Route path='/home' element={<AllHomeComponents/>}>
    <Route path='' element={<ProductsOutPage/>}/>
    </Route>
    <Route path='/profile' element={<Dashboard/>}>
       <Route path='' element={<div> <h1> this is from somewhere</h1></div>}/>
       <Route path='mainprofile'  element={<MainProfile/>}>
         <Route path='' element={<UpdateProfile/>}/>
         <Route path='notification' element={<Notification/>}/>
         <Route path='choseplan' element={<ChosePlan/>}/>
         <Route path='passwordAndsecurity' element={<PasswordAndSecurity/>}/>
       </Route>
       <Route path='product' element={<Products/>}>
        <Route path='updateproduct/:productId' element={<SingleUpdateProduct/>}/>
        <Route path='' element={<PostProduct/>}/>
        <Route path='postproduct' element={<PostProduct/>}/>
        <Route path='updateproduct' element={<UpdateProduct/>}/>
        <Route path='mostselledproduct' element={<MostSelledProduct/>}/>
        <Route path='mostlikedproduct' element={<MostLikedProduct/>}/>
        <Route path='deleteproduct' element={<DeleteProduct/>}/>
        <Route path='listproduct' element={<ListProduct/>}/>
       </Route>
    </Route>
    </Routes>
   </Router>

  )
}

export default Rout