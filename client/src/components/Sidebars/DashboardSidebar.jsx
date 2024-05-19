import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'


function DashboardSidebar() {
  const [profile,setProfile] = useState({}) 
const [isTrue, setIsTrue] = useState(false) 
useEffect(()=>{
  axios.get('http://localhost:4300/profileData')
  .then(result =>{
    setProfile(result.data.userData)
  })
},[])
  return (
    <div className='  top-16 left-0 sticky'>
        <div className='  sticky top-16 left-0'>
    <Sidebar 
   className={`w-72 sticky top-0 left-0 h-[90vh] bg-white shadow-md hidden  md:block ${!isTrue ? 'hidden' : 'block'} ${isTrue && 'absolute'}`}  
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
              className='font-bold text-2xl text-center m-3'
              >{profile.firstName} {profile.lastName}</h1>
              <hr/>
            </div>
        <MenuItem component={<Link to={'/profile/message'}/>}>
        Messages
        </MenuItem>
        <MenuItem>
          Bussiness Card
        </MenuItem>
        <MenuItem component={<Link to={'/profile/my-carts'}/>}>
          My Cart
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
    </Menu>

   </Sidebar>
   </div>
   </div>
  )
}

export default DashboardSidebar