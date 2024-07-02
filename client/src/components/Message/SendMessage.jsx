import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaFileCirclePlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { storage } from '../../firebase/firebaseConfig';
import { uploadBytes,getDownloadURL,ref } from 'firebase/storage';
function SendMessage() {
  const [user,setUser] = useState({})
  const {messageId} = useParams()
  const [chat,setChat] = useState([])
  const [profile,setProfile] = useState({}) 
  const [file,setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState("");
  const [message, setMessage] = useState('')
  const [userImageSample,setUserImageSamlpe] = useState('') 
  const [profileImageSample,setProfileImageSamlpe] = useState('') 

  useEffect(()=>{
    try {
      axios.get('https://ecommerce-8yhy.onrender.com/profiledata')
      .then((res)=>{
        setProfile(res.data.userData)
        setProfileImageSamlpe(`${res.data.userData.firstName[0]}${res.data.userData.lastName[0]}`)
      })
    } catch (error) {
      console.log(error.message)
    }
  },[])


  const messageData = async ()=>{
   try {
    const response = await axios.get('https://ecommerce-8yhy.onrender.com/usermessagedata'+messageId)
    setUser(response.data.singleuserdata)
    setChat(response.data.chat)
    setUserImageSamlpe(`${response.data.singleuserdata.firstName[0]}${response.data.singleuserdata.lastName[0]}`)
   } catch (error) {
    console.log({error:err.message})
   }
  }
  useEffect(()=>{
    messageData()
},[])


console.log({messageId})
console.log({chat})
const sendMessageHandler  = async() =>{
   try {
    if (file) {
      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFileUrl(url);
      // Send the file URL to the backend to save in MongoDB
      saveFileUrl(url);
    }




    const formData = new FormData();
    formData.append('receiver', messageId);
    formData.append('text', message);
    // if (file) {
    //   formData.append('file', file);
    // }

    await axios.post(
      `https://ecommerce-8yhy.onrender.com/sendmessage`,
       formData,
      {
        // headers:{
        //   'Conetent-Type':'multipart-from-data'
        // }
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
console.log(fileUrl)

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
        <div>
          {
         chat.map((single,i) =>{
           return (
           <div key={i} className='flex'>
                { user._id == single.sender ? 
             <div className=' flex  justify-start mt-5'>
             {
              user.image ?   ( <img src={`https://ecommerce-8yhy.onrender.com/UsersImage/${user.image}`}
                className='  w-9 mt-auto h-9 rounded-full'
           /> ) : (<div className='w-9 h-9 rounded-full flex justify-center uppercase items-center mt-auto ml-2 bg-fuchsia-900 text-white font-bold'>{userImageSample}</div>)
             }
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
           {
            profile.image ? (   <img src={`https://ecommerce-8yhy.onrender.com/UsersImage/${profile.image}`}
              className='w-9 h-9 rounded-full mt-auto ml-2'
             /> ) : (<div className='w-9 h-9 rounded-full flex justify-center items-center mt-auto ml-2 uppercase bg-blue-600 text-white font-bold'>{profileImageSample}</div>)
           }
             </div>
           }
           </div>
           )
         })
        }
        </div>
        }
       </div>
       {/* <div>
       {
        !chat ? 
        <div className='h-[80vh] pt-[25%]'><h1 className=' text-center font-bold text-violet-700 text-2xl'>Start conversation with your your friend by saying</h1> 
        <span className='  text-center ml-[40%] mt-[10%] text-4xl font-bold text-green-700 ' >HELLO!!</span></div>
        :
        <div>
           {
          chat.map((single,i)=>{
            return(
              <div key={i}>
                {
                user._id == single.sender ? 
                <div>
                  <p className=' text-red-500'>{single.text}</p>
                </div>
                :
                <div>
                  <p className=' text-green-500'>{single.text}</p>
                </div>
                }
              </div>
            )
          })
        }
        </div>
       }
       </div> */}
       <hr/>
       <div className=' sticky bottom-0 bg-white'>
       <div className='flex'>
        <textarea 
          className='text-left py-3 ml-1 px-3  md:w-[80%]   shadow-md focus:outline-none border-b-2'
          placeholder='write message'
        value={message} onChange={(e) => setMessage(e.target.value)} />
        <label>
        <FaFileCirclePlus className='text-2xl mt-6'/>
        <input type="file" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
  
        </label>
      <button onClick={sendMessageHandler} type="submit"><IoSend className='text-2xl ml-6 '/></button>
    </div>
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
            <img src={`https://ecommerce-8yhy.onrender.com/UsersImage/${user.image}`}
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