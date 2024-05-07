import AdminLogin from '../AdminLogin'
import React, { useEffect, useState } from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import AdminTopnav from '../AdminTopnav'
//import DashboardSidebar from '../../Sidebars/DashboardSidebar'
//
import { fetchAdminToken } from '../../../feutures/Tokens/adminToken'
// import { fetchToken } from '../../../feutures/Tokens/tokenSlice'
import {useDispatch,useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import AdminSidebar from './AdminSidebar'
function AdminDashboard() {
const [adminprofile,setAdminProfile] = useState({}) 
const [isTrue, setIsTrue] = useState(false) 
useEffect(()=>{
  axios.get('http://localhost:4300/adminprofile')
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
  return (<>
  {
    !adminToken ? <>
    <AdminLogin/>
    </>: <>
    <div className={`absolute `}>
      <div className='w-screen'>
        <AdminTopnav/>
        <div className='flex justify-start'>
        <AdminSidebar/>
    <div className='w-[100%] '>
       <Outlet/>  
        </div>
       </div>
      </div> 
     </div>
    </>
  }
    </>
  )
}

export default AdminDashboard