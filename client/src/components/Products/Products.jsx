import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
    <div
    className='container mx-auto py-10 self-center md:ml-[20%]'
    >
       
        <ul  className='flex justify-between space-x-9 border-b-2 border-black pb-6'>
            <li className='hover:text-blue-600 duration-200 ease-in' > <Link  to={'/profile/product/postproduct'}>Post Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'> <Link  to={'/profile/product/updateproduct'}>Update Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/profile/product/mostlikedproduct'}>Most Liked</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/profile/product/deleteproduct'}>Delete Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/profile/product/mostselledproduct'}>Most Selled Product</Link></li>
            <li className='hover:text-blue-600 duration-200 ease-in'><Link  to={'/profile/product/listproduct'}>List Product</Link></li>
        </ul>
     </div>
     <div className='ml-20'>
        <Outlet/>
     </div>
    </div>
  )
}

export default Products