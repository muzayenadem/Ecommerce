import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Drowbar from '../drowbars/Drowbar'
import LoginD from '../dialougs/LoginD'
import SignUpDrawbar from '../drowbars/SignUpDrawbar' 
import LoginDrowbar from '../drowbars/LoginDrowbar'
import ProfileDrawbar from '../drowbars/ProfileDrawbar'
import { useSelector,useDispatch } from 'react-redux'
import { fetchToken } from '../../feutures/Tokens/tokenSlice'
import AdminLoginDrawbar from '../drowbars/AdminLoginDrowbar'
import logo from '../drowbars/br1.jpg'

 


function ProfileTopnav() {



const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(fetchToken())
 },[])
 const token = useSelector((state)=> state.token.token)
 console.log(token)


  return (
    <div className=' flex shadow-md bg-white m-0 justify-between h-auto py-3 px-10 mx-auto w-screen '>
    <div className='text-green-950 font-bold text-2xl font-mono ml-4 mt-2 mb-' >
     <span className='text-red-700'>Eza</span>Sco
    </div>
   
    <div className='hidden md:flex  mt-2 mb-2  mr-4 space-x-5'>
        <p
        className=' px-4 text-center py-1 border rounded-3xl text-blue-600' 
        >start selling now</p>
         <ProfileDrawbar /> 
         <select 
         className='py-1 px-3 rounded-3xl bg-white focus:border-none focus:outline-none border-none'
         >
            <option>My account</option>
         </select>
         <select 
         className='py-1 px-3 rounded-3xl bg-white focus:border-none focus:outline-none border-none'
         >
            <option>Help</option>
         </select>
         <select 
         className='py-1 px-3 rounded-3xl bg-white focus:border-none focus:outline-none border-none'
         >
            <option className='m-3' value={'english'}>English</option>     
            <option value={'english'}>English</option>
            <option value={'english'}>Oromic</option>
            <option value={'english'}>Amharic</option>
            <option value={'english'}>Tigrigna</option>
       
         </select>
    </div>
  </div>
  )
}

export default ProfileTopnav