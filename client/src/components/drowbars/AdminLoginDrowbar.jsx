import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import logo from './br1.jpg'
import LoginD from '../dialougs/LoginD'

import {useDispatch, useSelector } from 'react-redux'
import { yesOpendAdminLogin,noOpendAdminLogin } from '../../feutures/drobarStates/AdminLoginSlice'


function AdminLoginDrawbar({}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    //const [isOpen, setIsOpen] = useState(false) 
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.adminLoginState.isOpen)
    console.log(isOpen)
    // despatching


     const navigate = useNavigate()
   

    const loginHandler = (e) =>{
     e.preventDefault()
  
     try {   
       dispatch(noOpendAdminLogin())
       axios.post('http://localhost:4300/adminlogin',{email,password})
       .then(()=>{
          // window.location = 'http://localhost:5173/profile'
          navigate('/profile')

       })
       .catch((err)=>{
          console.log(err.message)
       })
     } catch (error) {
      console.log(error.message)
     }
     dispatch(noOpendAdminLogin())
    }


   
  return (
    <div  className='relative inline-block text-left'>
    {/* <div>
        <button onClick={toggleDropDown}  type='button' className='top-0 right-0 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-1' id='options-menu' >
          Login
        </button>
        <span onClick={()=>dispatch(noOpend())} >Login</span>
    </div> */}

    {
        isOpen === true && (
            <div className='container origin-top-right absolute  top-40 -right-96 p-10 rounded-2xl w-96 mt-[100px] text-center shadow-lg bg-white  place-items-center ring-1 ring-black ring-opacity-5'>
                <div
                className='py-1'
                role='menu'
               onMouseLeave={()=>dispatch(noOpendAdminLogin())}
                aria-orientation='vertical'
                aria-labelledby='options-menu'
                >
           
           <form onSubmit={loginHandler}  >
    <label className='text-white font-bold text-xl mb-2'>Email</label><br/>
    <input 
    type='email' 
    placeholder='email'
    onChange={(e)=> setEmail(e.target.value)}
    className='text-left pl-3 pt-2 pb-2 border-eal-700 border-8 rounded-xl w-full'
    /><br/>
    <label className='text-white font-bold text-xl mb-2'>Password</label><br/>
    <input 
    type='password' 
    placeholder='first name'
    onChange={(e)=> setPassword(e.target.value)}
    className='text-left pl-3 pt-2 pb-2 border-eal-700 border-8 rounded-xl w-full'
    /><br/>
 
    <button type='submit' className='rounded-lg mt-3 ml-12 font-bold bg-green-700 text-center py-3 px-20 text-white hover:text-red-700 '> Login</button>
   </form>


                </div>
            </div>
        )
    }
  </div>
  )
}

export default AdminLoginDrawbar