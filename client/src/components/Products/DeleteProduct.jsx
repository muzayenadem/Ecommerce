import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProductToken } from '../../feutures/Tokens/productToken'
import {Link} from 'react-router-dom'
import axios from 'axios'
function DeleteProduct() {
const [allProduts , setAllProducts] = useState([])
const [value,setValue] = useState('')
const [serchedProduct,setSearchedProduct] = useState([])
const [open,setOpen] = useState(false)
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
    await axios.delete('http://localhost:4300/delete'+id)
    .then(result => {
      alert('are you do you want to delete this product')
    })
    .catch(err =>{
      alert('failed from server')
    })
  } catch (error) {
    alert('failed')
    console.log(error.message)
  }
}


  return (
    <div className='relative'>
      <dialog open={open} className='fixed bg-slate-600 rounded-2xl shadow-slate-50'>
        <div className='w-auto h-44 p-14'>
          <h1>are you sure </h1>
          <div className='flex space-x-10'>
          <button onClick={()=>setOpen(false)} className='btn'>cancel</button>
          <button onClick={()=>sendIdForServer(single._id)} className='btn'>delete</button>
          </div>
    
        </div>
      </dialog>
      <div>
        <input 
        placeholder='search here'
        type='search'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={searchHandler} >Search</button>
      </div>

      {
        allProduts.map((single , index) => {
          return <div 
          key={index} 
          className='w-auto h-auto border-2 shadow-amber-400 rounded-2xl mt-10 bg-white'
          >
            <h1>{single.name}</h1>
            <h1>{single.title}</h1>
            <h1>{single.description}</h1>
            <h1>{single.price}</h1>
            {/* <Link to={`${single._id}`}> */}
              {/* <button onClick={()=>sendIdForServer(single._id)} className='btn'>See More</button> */}
              <button onClick={()=>sendIdForServer(single._id)} className='btn'>Delete</button>
              {/* onClick={()=> setOpen(true)} */}
            {/* </Link> */}
          </div>
        })
      }
    </div>
  )
}

export default DeleteProduct