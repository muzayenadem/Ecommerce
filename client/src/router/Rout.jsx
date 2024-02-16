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
function Rout() {
  const videoId = useParams()
  return (
   <Router>
    <Routes>
    <Route path='/' element={<Home/>}>
    <Route path='' element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    </Route>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<Dashboard/>}>
       <Route path='' element={<div> <h1> this is from somewhere</h1></div>}/>
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