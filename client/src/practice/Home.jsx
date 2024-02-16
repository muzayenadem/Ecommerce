import React from 'react'
import img1 from './br1.jpg'
import img2 from './f17.jpg'

const humberg = document.getElementById('humberg');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#links');
const faSolid = document.querySelectorAll('.fa-solid');
const clickHandler = () =>{
    menu.classList.toggle('hidden')
    faSolid.classList.toggle('fa-mark')
}
const closeHandler = () =>{
    menu.classList.add('hidden')
    faSolid.classList.add('fa-mark')
}

const linksHandler = () =>{
    menu.classList.toggle('hidden')
    faSolid.classList.toggle('fa-mark')
}







//testimonia
const userText = document.getElementsByClassName('user-text');
const userPicture = document.getElementsByClassName('user-picture')

const showReview = () =>{
 for(userpic of userPicture){
    userpic.classList.remove('active-picture')
 }
 for (userT of userText){
    userT.classList.remove('active-text')
 }
}

function Home() {


  return (
    <div className='w-screen h-auto bg-indigo-950 text-white tracking-wider'>
       <header className=''>
        <nav className='container mx-auto flex justify-between items-center'>
            <div className='text-orange-600 font-bold text-3xl py-5'>
                <a href='/'>
                    <span className='text-white'>Ecom</span>merce
                </a>
            </div>
            <div>
                <ul className='hidden md:flex space-x-6 items-center pt-5' >
                    <li className='hover:text-orange-700 ease-out duration-200'> Home</li>
                    <li className='hover:text-orange-700 ease-out duration-200'>About</li>
                    <li className='hover:text-orange-700 ease-out duration-200'>Support</li>
                    <li className='hover:text-orange-700 ease-out duration-200'>Register</li>
                    <li className='hover:text-orange-700 ease-out duration-200'>Login</li>
                    <li><button onMouseDown={()=> alert('good job')} className='btn'>HOME</button></li>
                </ul>
            </div>
            <div onClick={clickHandler} class='md:hidden cursor-pointer rounded-md py-2 px-2   bg-orange-800 font-bold text-white text-3xl '>
               <span class='fa-solid fa-mark text-black'> d</span>r
            </div>
            <div id='menu' className='hidden bg-indigo-950 items-center h-[100vh] absolute inset-0 pt-2'>
                <span onClick={closeHandler} className='rounded-md py-2 px-2  ml-[93%] mt-[2%] bg-orange-800 font-bold text-white text-3xl'> X</span>
                <ul  className='h-full grid place-items-center py-20'>
                    <li onClick={linksHandler}  className='hover:text-orange-700 ease-out duration-200'> Home</li>
                    <li onClick={linksHandler} id='links' className='hover:text-orange-700 ease-out duration-200'>About</li>
                    <li onClick={linksHandler}  id='links' className='hover:text-orange-700 ease-out duration-200'>Support</li>
                    <li onClick={linksHandler}  id='links' className='hover:text-orange-700 ease-out duration-200'>Register</li>
                    <li onClick={linksHandler}  id='links' className='hover:text-orange-700 ease-out duration-200'>Login</li>
                    <li onClick={linksHandler}  id='links'><button className='py-4 px-10  bg-orange-600 rounded-lg text-center text-white font-bold hover:opacity-80 ease-in duration-200'>HOME</button></li> 
                </ul>
            </div>
        </nav>
       </header>
       <main>
         <section className=''>
            <div className="bolb1"></div>
            <div className='bolb2'></div>
            <div className='container py-20 mx-auto'>
                <div className='flex flex-col justify-between items-center z-20 md:flex-row '>
                    <div className='text-center mb-12 md:text-left md:w1/2 md:pr-10'>
                    <h1 className='title mb-10'>My first application for ecommerce using mern stack </h1>
                    <p className='leading-relaxed mb-10'>this application is very awsome and best application that you have ever seen before and this application is developed using very power full library like react redux-toolkit</p>
                    <button className='btn'>Download App</button>
                    </div>
                  <div className='md:w-1/2'>
                    <img className='rounded-3xl' src={img1} alt="" />
                </div>
                </div>
            </div>
         </section>
         <section>
            <div className="container py-20 mx-auto">
                <div className='text-center mb-20 '>
                    <h3 className='text-orange-600 font-bold text-xl mb-4'>Our fuetures</h3>
                    <p className='title'>Easy to manage all fuetures in our app</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-6 px-4 gap-12 lg:gap-8'>
                    <div className='border-0 border-solid border-green cursor-pointer py-20 px-4 text-center hover:bg-violet-900 ease-in duration-200 rounded-2xl'>
                        <img src={img1} className='rounded-2xl' alt="" />
                        <h3 className='mt-5 text-2xl font-bold'>Mubarek Adem</h3> 
                        <p>im full stack developer i have been learning full stack technology for long time</p>
                    </div>
                    <div className='border-0 border-solid border-green cursor-pointer py-20 px-4 text-center hover:bg-violet-900 ease-in duration-200 rounded-2xl'>
                        <img src={img1} className='rounded-2xl' alt="" />
                        <h3 className='mt-5 text-2xl font-bold'>Keyrudin Adem</h3> 
                        <p className='leading-relaxed '>im full stack developer i have been learning full stack technology for long time</p>
                    </div>
                    <div className='border-0 border-solid border-green cursor-pointer py-20 px-4 text-center hover:bg-violet-900 ease-in duration-200 rounded-2xl'>
                        <img src={img1} className='rounded-2xl' alt="" />
                        <h3 className='mt-5 text-2xl font-bold'>Sadik Adem</h3> 
                        <p className=''>im full stack developer i have been learning full stack technology for long time</p>
                    </div>
                </div>
            </div>
         </section>
         <section className='relative'>
        
            <div className='container mx-auto py-20 relative'>
            <div className='bolb1 '></div>
            <div className="bolb2"></div>
                <div className='flex flex-col items-center justify-between md:flex-row'>
                <div className='md:w-1/4'>
                    <img className='rounded-3xl' src={img2} alt="" />
                </div>
                <div className='text-center md:text-left'>
                    <p className='text-orange-700 font-bold text-xl mb-8 md:mt-10'>buy and sell</p>
                    <h1 className='title mb-10'>Best Ecommerce app to buy anything</h1>
                    <p className='leading-snug mb-10'>best ecommerce app to buy anything from every where in addition you can sell anything that  yo want to sell from every where</p>
                    <button className='btn'>Download App</button>
                </div>
              </div>
            </div>
         </section>
         <section>
            <div className='container mx-auto py-20 '>
                {/* 1000370761802 */}
              <div>
                <div className='text-center'>
                <p className='text-orange-700 font-bold text-xl mb-3 md:mt-10'>How it works</p>
                <h1 className='title'>Grow up your money </h1>
                <h1 className='title mb-10'>saving </h1>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-3'>
                    <div className='items-center text-center'>
                        <h1 className='bg-slate-900 w-24 h-28 rounded-xl text-5xl font-bold py-[6%] text-center text-white ml-[40%] mb-7 hover:bg-orange-600'>1</h1>
                        <p className='text-2xl font-bold'>Install The App</p>
                        <p>we use an aplication designed a testing gnose to keep away</p>
                    </div>
                    <div className='items-center text-center'>
                        <h1 className='bg-orange-800 w-24 h-28 rounded-xl text-5xl font-bold py-[6%] text-center text-white ml-[40%] mb-7 hover:bg-slate-800'>2</h1>
                        <p className='text-2xl font-bold'>Setup your profile</p>
                        <p>we use an aplication designed a testing gnose to keep away</p>
                    </div>
                    <div className='items-center text-center'>
                        <h1 className='bg-slate-900 w-24 h-28 rounded-xl text-5xl font-bold py-[6%] text-center text-white ml-[40%] mb-7 hover:bg-orange-600'>3</h1>
                        <p className='text-2xl font-bold'>Enjoy the feutures</p>
                        <p>we use an aplication designed a testing gnose to keep away</p>
                    </div>
                </div>
              </div>
            </div>
         </section>
         <section>
            <div className='container mx-auto py-20 '>
                {/* 1000370761802 */}
              <div>
                <div className='text-center'>
                <p className='text-orange-700 font-bold text-xl mb-3 md:mt-10'>User Review</p>
                <h1 className='title'>What clients say about our app </h1>
                <h1 className='title mb-10'>after using it!</h1>
                </div>
                <div className='container mx-auto py-4 w-3/6'>
                    <div className='items-center place-items-center text-center flex flex-wrap justify-between '>
                        <img className='w-20 h-20 rounded-full cursor-pointer p-1 m-3 active-picture' onClick={showReview} src={img2} alt="" />
                        <img className='w-20 h-20 rounded-full cursor-pointer p-1 m-3 user-picture' onClick={showReview} src={img2} alt="" />  
                        <img className='w-20 h-20 rounded-full cursor-pointer p-1 m-3 user-picture' onClick={showReview} src={img2} alt="" /> 
                        <img className='w-20 h-20 rounded-full cursor-pointer p-1 m-3 user-picture' onClick={showReview} src={img2} alt="" />
                        <img className='w-20 h-20 rounded-full cursor-pointer p-1 m-3 user-picture' onClick={showReview} src={img2} alt="" />
                    </div>
                      <div className='container mx-auto py-5 grid place-items-center text-center md:w-4/5 h-[40%] '>
                        <div className='user-text'>
                         <p className='text-white font-bold text-xl mb-3 md:mt-10'> this application is very awsome and best application that you have ever seen before and this application is developed using very power full library like react redux-toolkit</p>
                         <h1 className='font -bold text-orange-700 text-xl mb-5'>What clients say about our app </h1>
                         <h1 className='mb-10'>Os Developer</h1>
                     </div>
                     {/* <div className='user-text'>
                         <p className='text-white font-bold text-xl mb-3 md:mt-10'> this application is very awsome and best application that you have ever seen before and this application is developed using very power full library like react redux-toolkit</p>
                         <h1 className='font -bold text-orange-700 text-xl mb-5'>What clients say about our app </h1>
                         <h1 className='mb-10'>React Developer</h1>
                     </div>
                     <div className='user-text'>
                         <p className='text-white font-bold text-xl mb-3 md:mt-10'> this application is very awsome and best application that you have ever seen before and this application is developed using very power full library like react redux-toolkit</p>
                         <h1 className='font -bold text-orange-700 text-xl mb-5'>What clients say about our app </h1>
                         <h1 className='mb-10'>Os Developer</h1>
                     </div>
                        <div className='user-text'>
                         <p className='text-white font-bold text-xl mb-3 md:mt-10'> this application is very awsome and best application that you have ever seen before and this application is developed using very power full library like react redux-toolkit</p>
                         <h1 className='font -bold text-orange-700 text-xl mb-5'>What clients say about our app </h1>
                         <h1 className='mb-10'>Os Developer</h1>
                     </div>
                     <div className='user-text'>
                         <p className='text-white font-bold text-xl mb-3 md:mt-10'> this application is very awsome and best application that you have ever seen before and this application is developed using very power full library like react redux-toolkit</p>
                         <h1 className='font -bold text-orange-700 text-xl mb-5'>What clients say about our app </h1>
                         <h1 className='mb-10'>Angular Developer</h1>
                     </div> */}
                 </div>
                </div>
              </div>
            </div>
         </section>
         <section id='pricing'>
            <div className='container mx-auto py-11 '>
                <div className='text-center m-auto mb-20 md:w-1/2'>
                <p className='text-orange-700 font-bold text-xl mb-3 md:mt-10'>pricing</p>
                <h1 className='title'>Get in reasonable price </h1>
                </div>


                {/* rounded sweach */}
                <div className='mt-5 flex items-center justify-center gap-4'>
                    <p>Bill Monthly</p>
                    <label for='' className='relative inline-block w-20 h-8 rounded-full'>
                        <input type='checkbox' id='toggleBtn' className='peer opacity-0 w-0 h-0'/>
                            <span className='absolute top-0 left-0 right-0 bottom-0 bg-violet-950 border border-solid border-gray-400 rounded-full duration-300 before:content-[""] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-orange-600'></span>
                    </label>
                    <p>Bill Anuall</p>
                    <h1>I didn't finish it</h1>
                </div>
            </div>
         </section>
       </main>
    </div>
  )
}
export default Home
