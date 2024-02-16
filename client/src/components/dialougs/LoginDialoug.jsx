import React from 'react'

function LoginDialoug({isOPen,onClose}) {
  return (
    <div  className={` -z-10 inset-0 overflow-y-auto ${isOPen ? 'block' : 'hidden'}`}>
        <div className='flex items-center justify-center min-h-screen'>
            <div onMouseLeave={onClose} className='bg-black relative rounded-lg overflow-hidden shadow-xl w-80 h-80'>
            <form onSubmit={onClose} className=''>
     <label className='mb-5'>Email</label><br/>
     <input 
     type='email' 
     placeholder='email'
     className='rounded-xl text-left mb-5 py-1 text-black px-10 '
    
     
     /><br/>
     <label >Password</label><br/>
     <input 
     type='password' 
     placeholder='first name'
     
    
     /><br/>
  
  <button type='submit'>LOGIN</button>
    </form>
                <button onClick={onClose}>close</button>
            </div>
        </div>

    </div>
  )
}

export default LoginDialoug