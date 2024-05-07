import React from 'react'
import {BrowserRouter as  Router,Route,Link, Routes } from 'react-router-dom'
import Home from '../container/Home/Home'
import Login from '../components/login/Login'
import Signup from '../components/signup/Signup'
import Dashboard from '../container/Home/Dashboard'
import Products from '../components/Admin/Products/Products'
import PostProduct from '../components/Admin/Products/PostProduct'
import UpdateProduct from '../components/Admin/Products/UpdateProduct'
import MostLikedProduct from '../components/Admin/Products/MostLikedProduct'
import MostSelledProduct from '../components/Admin/Products/MostSelledProduct'
import DeleteProduct from '../components/Admin/Products/DeleteProduct'
import ListProduct from '../components/Admin/Products/ListProduct'
import SingleUpdateProduct from '../components/Admin/Products/SingleUpdateProduct'
import { useParams,useLocation } from 'react-router-dom'
import SingleProduct from '../components/Admin/Products/SingleProduct'
import ProductsOutPage from '../components/Admin/Products/ProductsOutPage'
import AllHomeComponents from '../components/home/AllHomeComponents'
import UpdateProfile from '../components/profile/UpdateProfile'
import MainProfile from '../components/profile/MainProfile'
import Notification from '../components/profile/Notification'
import ChosePlan from '../components/profile/ChosePlan'
import PasswordAndSecurity from '../components/profile/PasswordAndSecurity'
import HomeMain from '../components/home/HomeMain'
import AdminDashboard from '../components/Admin/AdminDashboard/AdminDashboard'
import AddAdmin from '../components/Admin/AddAdmin'
import AdminProfile from '../components/Admin/AdminProfile'
import UsersList from '../components/Admin/AllUsers/UsersList'
import SingleUserData from '../components/Admin/AllUsers/SingleUserData'
import ProductsInCart from '../components/Admin/Products/ProductsInCart'
import Carts from '../components/Admin/AllUsers/Carts'
import UserPerformance from '../components/Admin/AllUsers/UserPerformance'
import MessageHome from '../components/Message/MessageHome'
import SendMessage from '../components/Message/SendMessage'
import UsersForMessage from '../components/Message/UsersForMessage'
function Rout() {
  const videoId = useParams()
  return (
   <Router>
    <Routes>
      <Route path='admindashboard' element={<AdminDashboard/>}>
      <Route path='addadmin' element={<AddAdmin/>}/>
      <Route path='adminprofile' element={<AdminProfile/>}/>
      <Route path='allusers/:singleUserId' element={<SingleUserData/>}>
        <Route path='' element={<UserPerformance/>}/>
        <Route path='cart' element={<Carts/>}/>
        </Route> 
      <Route path='allusers' element={<UsersList/>}>
      <Route path=':singleUserId' element={<SingleUserData/>}/>
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
      <Route path='/' element={<AllHomeComponents/>}>
        <Route path='' element={<HomeMain/>}/>
        <Route path='home/:productId' element={<SingleProduct/>}/> 
    <Route path='/:productId' element={<SingleProduct/>}/> 
    </Route>
    <Route path='/home' element={<AllHomeComponents/>}>
    <Route path='' element={<ProductsOutPage/>}/>
    </Route>
    <Route path='/profile' element={<Dashboard/>}>
       <Route path='' element={<div> <h1> this is from somewhere</h1></div>}/>
       <Route path='my-carts' element={<ProductsInCart/>}/>
       <Route path='message' element={<UsersForMessage/>}>
        <Route path=':messageId' element={<SendMessage/>}/>
       </Route>
       <Route path='mainprofile'  element={<MainProfile/>}>
         <Route path='' element={<UpdateProfile/>}/>
         <Route path='notification' element={<Notification/>}/>
         <Route path='choseplan' element={<ChosePlan/>}/>
         <Route path='passwordAndsecurity' element={<PasswordAndSecurity/>}/>
       </Route>
    </Route>
    </Routes>
   </Router>

  )
}

export default Rout