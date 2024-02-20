
import {useSelector, useDispatch} from 'react-redux'
import { fetchProfileData } from '../../feutures/data/profileData'

 
//console.log(profile)
import React, { useEffect, useRef,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
//import { isInputElement } from 'react-router-dom/dist/dom'
function UpdateProfile() {
const [profile, setProfile] = useState({})

//const profile1 = useSelector(state => state.profileData.profile)
const [image,setImage] = useState(null) 
const [firstName,setFirstName] = useState(profile.firstName)
const [lastName,setLastName] = useState(profile.firstName)
const [email,setEmail] = useState(profile.email)
const [password,setPassword] = useState(profile.password)
const [phone,setPhone] = useState(profile.phone)
const [gender,setGender] = useState(profile.gender)
const [address,setAddress] = useState(profile.address)
const [mee,setMee] = useState(null)
const [open, setOPen] = useState(false)



const navigate = useNavigate()


// const {productId} = useParams()
useEffect(()=>{
    axios.get('http://localhost:4300/profiledata')
    .then(result => setProfile(result.data))
    .catch(err => setProfile(err.message))
},[])
  const submitHandler = async(e) =>{
    e.preventDefault()
     const formData = new FormData()
    formData.append('image',image? image : profile.image)
    formData.append('firstName', firstName ? firstName : profile.firstName)
    formData.append('lastName', lastName ? firstName : profile.lastName)
    formData.append('email', email ? email : profile.email)
    formData.append('phone', phone ? phone : profile.phone)
    formData.append('address', address ? address : profile.address)
    formData.append('gender', gender ? gender : profile.gender)
    formData.append('password',password ? password : profile.password)
    formData.append('userId',profile._id)
    try {
      await axios.post(
        `http://localhost:4300/updateprofile`,
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
          <img className='w-20 h-20 rounded-full' src={`http://localhost:4300/UsersImage/${profile.image}`} />
          <form onSubmit={submitHandler}>
          <label htmlFor='image' className='m-4'>Product Image</label>
          <br/>
          <input 
             id='image'
             name='image'
            files={image !== profile.image ? image || profile.image : profile.image}
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
          value={firstName !== profile.firstName ? firstName || ` ${profile.firstName}` : profile.firstName}
           onChange={(e)=> setFirstName(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <input 
          id='name'
          name='name'
          value={lastName !== profile.firstName ? lastName || ` ${profile.lastName}` : profile.lastName}
           onChange={(e)=> setLastName(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='category' className='m-4'>Product Category</label>
          <br/>
          <input  
             id='category'
             name='category'
             value={email !== profile.email ? email || ` ${profile.email}` : profile.email}
             onChange={(e)=> setEmail(e.target.value)} 
             className='m-4 border-2' 
             type='text' />
          <br/>
          {/* <label htmlFor='title' className='m-4'>Product Title</label>
          <br />
          <input 
          id='title'
          name='title'
          value={password !== profile.password ? password || ` ${profile.password}` : profile.password}
          onChange={(e)=> setPassword(e.target.value)} 
          className='m-4 border-2' 
          type='text' /> */}
          <br/>
          <label htmlFor='price' className='m-4'>Price</label>
          <br />
          <input 
          id='price'
          name='price'
          value={phone !== profile.phone ? phone || ` ${profile.phone}` : profile.phone}
          onChange={(e)=> setPhone(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br/>
          <label htmlFor='description' className='m-4'>Description</label>
          <br/>
          <textarea 
          id='description'
          name='description'
          value={gender !== profile.gender ? gender || ` ${profile.gender}` : profile.gender}
          onChange={(e)=> setGender(e.target.value)} 
          className='m-4 border-2' 
          type='text' />
          <br />
          <label htmlFor='tags' className='m-4'>Product Tags</label>
          <br />
          <input
          id='tags'
          name='tags'
          value={address !== profile.address ? address || ` ${profile.address}` : profile.address}
          onChange={(e)=> setAddress(e.target.value)}
          className='m-4 border-2' 
          type='text' />
          <br/>
          <button type='submit' className='py-2 px-4 border-1 rounded-3xl bg-green-900 text-white font-bold ml-10'>Submit</button> 
          </form>
        </div>
    </div>
  )
}

export default UpdateProfile