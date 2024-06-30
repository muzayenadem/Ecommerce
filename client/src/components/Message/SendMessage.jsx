import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaFileCirclePlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function SendMessage() {
  const [user,setUser] = useState({})
  const {messageId} = useParams()
  const [chat,setChat] = useState([])
  const [profile,setProfile] = useState({}) 
  const [file,setFile] = useState(null)
  const [message, setMessage] = useState('')
  useEffect(()=>{
    try {
      axios.get('http://localhost:4300/profiledata')
      .then((res)=>{
        setProfile(res.data.userData)
      })
    } catch (error) {
      console.log(error.message)
    }
  },[])
  useEffect(()=>{
    try {
        axios.get('http://localhost:4300/usermessagedata'+messageId)
        .then(result=>{
            setUser(result.data.singleuserdata)
            setChat(result.data.chat)
        })
        .catch(err=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error.message)
    }
},[])
console.log(messageId)
console.log(chat)
const sendMessageHandler  = async() =>{
 // e.preventDefault()
   try {
    const formData = new FormData();
    formData.append('receiver', messageId);
    formData.append('text', message);
    if (file) {
      formData.append('file', file);
    }

    await axios.post(
      `http://localhost:4300/sendmessage`,
       formData,
      {
        headers:{
          'Conetent-Type':'multipart-from-data'
        }
      })
    .then(()=>{
      console.log('succed')
    })
    .catch((err)=>{
      console.log(err.message)
    })
          
      // Reset form fields after successful submission
      setMessage('');
      setFile(null);

  } catch (error) {
    console.log(error.message)
  }
}
  return (
    <div className='flex'>
      <div className="  h-[90vh] overflow-y-scroll pointer-events-auto b w-[80%] shadow-xl rounded-xl">
        <div className=' sticky top-0 bg-slate-200'>
        <div className='flex justify-normal '>
          <div className="">
            {!user.image ? <div></div>
             :
             <img src={`https://ecommerce-8yhy.onrender.com/UsersImage/${user.image}`}
            className='w-14 mr-5 mt-auto h-14 rounded-full'
           />
           }
           </div>     
           <div className="ml-10 mt-4">
          <h1 className='font-bold text-xl'>{user.firstName} {user.lastName}</h1>
       </div>
       </div>
       <hr className='mt-2'></hr>
       </div>
       <div className="p-5">
        {!chat ? <div className='h-[80vh] pt-[25%]'><h1 className=' text-center font-bold text-violet-700 text-2xl'>Start conversation with your your friend by saying</h1> 
        <span className='  text-center ml-[40%] mt-[10%] text-4xl font-bold text-green-700 ' >HELLO!!</span></div>
        :
       
         chat.map((single,i) =>{
           return (
           <div key={i} className='flex'>
                { user._id == single.sender ? 
                !user.image ? <div></div>
             :
             <div className=' flex  justify-start mt-5'>
              <img src={`https://ecommerce-8yhy.onrender.com/${user.image}`}
            className='  w-8 mt-auto h-8 rounded-full'
           /> 
           <div className='max-w-sm  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            {
            single.file  && (  <img src={`https://ecommerce-8yhy.onrender.com/MessagesFile/${single.file}`}
            className=' mt-auto rounded-xl m2'
           />)
           }
           {!single.text ? null :
           <div className=" ml-2 bg-blue-800 text-white px-5 py-2 rounded-br-3xl rounded-tl-3xl rounded-tr-3xl ">
            {single.text}
           </div>
           }
           </div>
             </div>
             : !profile.image ? <div></div>
           :
           <div className='flex flex-wrap justify-start mt-5 float-left ml-auto '>
                <div className='max-w-sm  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            {
            single.file  && (  <img src={`https://ecommerce-8yhy.onrender.com/MessagesFile/${single.file}`}
            className=' mt-auto rounded-xl m2'
           />)
           }
           {!single.text ? null :
           <div className=" ml-2 bg-slate-300 px-5 py-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl ">
            {single.text}
           </div>
           }
           </div>
         
              <img src={`https://ecommerce-8yhy.onrender.com/UsersImage/${profile.image}`}
            className='w-8 h-8 rounded-full mt-auto ml-2'
           /> 
             </div>
           }
           </div>
           )
         })
        }
       
       </div>
       <hr/>
       <div className=' sticky bottom-0 bg-white'>
       <form onSubmit={sendMessageHandler} className='flex'>
        <textarea 
          className='text-left py-3 ml-1 px-3  md:w-[80%]   shadow-md focus:outline-none border-b-2'
          placeholder='write message'
        value={message} onChange={(e) => setMessage(e.target.value)} />
        <label>
        <FaFileCirclePlus className='text-2xl mt-6'/>
        <input type="file" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
  
        </label>
      <button  type="submit"><IoSend className='text-2xl ml-6 '/></button>
    </form>
        {/* <input 
        type='text'
        placeholder='write message'
        onChange={(e)=> setMessage(e.target.value)}
        className='text-left py-3 ml-1 px-3  md:w-[80%]   shadow-md focus:outline-none'
        />
        <button onClick={sendMessageHandler}>send</button> */}
       </div>
       </div>
       <div className=' w-[20%] '>
        <div className='mt-[15%]'>
          {user.image ? 
            <img src={`http://localhost:4300/UsersImage/${user.image}`}
            className='  w-28 mt-auto h-28 ml-[20%] rounded-full'
           /> :
          <div className=' bg-orange-500 w-28 h-38 rounded-full align-middle text-white font-bold text-center'>{user.firstName}</div>
          
      }
           <h1 className='ml-[20%] font-bold text-xl'>{user.firstName} {user.lastName}</h1>
        </div>
       </div>
    </div>
  )
}

export default SendMessage