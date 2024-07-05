import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function UsersForMessage() {
    const [allusers,setAllUsers] = useState([])
    const [value,setValue] = useState(null)
    const [open,setOpen] = useState(false)
    const navigate = useNavigate('')

    const searchHandler =async (value) =>{
      try {
       await axios.get('http://localhost:4300/searchuserformessage'+value)
       .then(result =>{
       setAllUsers(result.data.searchedUsers)
       console.log(result.data)
       window.reload()
      })
       .catch(err => setSearchedProduct(err.message))
      } catch (error) {
       console.log(error.message)
      }  
     }
    useEffect(()=>{
        axios.get('http://localhost:4300/searchuserformessage'+value)
        .then(result =>{
            setAllUsers(result.data.allUsers)
        })
        .catch(err =>{
            console.log(err.message)
        })
    },[])


    const forMessage = async(id)=>{
      try {
        await axios.get('http://localhost:4300/usermessagedata'+id)
        .then(()=>{
          console.log('succeed')
          setOpen(true)
      //    window.location = 'http://localhost:5173/profile/message/'+id
         navigate(id)
        })
        .catch((err)=>{
          console.log(err.message)
        })
      } catch (error) {
          console.log(error.message)
      }
  }
 
   // console.log(admin.firstName[0],admin.lastName[0])
  return (
    <>
    <div className='flex justify-start'>
    <div className='md:w-[20%]'>
         <input 
        type='search'
         onBeforeInput={()=>{
          searchHandler(value)
        }}
       onChange={(e)=> setValue(e.target.value)}
       className='text-left py-2 px-3 border-2 md:w-[80%] ml-8 rounded-xl shadow-md focus:outline-none'
       placeholder='Search here'/>
  
    <div className='flex flex-wrap h-auto max-h-[80vh]  overflow-y-auto w-[45%] md:w-[100%]'>
      <hr/>
        <div className='w-[100%] md:w-[100%]'>
     {
      allusers.map((single,i)=>{
        return(
          <div key={i} onClick={()=> forMessage(single._id)} className='w-full flex gap-3 rounded-md bg-white shadow-md shadow-neutral-300 p-2 mt-2'>
           <div className=''>
            {
              single.image ? 
              <div className='relative   h-14 w-14 s'>
              <span className={`absolute -top-0.5 right-1 w-3 h-3  rounded-full ${single.active == true? 'bg-fuchsia-600' : 'bg-neutral-400'}`}></span>
              <img src={single.image} className='w-full hadow-lg shadow-neutral-900 h-full rounded-full'/>
            </div> : 
                <div className='relative   h-14 w-14 '>
                <span className={`absolute -top-0.5 right-1 w-3 h-3  rounded-full ${single.active == true ? 'bg-fuchsia-600' : 'bg-neutral-400'}`}></span>
                <div className='w-full h-full shadow-sm shadow-neutral-400 rounded-full text-center capitalize items-center p-3 bg-orange-500 text-white font-bold'>{single.firstName[0]} {single.lastName[0]}</div>
              </div>
            }
           </div>
           <div className="flex flex-col gap-1 p-3/2 ">
            <h1 className=' capitalize text-lg '>{single.firstName} {single.lastName}</h1>
            <p className='text-neutral-400 text-base'>Last logout </p>
           </div>
          </div>
        )
      })
     }
        </div>
    </div>
    </div> 
      <div className='w-[80%]'>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default UsersForMessage
