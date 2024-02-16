import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginHandler = (e) =>{
     e.preventDefault()
  
     try {
       axios.post('http://localhost:4300/login',{email,password})
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
    <div  className='container items-center mx-auto py-20 '>
    
      <div className='p-[6%] w-3/4 lg:w-1/3 lg:p-[8%] place-items-center ml-[20%] bg-slate-900 text-white shadow-green-800 shadow-xl rounded-xl'>
        {/* <form onSubmit={loginHandler} className='flex flex-col'>
          <label>
            Email
          </label>
          <input type='email' placeholder='enter you email'/>
          <label>
            Password
          </label>
          <input type='password' placeholder='enter your password'/>
          <button type='submit'>Login</button>
        </form> */}
  <p className='title'>Login your Account</p>
<form onSubmit={loginHandler} className=''>
     <label className='mb-5'>Email</label><br/>
     <input 
     type='email' 
     placeholder='email'
     className='rounded-xl text-left mb-5 py-1 text-black px-10 '
     onChange={(e)=> setEmail(e.target.value)}
     
     /><br/>
     <label >Password</label><br/>
     <input 
     type='password' 
     placeholder='first name'
     onChange={(e)=> setPassword(e.target.value)}
    
     /><br/>
  
  <button type='submit'>LOGIN</button>
    </form>
      </div>
       {/* <form onSubmit={loginHandler}  className='flex-row shadow-2xl rounded-2xl align-middle items-center  pl-20 px-10 py-10 mt-8 mb-10 bg-gradient-to-r  from-black p-10 w-1/2 to-slate-400'>
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
  
  <button type='submit' className='px-8 rounded-lg mt-3 ml-12 font-bold bg-green-700 text-center py-3  md:px-20 text-white hover:text-red-700 '>LOGIN</button>
    </form> */}

    
   </div>
  )
}

export default Login