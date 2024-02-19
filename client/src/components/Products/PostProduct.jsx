import React, { useEffect, useState } from 'react'
import axios from 'axios'
function PostProduct() {
const [image,setImage] = useState(null)  
const [name,setName] = useState('')
const [category,setCategory] = useState('')
const [title,setTitle] = useState('')
const [price,setPrice] = useState('')
const [description,setDescription] = useState('')
const [tags,setTags] = useState([])
const [mee,setMee] = useState(null)
const [open, setOPen] = useState(false)

  const submitHandler = async(e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name',name)
    formData.append('category',category)
    formData.append('title',title)
    formData.append('price',price)
    formData.append('description',description)
    formData.append('tags',tags)
    formData.append('image',image)
    try {
      await axios.post('http://localhost:4300/addproduct',
      formData
      ,{
        headers:{
          'Conetent-Type':'multipart-from-data'
        }
      })
      .then((data)=>{
        setMee(data.data)
        setOPen(true)
        setTimeout(() => {
          setOPen(false)
        }, 3000);
        // console.log('succefully submitted')
      })
      .catch((err)=>{
        console.log(err.message)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
console.log(image)
  return (
    <div className='container mx-auto py-3'>
       <div className='block w-4/5 h-auto shadow-md rounded-md border-2 p-10 bg-white'>
       <dialog 
        className='w-72 h-[10vh] shadow-md rounded-2xl items-center'
        open={open}>
        <div className='container'>
          <h3 className='text-center text-green-900 font-semibold'>{mee}</h3>
        </div>
        </dialog>
        <h1 className='text-center m-4'>Choice beautifull picture and well defined discription for your product</h1> 
          <label className='m-4'>Product Image</label>
          <br/>
          <input type='file' accept='image/*' onChange={(e)=> setImage(e.target.files[0])} className='m-4' />
          <br/>
          <label  className='m-4'>Product Name</label>
          <br />
          <input onChange={(e)=> setName(e.target.value)}className='m-4 border-2' type='text' placeholder=' Product name'/>
          <br/>
          <label  className='m-4'>Product Category</label>
          <br/>
          <input onChange={(e)=> setCategory(e.target.value)}className='m-4 border-2' type='text' placeholder=' Product category'/>
          <br/>
          <label className='m-4'>Product Title</label>
          <br />
          <input onChange={(e)=> setTitle(e.target.value)} className='m-4 border-2' type='text' placeholder=' Product name'/>
          <br/>
          <label className='m-4'>Price</label>
          <br />
          <input onChange={(e)=> setPrice(e.target.value)} className='m-4 border-2' type='number' placeholder='$ price'/>
          <br/>
          <label className='m-4'>Description</label>
          <br/>
          <textarea onChange={(e)=> setDescription(e.target.value)} placeholder='enter the detail of this production ' className='m-4 border-2 rounded-md w-[90%] p-6 ml-[5%]'></textarea>
          <br />
          <label className='m-4'>Product Tags</label>
          <br />
          <textarea onChange={(e)=> setTags(e.target.value)} placeholder='write the product tags' className='m-4 border-2 rounded-md w-[70%] p-2 ml-[5%]'></textarea>
          <br/>
          <button onClick={submitHandler} className='py-2 px-4 border-1 rounded-3xl bg-green-900 text-white font-bold ml-10'>Submitt</button>
       </div>
    </div>
  )
}

export default PostProduct