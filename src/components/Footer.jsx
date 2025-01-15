import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
   <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
     <div >
        <img src={assets.logo} alt="logo"className='mb-5 w-32' />
        <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dignissimos consequatur rerum rem voluptas nobis!</p>
     </div>

     <div>
      <p className='text-xl font-medium mb-5 uppercase'>company</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>home</li>
        <li>about us</li>
        <li>delivery</li>
        <li>privacy policy</li>
      </ul>
     </div>
        
     <div>
     <p className='uppercase text-xl font-medium mb-5'>get in touch</p>
         <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+212-616-2727-61</li>
          <li>example@gmail.com</li>
         </ul>
     </div>
   </div>
   <div>
    <hr />
    <p className='py-5 text-sm text-center font-semibold' >&copy; {new Date().getFullYear()} forever. All rights reserved.</p>
   </div>
   </div>
  )
}

export default Footer