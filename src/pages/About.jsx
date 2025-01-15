import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
     <div className='text-center text-2xl pt-10 text-gray-500'>
     <p>ABOUT <span className='text-gray-700 font-bold'>US</span></p>
     </div>

     <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi harum perferendis dolore odio voluptate quibusdam maxime fugit architecto facere!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est laborum eius quia modi odit quaerat iusto animi impedit rem, dignissimos magnam magni totam asperiores ipsa suscipit porro earum, recusandae vero!</p>
        <b className='text-gray-800'>Our vision</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio blanditiis voluptate aut? Laboriosam, aliquid.</p>
      </div>
     </div>
     {/**-------------why choose us */}
     <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
     </div>

     <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-slate-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer'>
        <b>Efficiency</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, laboriosam.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-slate-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer'>
      <b>Convinience</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempore quis assumenda aperiam officia quas atque.
      </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-slate-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer'>
      <b>personalisation</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae sint voluptate quam.</p>
      </div>
     </div>
    </div>
  )
}

export default About