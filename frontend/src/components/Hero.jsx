import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border  border-primary'>
       {/**--------------------Hero left side ------------------- */}
       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
           <div className='text-[#414141] '>
               <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-semibold uppercase text-sm md:text-base'>our best sellers</p>
               </div>
               <h1 className='text-6xl sm:py-3 lg:text-6xl leading-relaxed text-primary font-bold'>Latest arrivals</h1>
                <div className='flex items-center gap-2'>
                   <p className='font-semibold uppercase text-sm md:text-base'>shop now </p>
                   <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

                </div>
           </div>
       </div>
       {/**--------------------Hero right side ------------------- */}
       <img src={assets.fashion} alt="" className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero