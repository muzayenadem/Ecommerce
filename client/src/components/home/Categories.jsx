import React, { useState } from 'react'
import img2 from '../../ecoImages/img2.jpeg'
function Categories() {
    const data = [1,2,3,4,5,6,7,8,9,0,1,2,4,5,7,8,9,0,4,5,3,2,1,3,4,55,66,7,88,9,7,5,4,3,2,3,4,8,6]
    const [currentIndex,setCurrenntIndex] = useState(0)

    const handlePrev = ()=>{
        setCurrenntIndex(prevIndex => prevIndex === 0 ? data.length-1:prevIndex-1)
    }
const handleNext = ()=>{
    setCurrenntIndex(prevIndex => prevIndex === data.length-1 ? 0:prevIndex+1)
}
    
  return (
    <div className='flex-col container mx-auto place-content-center text-center items-center  md:flex md:flex-row overflow-x-auto bg-white gap-4 py-3 px-4 ml-5'>
        {
            data.map((single,index) =>{
                return <div className='flex justify-around bo mb-3 md:flex-col md:flex-none items-center place-self-center place-content-center'key={index}>
                    <img 
                    src={img2} 
                    alt='' 
                    className={`w-20 h-20 rounded-full  `}></img>
                    <p>Laptop</p>
                </div>
            })
        }
    </div>
  )
}

export default Categories