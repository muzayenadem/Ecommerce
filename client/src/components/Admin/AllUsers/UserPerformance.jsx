import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function UserPerformance() {
  const [userData,setUserData] = useState({})
  const {singleUserId} = useParams()
  useEffect(()=>{
      try {
          axios.get('https://ecommerce-8yhy.onrender.com/singleuserdata'+singleUserId)
          .then(result=>{
              setUserData(result.data.singleuserdata)
          })
          .catch(err=>{
              console.log(err)
          })
      } catch (error) {
          console.log(error.message)
      }
  },[])
  return (
    <div>
      <div className='grid grid-col-1 md:grid-cols-2 p-2 lg:grid-cols-3'>
        <div className=" bg-slate-200 ">
          <img src={`https://ecommerce-8yhy.onrender.com/UsersImage/${userData.image}`}
          className=''
          />
        </div>
      </div>
    </div>
  )
}

export default UserPerformance