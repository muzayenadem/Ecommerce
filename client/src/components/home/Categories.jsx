import React, {useEffect, useState } from 'react'

function Categories() {
    const [allProduts , setAllProducts] = useState([])
    const data = [1,2,3,4,5,6,7,8,9,0,1,2,4,5,7,8,9,0,4,5,3,2,1,3,4,55,66,7,88,9,7,5,4,3,2,3,4,8,6]
    const [currentIndex,setCurrenntIndex] = useState(0)
useEffect(()=>{
    axios.get('http://localhost:4300/products')
    .then(result => setAllProducts(result.data))
    .catch(err => setAllProducts(err.message))
  },[])
  return (
    <div className='flex-col container mx-auto place-content-center text-center items-center  md:flex md:flex-row overflow-x-auto bg-white gap-4 py-3 px-4 ml-5'>
        {
            allProduts.map((single,index) =>{
                return <div className='flex justify-around bo mb-3 md:flex-col md:flex-none items-center place-self-center place-content-center'key={index}>
                    <img 
                    src={`http://localhost:4300/ProductsImage/${single.image}`} 
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