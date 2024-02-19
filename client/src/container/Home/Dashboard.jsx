import React, { useEffect } from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import ProfileTopnav from '../../components/topNav/ProfileTopnav'
import DashboardSidebar from '../../components/Sidebars/DashboardSidebar'
//
import { fetchAdminToken } from '../../feutures/Tokens/adminToken'
import { fetchToken } from '../../feutures/Tokens/tokenSlice'
import {useDispatch,useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {


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
      <div>

        <ProfileTopnav/>
        <div className='flex justify-start'>
    <Sidebar 
   className='w-72 h-[100vh] bg-black hidden md:block'
   >
    <Menu>
    {/* <MenuItem component={<Link to={'/market/'}/>}  icon={<OpenInBrowser/>}>
            <Typography variant='body2'>Browse all</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/market/vehicle'}/>}  icon={<Notifications/>}>
            <Typography variant='body2' >Notifications</Typography>
            </MenuItem> */}
       {adminToken &&  <MenuItem component={<Link to={'/profile/product'}/>}>
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
        <MenuItem component={<Link to={'/profile/updateprofile'}/>}>
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
 <div>
  <Outlet/>
 </div>
</div>

      </div> : <h1 className='text-center mt-28'>something is error</h1>
       } 
    </div>
  )
}

export default Dashboard