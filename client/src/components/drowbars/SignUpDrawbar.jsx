import React, { useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import logo from './br1.jpg'
import LoginD from '../dialougs/LoginD'
import { useDispatch, useSelector } from 'react-redux'
import { yesOpendSignup,noOpendSignup } from '../../feutures/drobarStates/signUpState'
import { yesOpend,noOpend } from '../../feutures/drobarStates/loginState'

function SignUpDrawbar() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
  
    // const navigate = useNavigate()
  

const isOpen = useSelector(state => state.signUpState.isOpen)
console.log(isOpen)

const dispatch = useDispatch()


    const signupHandler = (e) =>{
        e.preventDefault()
     
        try {
          axios.post('http://localhost:4300/signup',{firstName,lastName,email,password,confirmPassword})
          .then(()=>{
            dispatch(noOpendSignup())
            dispatch(yesOpend())
          })
          .catch((err)=>{
             console.log(err.message)
          })
        } catch (error) {
         console.log(error.message)
        }
       }

    //onst [isOpen, setIsOpen] = useState(false) 

    // const toggleDropDown = ()=>{
    //     setIsOpen(!isOpen)
    // }
  return (
    <div  className='relative inline-block text-left'>
    {/* <div>
        <button  type='button' className='top-0 right-0 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-1' id='options-menu' >
      SignUp
        </button>
    </div> */}

    {
        isOpen && (
            <div className='origin-top-right absolute -right-96 p-10 rounded-2xl w-96 top-40 text-center shadow-lg bg-slate-800  place-items-center ring-1 ring-black ring-opacity-5'>
                <div
                className='py-1'
                role='menu'
                //  onMouseLeave={()=> dispatch(noOpendSignup())}
                aria-orientation='vertical'
                aria-labelledby='options-menu'
                >
           
           <form onSubmit={signupHandler}  >
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
            </div>
        )
    }
  </div>
  )
}

export default SignUpDrawbar