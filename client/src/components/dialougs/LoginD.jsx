import React, { useState } from 'react'
import LoginDialoug from './LoginDialoug'

function LoginD() {

    const [isLoginModel,setIsLoginModel] = useState(false)

    const openLoginModel = () =>{
        setIsLoginModel(true)
    }
    const closeLoginModel =()=>{
        setIsLoginModel(false)
    }
  return (
    <div className=''>
        <button onClick={openLoginModel}>Open</button>
        <button onClick={closeLoginModel}>Close</button>
        <LoginDialoug isOPen={isLoginModel} onClose={closeLoginModel}/>
    </div>
  )
}

export default LoginD