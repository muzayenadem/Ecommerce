import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminProfile() {
    const [adminProfile, setAdminProfile] = useState({})
    const [image,setImage] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [gender,setGender] = useState('')
    const [password,setPassword] = useState('')
    const [imageDialoge,setImageDialoge] = useState(false)
    const [mee, setMee] = useState(null)
    const [open, setOpen] = useState(false)
    let [imageSpace,setImageSpace] = useState('')
   useEffect(()=>{
    try {
        axios.get('https://ecommerce-8yhy.onrender.com/adminprofile')
        .then((result)=> setAdminProfile(result.data))
        .catch(err => setAdminProfile(err.data))
    } catch (error) {
        setAdminProfile('bad data')
    }
   },[])



   const submitHandler = async(e) =>{
    e.preventDefault()
     const formData = new FormData()
    formData.append('image',image? image : adminProfile.image)
    formData.append('firstName', firstName ? firstName : adminProfile.firstName)
    formData.append('lastName', lastName ? lastName : adminProfile.lastName)
    formData.append('email', email ? email : adminProfile.email)
    formData.append('phone', phone ? phone : adminProfile.phone)
    formData.append('address', address ? address : adminProfile.address)
    formData.append('gender', gender ? gender : adminProfile.gender)
    formData.append('password',password ? password : adminProfile.password)
    formData.append('adminId',adminProfile._id)
    try {
      await axios.post(
        `https://ecommerce-8yhy.onrender.com/updateadminprofile`,
         formData,
        {
          headers:{
            'Conetent-Type':'multipart-from-data'
          }
        })
      .then((data)=>{
        setMee(data.data)
        setOpen(true)
        setImageDialoge(false)
        setTimeout(() => {
          setOpen(false)
        }, 3000);
   
      })
      .catch((err)=>{
        console.log(err.message)
      })
    } catch (error) {
      console.log(error.message)
    }
  }


  const convertToBase64 = (e) =>{
    setImage(e.target.files[0])
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () =>{
      setImageSpace(reader.result)
    }

    reader.onerror = (err) =>{
      console.log(err)
    }
  }
  return (
    <>
     <dialog 
        className='w-72  mt-16 h-[10vh] shadow-md rounded-2xl items-center '
        open={open}>
        <div className='container'>
          <h3 className='text-center mt-5 text-green-900 font-semibold'>{mee}</h3>
        </div>
        </dialog>
    <dialog 
        className='  shadow-md rounded-2xl items-center p-3 md:ml-[60%]'
        open={imageDialoge}>
        <div className='container'>
        <label htmlFor='image' className='m-4'>Change Image</label>
          <br/>
          {imageSpace !== '' ?  <img
          className='w-28 h-28 rounded-full' 
          src={imageSpace} 
          alt="" />
        :
          <input 
             id='image'
             name='image'
             files={image !== adminProfile.image ? image || adminProfile.image : adminProfile.image}
            accept='image/*'
            onChange={convertToBase64} 
          className='m-4' 
          type='file'/>
}
          <br/>
          <div className='flex justify-center'>
            <button className='btn' onClick={()=> setImageDialoge(false)}>Cancel</button>
            <button className='btn' onClick={submitHandler}>Change</button> 
          </div>
        </div>
        </dialog>
    <div className='container '>
      <h1 className='font-bold text-xl text-orange-900 text-center mt-2 '> Your Main Profile Page</h1>
      <div className='w-[80%] h-auto bg-slate-300 ml-[10%] p-5'>
      {
        !adminProfile.image ? 
        <div type='file'
        className='w-14 h-14 bg-violet-800'
        onClick={()=> setImageDialoge(true)}
        // onChange={(e)=>setImage(e.target.files[0])}
        >
          {/* <h1>{adminProfile.firstName[0]}{adminProfile.lastName[0]}</h1> */}
        </div>
        :
        <div>
          <img 
          className='w-28 h-28 rounded-full items-center ml-6'
     src={`https://ecommerce-8yhy.onrender.com/UsersImage/${adminProfile.image}`}   
     />
        </div>
}
        <br/>
        <input 
        id='name'
        name='name'
        type='text'
        className='mt-4'
        onChange={(e)=> setFirstName(e.target.value)}
        value={firstName !== adminProfile.firstName ? firstName || ` ${adminProfile.firstName}` : adminProfile.firstName}
        />
        <br/>
         <input 
        id='name'
        name='name'
        type='text'
        className='mt-4'
        onChange={(e)=> setLastName(e.target.value)}
        value={lastName !== adminProfile.lastName ? lastName || ` ${adminProfile.lastName}` : adminProfile.lastName}
        />
        <br/>
         <input 
        id='name'
        name='name'
        className='mt-4'
        type='text'
        onChange={(e)=> setEmail(e.target.value)}
        value={email !== adminProfile.email ? email || ` ${adminProfile.email}` : adminProfile.email}
        />
        <br/>
        <input 
        id='name'
        name='name'
        className='mt-4'
        type='text'
        onChange={(e)=> setPhone(e.target.value)}
        value={phone !== adminProfile.phone ?  phone || ` ${adminProfile.phone}`  : adminProfile.phone}
        />
        <br/>
        <input 
        id='name'
        name='name'
        className='mt-4'
        type='text'
        onChange={(e)=> setGender(e.target.value)}
        value={gender !== adminProfile.gender ?  gender || ` ${adminProfile.gender}`  : adminProfile.gender}
        />
        <br/>
        <input 
        id='name'
        name='name'
        className='mt-4'
        type='text'
        onChange={(e)=> setAddress(e.target.value)}
        value={address !== adminProfile.address ? address || ` ${adminProfile.address}` : adminProfile.address}
        />
        <br/>
        <button className='btn' onClick={submitHandler}>Update</button>
      </div>
    </div>
    </>
  )
}

export default AdminProfile