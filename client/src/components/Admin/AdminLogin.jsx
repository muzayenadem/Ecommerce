import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate('')
    const loginAdminHadler = (e) =>{
        e.preventDefault()
        console.log(email, password)
        try {
            axios.post('https://ecommerce-8yhy.onrender.com/adminlogin',{email,password})
            .then(()=>
            window.location = 'https://ezasco.vercel.app/admindashboard'
           // console.log('this is successfy sent to server')
            
          )
          .catch(()=>
          console.log('there is something wrong')
        )
        } catch (error) {
            console.log('this is very bad habit')
        }
    }
  return (
   <>
         <div>AdminLogin</div>
        <form onSubmit={loginAdminHadler}>
        <input
        type='email' 
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='enter your email'/>
        <input 
        type='password'
        onChange={(e)=> setPassword(e.target.value)} 
        placeholder='enter your password'/>
        <button>Login</button>
    </form>

   </>
  )
}

export default AdminLogin