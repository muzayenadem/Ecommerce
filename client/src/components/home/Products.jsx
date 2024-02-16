import React from 'react'
import img1 from '../../ecoImages/img1.jpeg'
function Products() {
const data = [1,2,3,4,5,6,7,8,9,11,12,33,44,55,66,77,88,99,87,65,43,21]

  return (
    <div>
      <div className='grid grid-cols-1 items-center container mx-auto self-center place-items-center text-center md:grid-cols-3 lg:grid-cols-4 '>
        { data.map((single,index)=>{
          return <div key={index} className='items-center text-left place-items-center ml-5 mt-4 rounded-md p-5 bg-white'>
          <img 
          className='h-64'
          src={img1} 
          alt="" />
          <p className='hover:underline mt-2 mb-2'
          >2024 very latest laptop this laptop is fast secure and worthy buying device</p>
          <p className='font-semibold text-xl'
          >$600.00-$1,000.00</p>/ box
          <p>1 boxMin. order</p>
          <p>HK
YING CHUN IMPORT AND EXPORT TRADING LIMITED
1YRS</p>
<p>5.0
(5)
|
"Good service"</p>
 <hr></hr>
 <button className='btn'>connect supplier</button>
        </div>
        })} 
      </div>
    </div>
  )
}

export default Products