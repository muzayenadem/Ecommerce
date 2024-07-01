import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import logo from './br1.jpg'

import {useDispatch, useSelector } from 'react-redux'
import { yesOpend,noOpend } from '../../feutures/drobarStates/loginState'
import { fetchToken } from '../../feutures/Tokens/tokenSlice'
import { yesOpendAdminLogin,noOpendAdminLogin } from '../../feutures/drobarStates/AdminLoginSlice'
import { fetchProfileData } from '../../feutures/data/profileData'
import cookies from 'js-cookie'

function ProfileDrawbar({opened,nopend}) {

    const [profile,setProfile] = useState({})
    const [isOpen, setIsOpen] = useState(false) 

    // despatching
    // const dispatch = useDispatch()
    //  useEffect(()=>{
    //   dispatch(fetchToken())
    //  },[])
    //  const token = useSelector((state) => state.token.token)
    //  console.log(token)
     //const navigate = useNavigate()
  
     const toggleDropDown = ()=>{
      setIsOpen(!isOpen)
    }   
    const distpatch = useDispatch()  
    const navigate = useNavigate('')
    const logoutHandler = async () => {
      try {
        const response = await axios.get('https://ecommerce-8yhy.onrender.com/logout');
        console.log(response.data);
        // Remove the token cookie from the client side
        Cookies.remove('user', { path: '/' });
        window.location= 'https://facebook.com'
      } catch (error) {
        console.error('There was a problem with the logout request:', error);
      }
    };
    
    useEffect(()=>{
      axios.get('https://ecommerce-8yhy.onrender.com/profiledata')
      .then(result => setProfile(result.data.userData))
      .catch(err => setProfile(err.message))
  },[])
  
     //const profile = useSelector(state => state.profileData.profile)
    // console.log(profile)
    //  const {firstName,lastName,email} = profile
  return (
    <div  className='relative inline-block text-left'>
    <div className='flex'>
        {/* <button onClick={toggleDropDown}  type='button' className='top-0 right-0 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-1' id='options-menu' >
          Login
        </button>
        <span onClick={()=>dispatch(noOpend())} >Login</span> */}
        {
          profile.image ?
            <img onMouseOver={toggleDropDown}  src={`https://ecommerce-8yhy.onrender.com/UsersImage/${profile.image}`} className='w-10 h-10 rounded-full cursor-pointer' alt="" /> : 
            <div className='w-10 h-10 rounded-full cursor-pointer capitalize bg-neutral-900 text-white font-bold text-center '>
             <h1 onClick={toggleDropDown} className='text-center mt-2'> {profile.firstName}</h1>
            </div>
        }
       
         {/* <span className='font-bold text-orange-700 text-2xl'>&#9776;</span> */}
    </div>

    {
        isOpen && (
            <div className='container origin-top-right absolute -top-10 -right-10 p-0 rounded-2xl w-96  mt-[100px]  shadow-lg bg-white place-items-center ring-1 ring-black ring-opacity-5'>
                <div
                className='py-1'
                role='menu'
                aria-orientation='vertical'
               
                aria-labelledby='options-menu'
                >
                  <div>
                    <div className='w-full h-auto flex mb-5 justify-around'>
                    {
          profile.image ?
            <img onClick={toggleDropDown} src={`https://ecommerce-8yhy.onrender.com/UsersImage/${profile.image}`} className='w-14 h-14 rounded-full cursor-pointer' alt="" /> : 
            <div className='w-14 h-14 rounded-full cursor-pointer capitalize bg-neutral-900 text-white font-bold text-center '>
             <h1 onClick={toggleDropDown} className='text-center text-2xl mt-3'> {profile.firstName[0]} {profile.lastName[0]}</h1>
            </div>
        }
                      <h4>{profile.firstName} {profile.lastName}</h4>
                    </div>
                    <hr></hr>
                    <details>
                      <summary>Contents</summary>
                    <p className='leading-5 text-left font-light'> My name is muzayen adem i am from ethiopia i am software developer </p>
                    </details>
                    
                    <a href='/profile' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >My Ezasco</a>
                    <Link onClick={toggleDropDown} to={'/profile/message'} className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Messages</Link>
                    <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Orders</a>
                    <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >RQFs</a>
                    <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Favorites</a>
                    <a href='/profile' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Account</a>
                    <hr></hr>
                    <i onClick={()=>{
                      distpatch(yesOpendAdminLogin())
                    }} className='block px-4 py-2 mt-5 mb-5 text-gray-700 hover:bg-gray-100 font-bold text-xl' >Membership programm</i>
                    <hr></hr>
                    <i onClick={logoutHandler} className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Sign out</i>
                   
                  </div>
                </div>
            </div>
        )
    }
  </div>
  )
}

export default ProfileDrawbar