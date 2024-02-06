import React from 'react'
import {BrowserRouter as  Router,Route,Link, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Signup from '../components/signup/Signup'
function Rout() {
  return (
   <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </Router>

  )
}

export default Rout