import React, {useEffect, useState } from 'react'

function Categories() {
    const [allProduts , setAllProducts] = useState([])
useEffect(()=>{
    axios.get('https://ecommerce-8yhy.onrender.com/products')
    .then(result => setAllProducts(result.data))
    .catch(err => setAllProducts(err.message))
  },[])
  return (
    <div className='flex-col container mx-auto place-content-center text-center items-center  md:flex md:flex-row overflow-x-auto bg-white gap-4 py-3 px-4 ml-5'>
        {
            allProduts.map((single,index) =>{
                return <div className='flex justify-around bo mb-3 md:flex-col md:flex-none items-center place-self-center place-content-center'key={index}>
                    <img 
                    src={`https://ecommerce-8yhy.onrender.com/ProductsImage/${single.image}`} 
                    alt='' 
                    className={`w-20 h-20 rounded-full  `}></img>
                    <p>Laptop</p>
                </div>
            })
        }
    </div>
  )
}

export default Categories