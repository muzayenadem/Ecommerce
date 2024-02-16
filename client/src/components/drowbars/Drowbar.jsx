import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './br1.jpg'
import LoginD from '../dialougs/LoginD'
import { useSelector,useDispatch } from 'react-redux'
import { yesOpend,noOpend } from '../../feutures/drobarStates/loginState'
import { yesOpendSignup,noOpendSignup } from '../../feutures/drobarStates/signUpState'
import { fetchToken } from '../../feutures/Tokens/tokenSlice'
function Drowbar() {
    const [isOpen, setIsOpen] = useState(false) 

    const toggleDropDown = ()=>{
        setIsOpen(!isOpen)
      }

      const dispatch = useDispatch()

   
      useEffect(()=>{
        dispatch(fetchToken())
      },[])


      const token = useSelector(state => state.token.token)
      console.log(token)
  return (
  <div  className='relative inline-block text-left'>
    <div>
        <button onClick={toggleDropDown}  type='button' className='top-0 right-0 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500' id='options-menu' >
        &#9776;
        </button>
    </div>

    {
        isOpen && (
            <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md  shadow-lg bg-white place-items-center ring-1 ring-black ring-opacity-5'>
                <div
                className='py-1'
                role='menu'
                onMouseLeave={toggleDropDown}
                aria-orientation='vertical'
                aria-labelledby='options-menu'
                >
                    <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Home</a>
                    <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >About</a>
                    <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Feutures</a>
                   { !token && (<>
                    <i onClick={()=> {
                      dispatch(yesOpendSignup())
                       dispatch(noOpend())
                       }} className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Sign Up</i>
                    <i onClick={()=> {
                      dispatch(yesOpend())
                      dispatch(noOpendSignup())
                    }} className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Login</i>
                   </>)}
                   {
                    token && <>  <a href='/' className='block px-4 py-2  text-gray-700 hover:bg-gray-100 font-bold text-xl' >Logout</a></>
                   }
                </div>
            </div>
        )
    }
  </div>
  )
}

export default Drowbar