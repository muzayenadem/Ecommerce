import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProductToken } from '../../../feutures/Tokens/productToken'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Categories from '../../home/Categories'
import { fetchMainSearchedData } from '../../../feutures/Searched/mainSearchedSlice'
function ProductsOutPage() {


const searchedData = useSelector(state => state.mainSearchedData.searchedData)
console.log(searchedData)
const [allProduts , setAllProducts] = useState([])
const [topProduct , setTopProduct] = useState([])
const [value,setValue] = useState('')
const [serchedProduct,setSearchedProduct] = useState([])
const searchHandler =async (value) =>{
 try {
  await axios.get('http://localhost:4300/searchproductcategory'+value)
  .then(result =>{
  setAllProducts(result.data)
  console.log(result.data)
  window.reload()
 })
  .catch(err => setSearchedProduct(err.message))
 } catch (error) {
  console.log(error.message)
 }  
}
// setTimeout(()=>{
//   searchHandler()
//  },3000)
useEffect(()=>{
  axios.get('http://localhost:4300/products')
  .then(result => {
    setTopProduct(result.data)
    setAllProducts(result.data)
  })
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
      <div >

      <div className='ml-[20%] py-6'>
        <input 
        type='search'
         onBeforeInput={()=>{
          searchHandler(value)
        }}
       onChange={(e)=> setValue(e.target.value)}
       className='text-left py-2 px-3 border-2 rounded-3xl focus:outline-none'
       placeholder='Search here'/>
       <button
         onClick={()=>{
          searchHandler(value)
        }}
        // onMouseOver={searchHandler}
       className='text-center ml-4 bg-green-950 text-white font-bold py-2 px-4 rounded-3xl'
       >Search</button>
        </div>
        <div className='container mx-auto py-2 ml-[1%]'>

        <div className='hidden flex-col container mx-auto place-content-center text-center items-center  md:flex md:flex-row overflow-x-auto bg-white gap-4 py-3 px-4 ml-5'>
        {
            topProduct.map((single,index) =>{
              const val = single.tags[0]
                return <div 
                onClick={()=>{
                  // setValue(val)
                  searchHandler(val)
                }}
                 className='flex justify-around bo mb-3 md:flex-col md:flex-none items-center place-self-center place-content-center'key={index}>
                    <img 
                    src={`http://localhost:4300/ProductsImage/${single.image[0]}`} 
                    alt='' 
                    className={`w-20 h-20 rounded-full  `}></img>
                    <p>Laptop</p>
                </div>
            })
        }
    </div>




        </div>
     
      </div>
       <div>
      <div className='grid grid-cols-1 items-center container mx-auto self-center place-items-center text-center md:grid-cols-3 lg:grid-cols-4 '>
        { allProduts.map((single,index)=>{
          return <div key={index} className='items-center text-left place-items-center ml-5 mt-4 rounded-md p-5 bg-white'>
          <img 
          className='h-64'
          src={`http://localhost:4300/ProductsImage/${single.image[0]}`} 
          alt="" />
          <div className='flex justify-around m-3'>
            {
          single.image.map((s,i)=>{
              return <div key={i}>
                 <img src={`http://localhost:4300/ProductsImage/${s}`} className='w-10 h-10' />
              </div>
            })
          }
          </div>
        
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