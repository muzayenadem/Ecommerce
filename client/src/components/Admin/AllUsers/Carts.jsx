import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function CartS() {
    const [products, setProducts] = useState([])
    const {singleUserId} = useParams()
    useEffect(()=>{
        try {
            axios.get('http://localhost:4300/singleuserdata'+singleUserId)
            .then(result=>{
                setProducts(result.data.productsInCart)
            })
            .catch(err=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error.message)
        }
    },[])
  return (
    <div>
        {
            !products ?
            <div>
                <div className='w-[60%] ml-[20%] mt-[8%] bg-slate-200 border-2 shadow-md rounded-md p-10' >
                    <h1 className='font-bold text-green-700 text-center text-3xl'>There is no product in this cart </h1>
                </div>
            </div>
            :
        <div>
            {
                products.map((single,i)=>{
                    return <div key={i} className='p-5 bg-slate-300 m-4 rounded-md '>
                        <img src={`http://localhost:4300/ProductsImage/${single.image}`}
                        className='w-20 h-24 rounded-md'
                        />
                    </div>
                })
            }
        </div>
}
    </div>
  )
}

export default CartS