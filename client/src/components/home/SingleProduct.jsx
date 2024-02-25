import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { useSelector,useDispatch } from 'react-redux'
import { noOpendSignup,yesOpendSignup } from '../../feutures/drobarStates/signUpState'
import { noOpend,yesOpend } from '../../feutures/drobarStates/loginState'





import { fetchToken } from '../../feutures/Tokens/tokenSlice'
function SingleProduct() {
    const [notOpend, setNotOpend] = useState(false)
    const [opened,setOpend] = useState(false)
    const [product,setProducts] = useState([])
    const [pictures,setPictures] = useState([])
    const {productId} = useParams()
    const [releatedProducts, setReleatedProducts] = useState([])
    const [bigPicture, setBigPicture] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:4300/singleproduct'+productId)
        .then(result => {
          setProducts(result.data.product)
          setReleatedProducts(result.data.releatedProducts)
          setPictures(result.data.pictures)
          setBigPicture(result.data.pictures[0])
        })
        .catch(err => setProducts(err.message))
    },[])
    console.log(productId)
    console.log(product)
    const {image,name,category,title,price,description,tags} = product
    console.log(image)
    console.log({pictures})
  
  //   useEffect(()=>{
  //  const callback = () =>{
  //   try {
  //     axios.get('http://localhost:4300/searchproductcategory'+name)
  //     .then((result)=>{
  //       setRelatedProduct(result.data)
  //     })
  //     .catch((err)=>{
  //       setRelatedProduct(err.message)
  //     })
  //   } catch (error) {
  //     setRelatedProduct(error.message)
  //   }
  //  }


  //  setTimeout(() => {
  //   callback()
  //  }, 3000);
  // },[])
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchToken())
    },[])
    const token = useSelector(state => state.token.token)

    const one = () =>{
      setOpend(true)
    }

    const two = () =>{
      setNotOpend(true)
    }


    const createAccount = () =>{
      setNotOpend(false)
      dispatch(yesOpendSignup())

    }

    const login = () =>{
      setNotOpend(false)
      dispatch(yesOpend())
    }
  return (
    <>
  <dialog 
  className='container mx-auto p-5 rounded-2xl w-96 h-[25vh] shadow-2xl  fixed'
  open={notOpend}
  >
    <div>
      <h1 className='font-light text-center text-xl'>You have to Sign in your account to order the product</h1>
      <div className='flex justify-around mt-10'>
        <button 
        onClick={createAccount}
        className='shadow-sm rounded-md py-2 px-2 bg-orange-600 text-white font-bold'>Create Account</button>
        <button 
        onClick={login}
        className='shadow-sm rounded-md py-2 px-2 bg-orange-600 text-white font-bold'>Sign in</button>
      </div>
    </div>
  </dialog>

  <dialog
  open={opened}
  className='w-[80%] h-[90vh]  shadow-black shadow-2xl rounded-2xl top-5'
  >
    <h1 className='text-center mt-5 font-bold text-3xl'>THIS IS PAYMENT PAGE</h1>
    <h2 className='text-center mt-4 font-medium text-xl '>I will accomplish this page after my final exam </h2>
    <button className='btn text-center items-center self-center ml-[46%] ' onClick={()=>setOpend(false)}>Close</button>
  </dialog>
    <div>
    <div className=' container mx-auto py-10 items-center'>
      <div className='self-center'>
        <div className=' m-10 grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img 
          className='w-11/12 h-96'
          src={`http://localhost:4300/ProductsImage/${bigPicture}`} 
          alt="" />
        </div>
        <div className=' grid grid-cols-2 gap-2'>
        {
        pictures.map((s,i)=>{
          return <div key={i}>
             <img
             onClick={()=>setBigPicture(s)}
        className=' items-centessr ml-[16.5%] w-36 h-36'
        src={`http://localhost:4300/ProductsImage/${s}`} 
        alt="no connection" />
          </div>
        })
      }
        </div>
        </div>
           <h1>{name}</h1>
        <h1>{title}</h1>
        <h1>{category}</h1>
        <h1>{price}</h1>
        <h1>{description}</h1>
        <h1>{tags}</h1>
        <button onClick={
          token == true ? 
          one:
          two
        } className='btn'>Order Now</button>

      </div>
    </div>
    <div className='container mx-auto py-5  w-full'>
      <h1 className='text-2xl text-blue-400 font-bold  text-center'>
        RELEATED PRODUCTS
      </h1>
    </div>
    <div
    className='w-[90%] ml-[5%] h-1 bg-slate-900 text-red-800'
    >
    </div>
    <section className='container mx-auto py-10'>
      <div className='grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-5 items-center'>
        {
          releatedProducts !== undefined?
          releatedProducts.map((single,index) =>{
            return(<div key={index}>
              <img 
              className='w-11/12 h-[100vh] md:h-[50vh]  items-center self-center  -2 m-6 '
              src={
                single.image.value == String ? 
                `http://localhost:4300/ProductsImage/${single.image}`
                :
                `http://localhost:4300/ProductsImage/${single.image[0]}`
                } alt="" />
            </div>)
          }) :null
        }
      </div>
    </section>
    </div>
    </>
  )
}

export default SingleProduct