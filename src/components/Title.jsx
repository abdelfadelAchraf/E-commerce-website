import React from 'react'

const Title = ({txt1 , txt2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 '>
       <p className='text-gray-500 text-3xl uppercase md:text-2xl'>{txt1} <span className='text-gray-700 font-medium uppercase'>{txt2}</span></p>
       <p className='w-8 sm:w-10 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title