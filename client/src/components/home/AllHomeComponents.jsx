import React, { useState } from 'react'
import HomeSidebar from './HomeSidebar'
import Categories from './Categories'
import TopNav from '../topNav/TopNav'
import ProductsOutPage from './ProductsOutPage'
import { Outlet } from 'react-router-dom'
function AllHomeComponents() {
  const [open,setOpen] = useState(false)
  console.log(open)
  return (
    <>
    <TopNav/>
    <div className='container mx-auto py-4  '>
      <button onClick={()=> setOpen(!open)}>{!open == true ? 'Open' : 'Close'}</button>
         <dialog onMouseLeave={()=>setOpen(!open)} open={open} className='w-56 h-56 shadow-md rounded-2xl '> 
        <div>
          klfjvohre weidufiewu e9wurf9 3e9wrf9 wer 9
        </div>
      </dialog>
      <div className='flex justify-between mb-5' >
      <div className='hidden bg-white md:block w-72 h-[100vh] overflow-hidden p-5 rounded-md'>
        {/* <HomeSidebar/> */}
        <div>
          <p className='font-semibold mb-2'>Categories</p>
          <p className='mb-2'>handbags</p>
          <p className='mb-2'>arm Bags</p>
          <p className='mb-2'>kid's shoulder Bags</p>
          <p className='font-semibold mb-2'>Supplier types</p>
          <input className='mr-3 mb-2' type='checkbox'/> Trade Assurance
          <br/>
          <input className='mr-3 mb-2' type='checkbox'/> Verified Supplier
          <br/>
          <p className='mb-2 font-semibold'>Main Order</p>
          <div className='flex mb-2'>
          <input type='text'  placeholder='&#9740; Max' className='py-1 w-[70%] mr-3 px-1 mt-2 mb-2 text-left focus:outline-none border-2 focus:border-2'></input>
          <button className='border-2 text-center rounded-3xl py-0 px-4'>Ok</button>
          </div>
          <div>
            <details className='mb-4 pt-2'>
              <summary>Supplier country|region</summary>
            <input type='text'  placeholder='&#9740; Search country' className='py-1  mt-2 mb-2 mr-3 px-1 text-left focus:outline-none border-2 focus:border-2'></input>
             <div  className='h-56 overflow-y-auto'>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             <input className='mr-3' type='checkbox'/> Ethiopia
             <br/>
             </div>
            </details>
          </div>
          <div>
            <details className='mb-3 pt-2'>
              <summary>Management certificate  </summary>
            <input type='text'  placeholder='&#9740; Search country' className='py-1  mr-3 px-1 text-left focus:outline-none border-2 focus:border-2'></input>
            <div  className='h-56 overflow-y-auto'>
            <input className='mr-3' type='checkbox'/> ISO
             <br/>
             <input className='mr-3' type='checkbox'/> BSCI
             <br/>
             <input className='mr-3' type='checkbox'/> FCI
             <br/>
             <p className='text-sm font-light mt-3 mb-3'>
             *Certification Disclaimer: Any assessment, certification, inspection L6387E DIP-8 Brand New Original Genuine Integrated Circuit IC Chip and/or related examination related to any authenticity of certificates are provided or conducted by
             </p>
          
             </div>
            </details>
          </div>
        </div>
      </div>
      <div className='md:w-[80%]'>
        <Categories/>
        {/* <ProductsOutPage/> */}
        <Outlet/>
      </div>
      </div>
      <div className='bg-white w-full h-8 '>
        <div className=''>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default AllHomeComponents