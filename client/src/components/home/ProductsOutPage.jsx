import React, { useEffect, useState } from 'react'
import img1 from '../../ecoImages/img1.jpeg'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProductToken } from '../../feutures/Tokens/productToken'
import {Link} from 'react-router-dom'
import axios from 'axios'
function ProductsOutPage() {
const [allProduts , setAllProducts] = useState([])
const [value,setValue] = useState('')
const [serchedProduct,setSearchedProduct] = useState([])
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(fetchProductToken())
//   },[])
// const productToken = useSelector(state => state.productTokenState.data)
// console.log(productToken)
const searchHandler =async () =>{
 try {
  await axios.get('http://localhost:4300/searchproductcategory'+value)
  .then(result => setAllProducts(result.data))
  .catch(err => setSearchedProduct(err.message))
 } catch (error) {
  console.log(error.message)
 }
}
useEffect(()=>{
  axios.get('http://localhost:4300/products')
  .then(result => setAllProducts(result.data))
  .catch(err => setAllProducts(err.message))
},[])

const sendIdForServer = async(id) =>{
  try {
    await axios.get('http://localhost:4300/singleproduct'+id)
  } catch (error) {
    console.log(error.message)
  }
}


  return (
    <div>
      <div>
        <div className='ml-[20%] py-6'>
        <input 
       onChange={(e)=> setValue(e.target.value)}
       className='text-left py-2 px-3 border-2 rounded-3xl focus:outline-none'
       placeholder='Search here'/>
       <button
         onClick={searchHandler}
       className='text-center ml-4 bg-green-950 text-white font-bold py-2 px-4 rounded-3xl'
       >Search</button>
        </div>
      </div>
       <div>
      <div className='grid grid-cols-1 items-center container mx-auto self-center place-items-center text-center md:grid-cols-3 lg:grid-cols-4 '>
        { allProduts.map((single,index)=>{
          return <div key={index} className='items-center text-left place-items-center ml-5 mt-4 rounded-md p-5 bg-white'>
          <img 
          className='h-64'
          src={`http://localhost:4300/ProductsImage/${single.image}`} 
          alt="" />
          <p className='hover:underline mt-2 mb-2'
          >{single.title}</p>
          <p className='font-semibold text-xl'
          >{single.price}0</p>/ box
          <p>{single.name}</p>
          <p>{single.description}</p>
 <hr></hr>
 <Link to={`${single._id}`}>
              <button onClick={()=>sendIdForServer(single._id)} className='btn'>See More</button>
            </Link>
        </div>
        })} 
      </div>
    </div>
    </div>
  )
}

export default ProductsOutPage

// import React from 'react'
//  import img1 from '../../ecoImages/img1.jpeg'
// function Products() {
// // const data = [1,2,3,4,5,6,7,8,9,11,12,33,44,55,66,77,88,99,87,65,43,21]



//   return (
//     <div>
//       <div className='grid grid-cols-1 items-center container mx-auto self-center place-items-center text-center md:grid-cols-3 lg:grid-cols-4 '>
//         { data.map((single,index)=>{
//           return <div key={index} className='items-center text-left place-items-center ml-5 mt-4 rounded-md p-5 bg-white'>
//           <img 
//           className='h-64'
//           src={img1} 
//           alt="" />
//           <p className='hover:underline mt-2 mb-2'
//           >2024 very latest laptop this laptop is fast secure and worthy buying device</p>
//           <p className='font-semibold text-xl'
//           >$600.00-$1,000.00</p>/ box
//           <p>1 boxMin. order</p>
//           <p>HK
// YING CHUN IMPORT AND EXPORT TRADING LIMITED
// 1YRS</p>
// <p>5.0
// (5)
// |
// "Good service"</p>
//  <hr></hr>
//  <button className='btn'>connect supplier</button>
//         </div>
//         })} 
//       </div>
//     </div>
//   )
// }

// export default Products