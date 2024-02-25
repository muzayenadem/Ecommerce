import React, { useEffect, useState } from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import ProfileTopnav from '../../components/topNav/ProfileTopnav'
import DashboardSidebar from '../../components/Sidebars/DashboardSidebar'
//
import { fetchAdminToken } from '../../feutures/Tokens/adminToken'
import { fetchToken } from '../../feutures/Tokens/tokenSlice'
import {useDispatch,useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
function Dashboard() {
const [profile,setProfile] = useState({}) 
useEffect(()=>{
  axios.get('http://localhost:4300/profileData')
  .then(result =>{
    setProfile(result.data)
  })
},[])
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(fetchToken())
  },[])
  const token = useSelector(state => state.token.token)
  console.log(token)

  useEffect(()=>{
    dispatch(fetchAdminToken())
  },[])
  const adminToken = useSelector(state => state.adminTokenState.token)
  console.log(adminToken)
  return (
    <div>
      { token == true ?
      <div className='w-screen'>

        <ProfileTopnav/>
        <div className='flex justify-start'>
    <Sidebar 
   className='w-72 h-[100vh] bg-white shadow-md  hidden md:block'
   >
    <Menu>
    {/* <MenuItem component={<Link to={'/market/'}/>}  icon={<OpenInBrowser/>}>
            <Typography variant='body2'>Browse all</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/market/vehicle'}/>}  icon={<Notifications/>}>
            <Typography variant='body2' >Notifications</Typography>
            </MenuItem> */}
            <div
            className='w-full items-center self-center'
            >
              <img 
              className='w-36 h-36 rounded-full items-center ml-[20%]'
              src={`http://localhost:4300/UsersImage/${profile.image}`} 
              alt="no connection" />
              <h1
              className='font-light text-center text-md m-2'
              >Admin</h1>
              <h1
              className='font-bold text-2xl text-center m-3'
              >{profile.firstName} {profile.lastName}</h1>
              <hr/>
            </div>
       {adminToken && <MenuItem component={<Link to={'/profile/product'}/>}>
          Products
        </MenuItem>}
        <MenuItem>
        Messages
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
        <MenuItem component={<Link to={'/profile/mainprofile'}/>}>
          Account
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
        <MenuItem>
          Shop
        </MenuItem>
        <MenuItem>
          Shop
        </MenuItem>
    </Menu>

   </Sidebar>
 <div className='w-[100%] md:w-[80%]'>
  <Outlet/>
 </div>
</div>
      </div> : <h1 className='text-center mt-28'>something is error</h1>
       } 
    </div>
  )
}

export default Dashboard