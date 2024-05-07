import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function UsersList() {
    const [allusers,setAllUsers] = useState([])
    const [admin, setAdmin] = useState({})
    

    const navigate = useNavigate('')
    useEffect(()=>{
        axios.get('http://localhost:4300/allusers')
        .then(result =>{
            setAllUsers(result.data.allusers)
            setAdmin(result.data.adminer)
        })
        .catch(err =>{
            console.log(err.message)
        })
    },[])

    const singleUserData = async(id)=>{
        try {
          await axios.get('http://localhost:4300/singleuserdata'+id)
          .then(()=>{
            console.log('succeed')
            navigate(id)
           // window.location = 'http://localhost:5173/admindashboard/allusers/'+id
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
    <div className='flex flex-wrap '>
        <div className='w-[95%] md:w-[40%]'>
        <h1 className='text-xl font-bold'>{admin.firstName}</h1>
        
        {
            allusers.map((single,i)=>{
                return <div key={i} onClick={()=>singleUserData(single._id)} className='w-[95%] md:w-96 h-auto bg-slate-400 m-3 rounded-md p-2'>
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
        {/* <div className='w-[60%] hidden md:block'>
        <Outlet/>
        </div> */}
    </div>
  )
}

export default UsersList