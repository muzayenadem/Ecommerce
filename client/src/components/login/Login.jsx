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
    <div  className='border-spacing-x-4 content-center w-1/2 ml-80'>
       <form onSubmit={loginHandler}  className='flex-row shadow-2xl rounded-2xl align-middle items-center  pl-20 px-10 py-10 mt-8 mb-10 bg-gradient-to-r  from-black p-10 w-1/2 to-slate-400'>
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
  
  <button type='submit' className='sm:px-10 relative rounded-lg mt-3 ml-12 font-bold bg-green-700 text-center py-3 px-20 text-white hover:text-red-700 '>LOGIN</button>
    </form>

    
   </div>
  )
}

export default Login