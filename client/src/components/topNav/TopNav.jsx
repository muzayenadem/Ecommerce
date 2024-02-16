import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Drowbar from '../drowbars/Drowbar'
import LoginD from '../dialougs/LoginD'
import SignUpDrawbar from '../drowbars/SignUpDrawbar' 
import LoginDrowbar from '../drowbars/LoginDrowbar'
import ProfileDrawbar from '../drowbars/ProfileDrawbar'
import { useSelector,useDispatch } from 'react-redux'
import { yesOpend,noOpend } from '../../feutures/drobarStates/loginState'
import { yesOpendSignup,noOpendSignup } from '../../feutures/drobarStates/signUpState'
import { yesOpendAdminLogin,noOpendAdminLogin } from '../../feutures/drobarStates/AdminLoginSlice'
import AdminLoginDrawbar from '../drowbars/AdminLoginDrowbar'
import { fetchToken } from '../../feutures/Tokens/tokenSlice'
import logo from '../drowbars/br1.jpg'

function TopNav() {

  const loginState = useSelector(state=> state.loginState.isOpen)
  console.log(loginState)


  const adminLoginState = useSelector(state=> state.adminLoginState.isOpen)
  console.log(loginState)

  const singupState = useSelector(state => state.signUpState.isOpen)
  console.log(singupState)
  const dispatch = useDispatch()



   useEffect(()=>{
    dispatch(fetchToken())
   },[])
   const token = useSelector((state)=> state.token.token)
   console.log(token)




  return (
    <>
    <div className=' flex shadow-md bg-white m-0 justify-between h-auto py-5 px-10 mx-auto w-screen '>
      <div className='text-green-950 font-bold text-2xl font-mono ml-4 mt-2 mb-' >
       <span className='text-red-700'>Eza</span>Sco
           {loginState && !token && <li className='list-none'><LoginDrowbar /></li>}
           {singupState && !token && <li className='list-none'><SignUpDrawbar /></li>}
           <li className='list-none'><AdminLoginDrawbar /></li>
      </div>
      <div className='hidden md:block'>
       <input 
       className='text-left py-2 px-3 border-2 rounded-3xl focus:outline-none'
       placeholder='Search here'/>
       <button
       className='text-center ml-4 bg-green-950 text-white font-bold py-2 px-4 rounded-3xl'
       >Search</button>
      </div>
      <div className='hidden  md:block mt-2 mb-2  mr-4 '>
      {!token && (  <ul className=' text-red-600 flex no-underline  gap-5 '>
          <li  className='text-1xl text-gray-900 font-bold hover:text-orange-900 duration-200 translate-1 ease-in'>     <a href='/'>HOME</a></li>
          <li className='text-1xl text-gray-900 font-bold hover:text-orange-900 duration-200 translate-1 ease-in' >    <a href='/'>ABOUT</a></li>
          {/* {loginState && <li ><LoginDrowbar /></li>}
           {singupState && <li><SignUpDrawbar /></li>} */}
          <li
           className='text-1xl text-gray-900 font-bold hover:text-orange-900 duration-200 translate-1 ease-in'
           onClick={()=>{
            dispatch(yesOpendSignup())
            dispatch(noOpend())
           }}>  SignUp</li>
            <li
            className='text-1xl text-gray-900 font-bold hover:text-orange-900 duration-200 translate-1 ease-in'
            onClick={()=> {
          dispatch(yesOpend())
          dispatch(noOpendSignup())
        }}> Login</li>
          {/* <li className='text-1xl text-gray-900 font-bold hover:text-orange-900 duration-200 translate-1 ease-in' >    <a href='/signup'>SIGNUP</a></li> */}
        </ul>)}
       {
        token && (<>
        <ul className='flex'>
          <li className='ml-5'>feutures</li>
          <li className='ml-5'>buyer central</li>
          <li className='ml-5'>help central</li>
          <li className='ml-5'>get App</li>
          <li className='ml-5'>become a supplier</li>
        </ul>
        </>)
       }

      </div>
      {!token &&  <div className=' md:hidden mt-2 mb-2 mr-4' >
        <Drowbar/>
      </div>}
      {token && <>
     
      <ProfileDrawbar />
      </>}
    </div>
      <div>
        <h4 className='text-center bg-orange-50 p-2'>trade-assurance
Ezasco.com protects you from payment to delivery with Trade Assurance.</h4>
      </div>
    </>
  )
}

export default TopNav