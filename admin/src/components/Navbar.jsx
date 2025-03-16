import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-2 bg-primary'>
        <img className='w-32' src={assets.Official_logo} alt="" />
        <button onClick={()=>setToken("")} className='bg-secondary text-white px-5 py-3 sm:px-7 rounded-full text-xs sm:text-sm'>logout</button>
    </div>
  )
}

export default Navbar