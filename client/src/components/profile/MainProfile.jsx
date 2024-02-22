import React from 'react'
import { MenuItem,Menu, Sidebar } from 'react-pro-sidebar'
import { Link, Outlet } from 'react-router-dom'

function MainProfile() {
  return (
    <div className='flex justify-start  p-8'>
        <div className='w-[30%] '>
            {/* <ul className='p-4 block '>
                <li><a href=''/> Edit profile</li>
                <li>Edit Profile</li>
                <li>Edit Profile</li>
                <li>Edit Profile</li>
            </ul> */}
            <Sidebar className='w-24  h-72'>
                <Menu>
                    <MenuItem component={<Link  to=''/>} >
                     Edit Account
                    </MenuItem>
                    <MenuItem component={<Link  to='notification'/>} >
                      Notification
                    </MenuItem>
                    <MenuItem component={<Link  to='choseplan'/>} >
                     Chose Plan
                    </MenuItem>
                    <MenuItem component={<Link  to='passwordAndsecurity'/>} >
                     Passswowrd & Security
                    </MenuItem>
                </Menu>
            </Sidebar>

        </div>
        <div className='ml-32'>
        <Outlet/>
        </div>
    </div>
  )
}

export default MainProfile