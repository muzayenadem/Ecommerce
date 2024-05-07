import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SendMessage() {
  const [user,setUser] = useState({})
  const {messageId} = useParams()
  const [message, setMessage] = useState('')
  useEffect(()=>{
    try {
        axios.get('http://localhost:4300/usermessagedata'+messageId)
        .then(result=>{
            setUser(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error.message)
    }
},[])
console.log(messageId)
const sendMessageHandler  = async() =>{
 // e.preventDefault()
  try {
   await axios.put('http://localhost:4300/sendmessage',{message,messageId})
    .then(()=>{
      console.log('succed')
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
      <div className="mt-10 ml-10 h-[70vh] overflow-y-scroll  bg-white w-[90%] shadow-xl rounded-xl">
        <div className=' sticky top-0 bg-white'>
        <div className='flex justify-normal '>
          <div className="">
            {!user.image ? <div></div>
             :
             <img src={`http://localhost:4300/UsersImage/${user.image}`}
            className='w-14 h-14 rounded-full'
           />
           }
           </div>     
           <div className="ml-10 mt-4">
          <h1 className='font-bold text-xl'>{user.firstName} {user.lastName}</h1>
       </div>
       </div>
       <hr className='mt-2'></hr>
       </div>
       <div className="">
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
        <h1>ighuigeruhguer</h1>
       </div>
       <hr/>
       <div className=" sticky bottom-0 bg-white h-14">
        <input 
        type='text'
        placeholder='write message'
        onChange={(e)=> setMessage(e.target.value)}
        className='text-left py-3 ml-1 px-3  md:w-[80%]   shadow-md focus:outline-none'
        />
        <button onClick={sendMessageHandler}>send</button>
       </div>
       </div>
    </div>
  )
}

export default SendMessage