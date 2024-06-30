import React, { useEffect, useState } from 'react'
import axios from 'axios'
function PostProduct() {
const [images,setImages] = useState([])  
const [name,setName] = useState('')
const [category,setCategory] = useState('')
const [title,setTitle] = useState('')
const [price,setPrice] = useState('')
const [description,setDescription] = useState('')
const [tags,setTags] = useState([])
const [mee,setMee] = useState(null)
const [open, setOPen] = useState(false)
const [profileSpace,setProfileSpace] = useState('')
  const submitHandler = async(e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name',name)
    formData.append('category',category)
    formData.append('title',title)
    formData.append('price',price)
    formData.append('description',description)
    formData.append('tags',tags)
    //  formData.append('images',image)
    for(let i=0; i< images.length; i++){
      formData.append('images',images[i])
    }
    try {
      await axios.post('https://ecommerce-8yhy.onrender.com/addproduct',
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
console.log(images)

const data = []
const convertToBase64 = (e) =>{
  setImages(e.target.files)
  const reader = new FileReader()
  for(let i = 0; i< e.target.files.length; i++){
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () =>{
      setProfileSpace(reader.result)
      data.push(reader.result)
        console.log({datasInside:data})
    }
    reader.onerror = error =>{
      console.log(error)
    }
  }
     console.log({datasInside:data})
}
   console.log({datas:data}) 
   console.log({normalData: profileSpace})
  return (
    <div className='container  py-3'>
       <div className='block  h-auto shadow-md rounded-md border-2 p-10 bg-white'>
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
          {/* {
            data.map((sign,i)=>{
              return <div key={i} className='flex-row'>
                  <img src={sign} 
          className='w-56 rounded-2xl ' 
          alt="" />
              </div>
            })
          } */}
          <img src={profileSpace} 
          className='w-56 rounded-2xl ' 
          alt="" />
        
          <input 
          type='file' 
          multiple
          accept='image/*' 
          onChange={convertToBase64} 
          className='m-4' />
            {/* <input 
          type='file' 
          accept='image/*' 
          onChange={convertToBase64} 
          className='m-4' /> */}
          <br/>
          <label  className='m-4'>Product Name</label>
          <br />
          <input 
          onChange={(e)=> setName(e.target.value)}
          className='m-4 border-2 px-3 py-2 focus:outline-none' 
          type='text' 
          placeholder=' 
          Product name'/>
          <br/>
          <label  className='m-4'>Product Category</label>
          <br/>
          <input 
          onChange={(e)=> setCategory(e.target.value)}
         
          className='m-4 border-2 px-3 py-2 focus:outline-none'  
          type='text' 
          placeholder='Product category'/>
          <br/>
          <label className='m-4'>Product Title</label>
          <br />
          <input 
          onChange={(e)=> setTitle(e.target.value)} 
         
          className='m-4 border-2 px-3 py-2 focus:outline-none' 
          type='text' 
          placeholder=' Product name'
          />
          <br/>
          <label className='m-4'>Price</label>
          <br />
          <input 
          onChange={(e)=> setPrice(e.target.value)} 
          className='m-4 border-2 px-3 py-2 focus:outline-none' 
          type='number' 
          placeholder='$ price'
          />
          <br/>
          <label className='m-4'>Description</label>
          <br/>
          <textarea 
          onChange={(e)=> setDescription(e.target.value)} 
          placeholder='enter the detail of this production ' 
          className='m-4 border-2 rounded-md w-[90%] p-6  focus:outline-none'
          ></textarea>
          <br />
          <label className='m-4'>Product Tags</label>
          <br />
          <textarea 
          onChange={(e)=> setTags(e.target.value)} 
          placeholder='write the product tags' 
          className='m-4 border-2 rounded-md w-[70%] p-2  focus:outline-none'
          ></textarea>
          <br/>
          <button 
          onClick={submitHandler} 
          className='py-2 px-4 border-1 rounded-3xl bg-green-900 text-white font-bold ml-10'
          >Submitt</button>
       </div>
    </div>
  )
}

export default PostProduct