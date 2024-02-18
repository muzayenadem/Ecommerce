import React, { useEffect, useRef,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function SingleUpdateProduct() {
const [products, setProducts] = useState({})


const {image,name,title,description,price,category,tags,_id} = products

const [U_image,setImage] = useState(image)  
const [U_name,setName] = useState(name)
const [u_category,setCategory] = useState(category)
const [U_title,setTitle] = useState(title)
const [u_price,setPrice] = useState(price)
const [U_description,setDescription] = useState(description)
const [U_tags,setTags] = useState(tags)
const [mee,setMee] = useState(null)
const [open, setOPen] = useState(false)
const [updateproduct,setUpdateProduct]= useState({products})

const inputRef = useRef(null)
const handleFocus = () =>{
  inputRef.current.focus();
};
const handleref = () =>{
  const value = inputRef.current.value;
  console.log(value)
}

//     const [value, setValue] = useState(0)
//     const changeHandler = (event, newValue) =>{
//      setValue(newValue)
//    }


// const handleChange = (e) =>{
//   const {name,value} = e.target
//   setUpdateProduct({
//     ...updateproduct,
//     [name]:value
//   })
// }
console.log(updateproduct)
const hanldeSubmit = (e) =>{
  e.preventDefault()
  // console.log(updateproduct)
  // console.log(e)
}

const {productId} = useParams()
useEffect(()=>{
    axios.get('http://localhost:4300/singleproduct'+productId)
    .then(result => setProducts(result.data))
    .catch(err => setProducts(err.message))
},[])

 // console.log(products)


  const submitHandler = async(e) =>{
    e.preventDefault()
    // image:U_image,
    // name:U_name,
    // category:u_category,
    // title:U_title,
    // price:u_price,
    // description:U_description,
    // tags:U_tags,
    // userId:_id
    const formData = new FormData()
    formData.append('image',U_image)
    formData.append('name',U_name)
    formData.append('category',u_category)
    formData.append('title',U_title)
    formData.append('price',u_price)
    formData.append('description',U_description)
    formData.append('tags',U_tags)
    formData.append('userId',_id)
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
  const str = Number || String
  // const parsedPrice = parse(price)
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
          <img className='w-20 h-20 rounded-full' src={`http://localhost:4300/ProductsImage/${image}`} />
          <form onSubmit={submitHandler}>
          <label htmlFor='image' className='m-4'>Product Image</label>
          <br/>
          <input 
             id='image'
             name='image'
            //  value={U_image !== image ? U_image || image : image}
            filename={image}
          onChange={(e)=> setImage(e.target.value)} 
          className='m-4' 
          type='file'/>
          <br/>
          <label htmlFor='name' className='m-4'>Product Name</label>
          <br />
          <input 
          id='name'
          name='name'
          // ref={inputRef} 
          // placeholder={name}
          // onChange={handleref}
          value={U_name !== name ? U_name || ` ${name}` : name}
           onChange={(e)=> setName(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='category' className='m-4'>Product Category</label>
          <br/>
          <input  
             id='category'
             name='category'
             value={u_category !== category ? u_category || ` ${category}` : category}
             onChange={(e)=> setCategory(e.target.value)} 
             className='m-4 border-2' 
             type='text' />
          <br/>
          <label htmlFor='title' className='m-4'>Product Title</label>
          <br />
          <input 
          id='title'
          name='title'
          value={U_title !== title ? U_title || ` ${title}` : title}
          onChange={(e)=> setTitle(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='price' className='m-4'>Price</label>
          <br />
          <input 
          id='price'
          name='price'
          value={u_price !== price ? u_price || ` ${price}` : price}
          onChange={(e)=> setPrice(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='description' className='m-4'>Description</label>
          <br/>
          <textarea 
          id='description'
          name='description'
          value={U_description !== description ? U_description || ` ${description}` : description}
          onChange={(e)=> setDescription(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br />
          <label htmlFor='tags' className='m-4'>Product Tags</label>
          <br />
          <input
          id='tags'
          name='tags'
          value={U_tags !== tags ? U_tags || ` ${tags}` : tags}
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