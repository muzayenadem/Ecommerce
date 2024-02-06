import React from 'react'
import { Link } from 'react-router-dom'
function TopNav() {
  return (
    <>
    <div className=' flex  bg-white m-0 justify-between    min-w-full   h-auto '>
      <div className=' ml-4 mt-2 mb-2 ' >
        <h1 className=' text-left text-2xl   text-green-800'>Ecommerce</h1>
      </div>
      <div>
        <details className='  mt-2 mb-2'><details></details></details>
      </div>
      <div className=' mt-2 mb-2  mr-4'>
        <ul className=' text-red-600 flex no-underline  gap-2 '>
          <li >     <a href='/'>HOME</a></li>
          <li >    <a href='/'>ABOUT</a></li>
          <li >     <a href='/login'>LOGIN</a></li>
          <li >    <a href='/signup'>SIGNUP</a></li>
        </ul>
      </div>
    </div>
    <hr></hr>
    </>
  )
}

export default TopNav