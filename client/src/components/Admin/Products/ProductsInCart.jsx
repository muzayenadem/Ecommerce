import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsInCart() {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        axios.get('https://ecommerce-8yhy.onrender.com/profileData')
        .then(result =>{
            setProducts(result.data.productsInCart)
            console.log(products)
        })
        
    },[])
  return (
    <div>
        {
            products !== undefined?
            <div>
                {
            products.map((single,i)=>{
                return <div key={i} className='w-[60%] flex  justify-between h-auto bg-slate-100 p-3 m-2'>
               <img src={`https://ecommerce-8yhy.onrender.com/ProductsImage/${single.image}`}
               className='w-20 h-24 rounded-md'
               />
               <div className='ml-8 mt-2 '>
                <h1>{single.name}</h1>
                <h1>{single.title}</h1>
                <h1>{`$ ${single.price}`}</h1>
               </div>
               <div className=''><button className='btn ml-[5%]' onClick={()=> alert('delete')}>Delete</button></div>
                </div>
                 })}
            </div>
             : <div>
                <h1>You don't have any cart</h1>
             </div>
    }
    </div>
  )
}

export default ProductsInCart