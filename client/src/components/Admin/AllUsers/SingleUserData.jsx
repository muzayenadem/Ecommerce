import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function SingleUserData() {
    const [singleUserData, setSingleUserData] = useState({})
    const {singleUserId} = useParams()
    useEffect(()=>{
        try {
            axios.get('http://localhost:4300/singleuserdata'+singleUserId)
            .then(result=>{
                setSingleUserData(result.data.singleuserdata)
            })
            .catch(err=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error.message)
        }
    },[])
    console.log(singleUserId)
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3   bg-white p-3'>
            <div className=''>
                <Link to={`/admindashboard/allusers/${singleUserData._id}`}>
            {
                    singleUserData.image ? 
                    <img src={`http://localhost:4300/UsersImage/${singleUserData.image}`}
                   className='w-16 h-16 ml-5 mb-2 rounded-full'
                   />
                   :
                   <div className='w-16  ml-5 mb-2 h-16 rounded-full text-center items-center p-3 bg-orange-500 text-white font-bold'>{singleUserData.firstName}</div>
                  }
                  </Link>
                  <h1 className='font-bold text-xl'>{singleUserData.firstName} {singleUserData.lastName}</h1>
            </div>
            <div className='flex justify-around mt-8 flex-wrap '>
                <i>
                    <Link to={`/admindashboard/allusers/${singleUserData._id}/cart`}>Cart</Link>
                   </i>
                <i>Completed</i>
                <i>Message</i>
                <i>something</i>
            </div>
            <div className=' flex mt-5 flex-wrap'>
                <h1 className='font-bold text-5xl text-purple-800'>&#9822;</h1>
                <h1 className='font-bold text-5xl text-purple-800'>&#9812;</h1>
                <h1 className='font-bold text-5xl text-purple-800'>&#9832;</h1>
                <h1 className='font-bold text-5xl text-purple-800'>&#9842;</h1>
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default SingleUserData