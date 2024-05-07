import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div className='w-full ml-[2%]'>
    <div
    className=' py-10 self-center hidden md:block'
    >
       
        <ul  className='flex justify-between space-x-9 border-b-2 border-black pb-6'>
            <li className='hover:text-blue-600 duration-200 ease-in' > <Link  to={'/admindashboard/product/postproduct'}>Post Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'> <Link  to={'/admindashboard/product/updateproduct'}>Update Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/mostlikedproduct'}>Most Liked</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/deleteproduct'}>Delete Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/mostselledproduct'}>Most Selled Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/listproduct'}>List Product</Link></li>
        </ul>
        
     </div>
     <div
    className=' py-10 self-center  md:hidden'
    >
       
        <ul  className='flex justify-between space-x-9 border-b-2 border-black pb-6'>
            <li className='hover:text-blue-600 duration-200 ease-in' > <Link  to={'/admindashboard/product/postproduct'}>P</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'> <Link  to={'/admindashboard/product/updateproduct'}>U</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/mostlikedproduct'}>M</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/deleteproduct'}>D</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/mostselledproduct'}>M</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/admindashboard/product/listproduct'}>L</Link></li>
        </ul>
        
     </div>
     <div className=''>
        <Outlet/>
     </div>
    </div>
  )
}

export default Products