import React, { useEffect, useRef,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Products from './Products'
//import { isInputElement } from 'react-router-dom/dist/dom'
function SingleUpdateProduct() {
const [products, setProducts] = useState({})


//const {productImage:image,productName:name,productTitle:title,productDescription:description,productPrice:price,productCategory:category,producTtags:tags,_id} = products

const [image,setImage] = useState(products.image) 
const [name,setName] = useState(products.name)
const [category,setCategory] = useState(products.category)
const [title,setTitle] = useState(products.title)
const [price,setPrice] = useState(products.price)
const [description,setDescription] = useState(products.description)
const [tags,setTags] = useState(products.tags)
const [mee,setMee] = useState(null)
const [open, setOPen] = useState(false)


const navigate = useNavigate()


const {productId} = useParams()
useEffect(()=>{
    axios.get('http://localhost:4300/singleproduct'+productId)
    .then(result => setProducts(result.data))
    .catch(err => setProducts(err.message))
},[])
  const submitHandler = async(e) =>{
    e.preventDefault()
     const formData = new FormData()
    formData.append('image',image? image : null)
    formData.append('name', name ? name : products.name)
    formData.append('category',category ? category : products.category)
    formData.append('title', title ? title : products.title)
    formData.append('price', price ? price : products.price)
    formData.append('description',description ? description : products.description)
    formData.append('tags',tags ? tags : products.tags)
    formData.append('userId',products._id)
    try {
      await axios.post(
        `http://localhost:4300/updateproduct`,
         formData,
        {
          headers:{
            'Conetent-Type':'multipart-from-data'
          }
        })
      .then((data)=>{
        setMee(data.data)
        setOPen(true)
        setTimeout(() => {
          setOPen(false)
          window.reload()
        }, 3000);
   
      })
      .catch((err)=>{
        console.log(err.message)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
        {/* <h1>{name}</h1>
        <h1>{title}</h1>
        <h1>{description}</h1> */}
         <dialog 
        className='w-72 h-[10vh] shadow-md rounded-2xl items-center'
        open={open}>
        <div className='container'>
          <h3 className='text-center text-green-900 font-semibold'>{mee}</h3>
        </div>
        </dialog>
        <div>
        <h1 className='text-center m-4'>Choice beautifull picture and well defined discription for your product</h1> 
          <img className='w-20 h-20 rounded-full' src={`http://localhost:4300/ProductsImage/${products.image}`} />
          <form onSubmit={submitHandler}>
          <label htmlFor='image' className='m-4'>Product Image</label>
          <br/>
          <input 
             id='image'
             name='image'
            files={image !== products.image ? image || products.image : products.image}
            accept='image/*'
            onChange={(e)=> setImage(e.target.files[0])} 
          className='m-4' 
          type='file'/>
          <br/>
          <label htmlFor='name' className='m-4'>Product Name</label>
          <br />
          <input 
          id='name'
          name='name'
          value={name !== products.name ? name || ` ${products.name}` : products.name}
           onChange={(e)=> setName(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='category' className='m-4'>Product Category</label>
          <br/>
          <input  
             id='category'
             name='category'
             value={category !== products.category ? category || ` ${products.category}` : products.category}
             onChange={(e)=> setCategory(e.target.value)} 
             className='m-4 border-2' 
             type='text' />
          <br/>
          <label htmlFor='title' className='m-4'>Product Title</label>
          <br />
          <input 
          id='title'
          name='title'
          value={title !== products.title ? title || ` ${products.title}` : products.title}
          onChange={(e)=> setTitle(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='price' className='m-4'>Price</label>
          <br />
          <input 
          id='price'
          name='price'
          value={price !== products.price ? price || ` ${products.price}` : products.price}
          onChange={(e)=> setPrice(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='description' className='m-4'>Description</label>
          <br/>
          <textarea 
          id='description'
          name='description'
          value={description !== products.description ? description || ` ${products.description}` : products.description}
          onChange={(e)=> setDescription(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br />
          <label htmlFor='tags' className='m-4'>Product Tags</label>
          <br />
          <input
          id='tags'
          name='tags'
          value={tags !== products.tags ? tags || ` ${products.tags}` : products.tags}
          onChange={(e)=> setTags(e.target.value)}
          className='m-4 border-2' 
          type='text' />
          <br/>
          <button type='submit' className='py-2 px-4 border-1 rounded-3xl bg-green-900 text-white font-bold ml-10'>Submit</button> 
          </form>
        </div>
    </div>
  )
}

export default SingleUpdateProduct