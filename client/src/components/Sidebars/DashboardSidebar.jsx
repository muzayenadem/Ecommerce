import React from 'react'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'


function DashboardSidebar() {
  return (
   <Sidebar 
   className='w-72 h-[100vh] bg-black '
   >
    <Menu>
    {/* <MenuItem component={<Link to={'/market/'}/>}  icon={<OpenInBrowser/>}>
            <Typography variant='body2'>Browse all</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/market/vehicle'}/>}  icon={<Notifications/>}>
            <Typography variant='body2' >Notifications</Typography>
            </MenuItem> */}
        <MenuItem >
          Products
        </MenuItem>
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
        <MenuItem>
          Shop
        </MenuItem>
    </Menu>

   </Sidebar>
  )
}

export default DashboardSidebar