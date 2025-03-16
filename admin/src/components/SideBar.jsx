import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[20%] min-h-screen border-r-2 bg-accent'>
        
        <div  className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink  draggable="false" className='flex items-center gap-3 border border-light border-r-0 px-3 py-2  rounded-l' to='/'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block'>dashboard</p>
            </NavLink>
           <NavLink draggable="false" className='flex items-center gap-3 border border-light border-r-0 px-3 py-2  rounded-l' to='/add'>
                <img src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add items</p>
            </NavLink>
            <NavLink  draggable="false" className='flex items-center gap-3 border border-light border-r-0 px-3 py-2  rounded-l' to='/list'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List items</p>
            </NavLink>
            <NavLink  draggable="false" className='flex items-center gap-3 border border-light border-r-0 px-3 py-2  rounded-l' to='/orders'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

        </div>

    </div>
  )
}

export default SideBar