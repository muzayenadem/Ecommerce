import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function  Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  

  const navigate = useNavigate()

  const signupHandler = (e) =>{
   e.preventDefault()

   try {
     axios.post('http://localhost:4300/signup',{firstName,lastName,email,password,confirmPassword})
     .then(()=>{
        navigate('/')
     })
     .catch((err)=>{
        console.log(err.message)
     })
   } catch (error) {
    console.log(error.message)
   }
  }
  return (
  <div  className='content-center w-1/2 ml-80'>
   <form onSubmit={signupHandler}  className='flex-row shadow-2xl bg-white  rounded-2xl align-middle items-center  pl-20 px-10 py-10 mt-8  mb-10 bg-gradient-to-r from-slate-400 to-black p-10 w-1/2'>
    <label className='text-white font-bold text-xl mb-2'>First Name</label><br/>
    <input 
    type='text' 
    placeholder='first name'
    onChange={(e)=> setFirstName(e.target.value)}
    className='text-left pl-3 pt-2 pb-2 border-eal-700 border-8 rounded-xl w-full'
    /><br/>
    <label className='text-white font-bold text-xl mb-2'>Last Name</label><br/>
    <input 
    type='text' 
    placeholder='last name'
    onChange={(e)=> setLastName(e.target.value)}
    className='text-left pl-3 pt-2 pb-2 border-eal-700 border-8 rounded-xl w-full'
    /><br/>
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
    <label className='text-white font-bold text-xl mb-2'>Confirm Password</label><br/>
    <input 
    type='password' 
    placeholder='confirm password'
    onChange={(e)=> setConfirmPassword(e.target.value)}
    className='text-left pl-3 pt-2 pb-2 border-eal-700 border-8 rounded-xl w-full'
    /><br/>
    <button type='submit' className='rounded-lg mt-3 ml-12 font-bold bg-green-700 text-center py-3 px-20 text-white hover:text-red-700 '>SIGNUP</button>
   </form>
  </div>
  )
}

export default  Signup