import React from 'react'
import log from  './kurs.jpg'
import {Menu,MenuItem} from 'react-pro-sidebar'
function Home() {
  return (
    // <section class='gird dark:bg-gray-900 w-full h-auto flex flex-wrap m-7 p-1 '>
    //   <div className=' w-screen md:items-center md:text-left md:mr-10 text-center bg-indigo-600 rounded-xl shadow-2xl flex flex-wrap  justify-between '>
    //     <div className='w-3/4'>
    //     <input
    //     type='search'
    //     placeholder='search here'
    //     className='rounded-2xl px-3 py-4 shadow-xl bg-white text-left border-white m-4 w-3/4 focus:border-none focus:outline-none'
    //     />
    //     <button className='bg-violet-950 text-center text-white font-bold px-10 py-3 rounded-2xl '>Search</button>
    //     </div>
       
    //     <h1 className='text-left ml-7 text-gray-300 font-light font-serif text-2xl px-3 py-5'>Eccommers Website</h1>
    //   </div >
    
    // <div className='w-full text-center mt-10 mb-10'>
    //   <h1 className='text-orange-500 font-bold'>Product from database that used for this Ecommerce Website</h1>
    //   <p className='font-bold text-2xl mt-2'>Products</p>
    //   <p className='text-green-900 m-4'>the most latest product</p>
    // </div>
    //   <div className='container mx-auto py-12 grid mt-5 place-items-center  grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full'>
    //   {
    //     data.map((result)=>{
    //       return     <div className='w-[200px] h-[200px] '>
    //       <img src={log}  alt="" 
    //     className=' block sm:text-cen '
    //     />
    //    <p className='font-light font-sans text-left '>product name</p>
    //    <p className='text-indigo-600'>price $45</p>
    //    <p className='text-center'>this is very rated products</p>
    //       </div>
    //     })
    //   }
    
    //   </div>
    // </section>
    <>
    <Menu className='w-60 ml-4 border-2 shadow-md mt-20'>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem >
        <h4>Home</h4>
      </MenuItem>
    </Menu>
    </>
  )
}

export default Home

const data = [1,2,3,4,5]