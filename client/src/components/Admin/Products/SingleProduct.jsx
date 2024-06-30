import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { useSelector,useDispatch } from 'react-redux'
import { noOpendSignup,yesOpendSignup } from '../../../feutures/drobarStates/signUpState'
import { noOpend,yesOpend } from '../../../feutures/drobarStates/loginState'





import { fetchToken } from '../../../feutures/Tokens/tokenSlice'
function SingleProduct() {
    const [notOpend, setNotOpend] = useState(false)
    const [opened,setOpend] = useState(false)
    const [product,setProducts] = useState([])
    const [user,setUser] = useState({})
    const [pictures,setPictures] = useState([])
    const {productId} = useParams()
    const [releatedProducts, setReleatedProducts] = useState([])
    const [bigPicture, setBigPicture] = useState(null)
    const [quantity, setQuantity] = useState(1)
    useEffect(()=>{
        axios.get('https://ecommerce-8yhy.onrender.com/singleproduct'+productId)
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

    const addCart = async()=>{
      try {
        await axios.post('https://ecommerce-8yhy.onrender.com/addcartto',{})
      } catch (error) {
        console.log(error.message)
      }
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


    const multiplicate = (e)=>{
      const value = e.target.value
      setQuantity(value)
      
     // setResult(value)
    }


    // user data
    useEffect(()=>{
      try {
        axios.get('https://ecommerce-8yhy.onrender.com/profiledata')
        .then(result =>{
          setUser(result.data.userData)
        }) 
        .catch(err =>{
          console.log(err.message)
        })
      } catch (error) {
        console.log('something is wrong')
      }
    },[])
// // send cart to the account
const sendCart = () =>{
  try {
    const color = 'red'
    axios.put('https://ecommerce-8yhy.onrender.com/addcart',{productId:product._id,userId:user._id,color,quantity})
    .then((result)=>{
      //console.log('succsesesd')
      window.location = 'https://ezasco.vercel.app/profile/my-carts'
    })
    .catch(err =>{
      console.log(err.message)
    })
  } catch (error) {
    console.log(error.message)
  }
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
  className='w-[70%] h-[80vh] pt-6 fixed shadow-black shadow-2xl rounded-2xl top-15'
  >
    <div className=' flex-wrap'>
      <h1 className='text-center text-2xl font-bold mt-3'> Shopping Cart</h1>
      <div className=' p-5 flex flex-wrap  justify-between'>
        <h2 className='w-[25%]'>Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Total</h2>
      </div>
      <hr/>
      <div className=' p-5 flex flex-wrap  justify-between'>
        <div className='w-[25%] flex flex-wrap justify-around'>
          <img 
          className='w-20 h-24 rounded-md'
          src={`https://ecommerce-8yhy.onrender.com/ProductsImage/${product.image}`}/>
          <div className=''>
            <h1>{product.name}</h1>
            <h1>{product.title}</h1>
          </div>
        </div>
        <h2 className='mt-6'>{`$${product.price}`}</h2>
        <input
        type='number' 
        className='w-[10%] px-2 py-1'
        placeholder='1'
        onChange={multiplicate}
        />
        <h2 className='mt-6 font-bold text-xl'>{`$ ${quantity == 1 ? product.price : quantity*product.price}`}</h2>
      </div>
      <hr/>
      <div className="grid grid-cols-2 p-5">
        <div>
        <h1 className='ml-7 font-bold text-xl'> choice color</h1>
        <select className='ml-7 w-40 h-8 mt-3'>
          <option>Green</option>
          <option>Red</option>
          <option>Black</option>
          <option>White</option>
          <option>Blue</option>
          <option>Orrange</option>
        </select>
        </div>
        <div>
         <div className="flex justify-around ">
          <h1 className='mt-6 font-bold text-xl'>SubTotal</h1>
          <h2 className='mt-6 font-bold text-xl'>{`$ ${quantity == 1 ? product.price : quantity*product.price}`}</h2>
         </div>
         <h1>Hit the submit button to add the product to cart</h1>
         <button 
         onClick={sendCart}
         className=' px-28 py-2 m-6 bg-blue-700 rounded-md text-white text-xl font-semibold'>Submit</button>
        </div>
      </div>
      {/* <div className='w-[60%]'>
        
        <div className=''>
          <img src={`http://localhost:4300/ProductsImage/${product.image}`}/>
        </div>
      </div>
      <div className='w-[40%]'>
        <div className='ml-[90%] mt-4'>
          <h2>bag</h2>
        </div>
      </div> */}
    </div>
  </dialog>



    <div>
    <div className=' container mx-auto py-10 items-center'>
      <div className='self-center'>
        <div className=' m-10 grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img 
          className='w-11/12 h-96'
          src={`https://ecommerce-8yhy.onrender.com/ProductsImage/${bigPicture}`} 
          alt="" />
        </div>
        <div className=' grid grid-cols-2 gap-2'>
        {
        pictures.map((s,i)=>{
          return <div key={i}>
             <img
             onClick={()=>setBigPicture(s)}
        className=' items-centessr ml-[16.5%] w-36 h-36'
        src={`https://ecommerce-8yhy.onrender.com/ProductsImage/${s}`} 
        alt="no connection" />
          </div>
        })
      }
        </div>
        </div>
        <div className='ml-[20%] p-5'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <h1 className='text-red-950 font-serif text-xl'>{title}</h1>
        <h1>{category}</h1>
        <h1>{price}</h1>
        <h1>{description}</h1>
        <h1>{tags}</h1>
        </div>
        <button onClick={
          token == true ? 
          one:
          two
        } className='btn'>Add to cart</button>

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
                `https://ecommerce-8yhy.onrender.com/ProductsImage/${single.image}`
                :
                `https://ecommerce-8yhy.onrender.com/ProductsImage/${single.image[0]}`
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