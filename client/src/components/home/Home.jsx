import React from 'react'
function Home() {
  return (
    <div className='w-full h-auto flex flex-wrap m-7 p-5 '>
      <div className='w-3/4 ml-32 text-center bg-indigo-600 rounded-xl shadow-2xl flex flex-wrap  justify-between '>
        <div className='w-3/4'>
        <input
        type='search'
        placeholder='search here'
        className='rounded-2xl px-3 py-4 shadow-xl bg-white text-left border-white m-4 w-3/4 '
        />
        <button className='bg-violet-950 text-center text-white font-bold px-10 py-3 rounded-2xl '>Search</button>
        </div>
       
        <h1 className='text-left ml-7 text-gray-300 font-light font-serif text-2xl px-3 py-5'>Eccommers Website</h1>
      </div>
    </div>
  )
}

export default Home