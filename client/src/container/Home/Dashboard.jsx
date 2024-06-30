import React, { useEffect, useState } from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import ProfileTopnav from '../../components/topNav/ProfileTopnav'
import DashboardSidebar from '../../components/Sidebars/DashboardSidebar'

import { fetchToken } from '../../feutures/Tokens/tokenSlice'
import {useDispatch,useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
function Dashboard() {
const [profile,setProfile] = useState({}) 
const [isTrue, setIsTrue] = useState(false) 
useEffect(()=>{
  axios.get('https://ecommerce-8yhy.onrender.com/profileData')
  .then(result =>{
    setProfile(result.data.userData)
  })
},[])
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(fetchToken())
  },[])

  
  const token = useSelector(state => state.token.token)
  console.log(token)
  return (
    <div className={`absolute `}>
      { token == true ?
      <div className='w-screen'>
        <ProfileTopnav/>
        <div className='flex justify-start'>
          <DashboardSidebar/>
        <div className='w-[100%]'>
  <Outlet/>
 </div>
</div>
      </div> : <h1 className='text-center mt-28'>something is error</h1>
       } 
    </div>
  )
}

export default Dashboard