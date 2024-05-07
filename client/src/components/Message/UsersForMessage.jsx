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
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {!open ? 
    <div className='md:w-[80%] mt-6'>
         <input 
        type='search'
         onBeforeInput={()=>{
          searchHandler(value)
        }}
       onChange={(e)=> setValue(e.target.value)}
       className='text-left py-2 px-3 border-2 md:w-[80%] ml-8 rounded-xl shadow-md focus:outline-none'
       placeholder='Search here'/>
  
    <div className='flex mt-6 flex-wrap h-auto max-h-[60vh]  overflow-y-auto w-[100%] md:w-[100%]'>
      <hr/>
        <div className='w-[100%] md:w-[100%]'>
        
        {
            allusers.map((single,i)=>{
                return <div key={i} onClick={()=>forMessage(single._id)} className=' h-auto bg-white m-3 rounded-md p-2'>
                    <div >
                  {
                    single.image ? 
                    <img src={`http://localhost:4300/UsersImage/${single.image}`}
                   className='w-16 h-16 rounded-full'
                   />
                   :
                   <div className='w-16 h-16 rounded-full text-center items-center p-3 bg-orange-500 text-white font-bold'>{single.firstName[0]} {single.lastName[0]}</div>
                  }
                   
                    <h1>{single.firstName} {single.lastName}</h1>
                    </div>
      
                </div>
            })
        }
        </div>
    </div>
    </div> 
    :
    <div>
      <h1 onClick={()=> setOpen(false)}>Back</h1>
    </div>
}
      <div className='w-60%'>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default UsersForMessage