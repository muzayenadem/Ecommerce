import React from 'react'
import { useState,useEffect } from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import axios from 'axios'
import { Outlet,Link } from 'react-router-dom'
import { fetchAdminToken } from '../../../feutures/Tokens/adminToken'
// import { fetchToken } from '../../../feutures/Tokens/tokenSlice'
import {useDispatch,useSelector } from 'react-redux'
function AdminSidebar() {
    const [adminprofile,setAdminProfile] = useState({}) 
    const [isTrue, setIsTrue] = useState(false) 

useEffect(()=>{
  axios.get('https://ecommerce-8yhy.onrender.com/adminprofile')
  .then(result =>{
    setAdminProfile(result.data)
  })
},[])

const dispatch =  useDispatch()
// useEffect(()=>{
//   dispatch(fetchToken())
// },[])


// const token = useSelector(state => state.token.token)
// console.log(token)

useEffect(()=>{
  dispatch(fetchAdminToken())
},[])
const adminToken = useSelector(state => state.adminTokenState.token)
console.log(adminToken)
  return (
    <div className='  top-16 left-0 sticky'>
        <div className='  sticky top-16 left-0'>
        <Sidebar 
   className={`w-72 h-[100vh]  top-0 left-0 fixed bg-white shadow-md hidden  md:block ${!isTrue ? 'hidden' : 'block'} ${isTrue && 'absolute'}`}  
   >
    <Menu>
            <div
            className='w-full items-center self-center'
            >
              <img 
              className='w-36 h-36 rounded-full items-center ml-[20%]'
              src={`https://ecommerce-8yhy.onrender.com/UsersImage/${adminprofile.image}`} 
              alt="no connection" />
              <h1
              className='font-light text-center text-md m-2'
              >Admin</h1>
              <h1
              className='font-bold text-2xl text-center m-3'
              >{adminprofile.firstName} {adminprofile.lastName}</h1>
              <hr/>
            </div>
       {adminToken && <MenuItem component={<Link to={'/admindashboard/product'}/>}>
          Products
        </MenuItem>}
        <MenuItem component={<Link to={'/admindashboard/allusers'}/>}>
        All Users
        </MenuItem>
        <MenuItem>
          Bussiness Card
        </MenuItem>
        <MenuItem>
          Latest
        </MenuItem>
        <MenuItem>
          Shop
        </MenuItem>
        <MenuItem component={<Link to={'/admindashboard/adminprofile'}/>}>
          Account
        </MenuItem>
        <MenuItem>
          Messages
        </MenuItem>
        <MenuItem>
          Shop
        </MenuItem>
        <MenuItem>
          Shop
        </MenuItem>
        <MenuItem>
          Shop
        </MenuItem>
      <MenuItem component={<Link to={'/admindashboard/addadmin'}/>}>
          Add Admin
        </MenuItem>
    </Menu>
   </Sidebar> 

   </div>
    </div>
  )
}

export default AdminSidebar