import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

  const [visible , setVisible ] = useState(false);
  const navigate = useNavigate();
  const [signUp , setSingnUp] = useState("Sign Up");
  const {setShowSearch , getCartCount}  = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="logo" className='w-36' />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 hover:scale-90'>
          <p className='uppercase'>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:scale-90'>
          <p className='uppercase'>collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 hover:scale-90'>
          <p className='uppercase'>about</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:scale-90'>
          <p className='uppercase'>contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer hover:scale-90' />
        
        <div className='group relative'>
           <img onClick={()=>navigate('login')} src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer hover:scale-90' />
         {
          signUp === "Sign Up" ? '' :   <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black' onClick={()=>navigate('my-profile')}>My profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Log out</p>
          </div>
     </div>
         }
        </div>

        <Link to='/cart' className='relative hover:scale-90'>
         <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
         <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer hover:scale-90 sm:hidden' />
      </div>
      {/**------------------Side bar Menu for small screens -------------- */}
      <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
         <div className='flex flex-col text-gray-500'>
          <div className='flex items-center gap-4 p-3  ' onClick={()=>setVisible(false)}>
            <img src={assets.dropdown_icon} alt="dropdown" className='h-6 rotate-180 cursor-pointer ' />
            <p className='cursor-pointer'>Back</p>
          </div>
          <NavLink to='/' className="py-2 pl-6 border-collapse uppercase" onClick={()=>setVisible(false)}>home</NavLink>
          <NavLink to='/collection' className="py-2 pl-6 border-collapse uppercase" onClick={()=>setVisible(false)}>collection</NavLink>
          <NavLink to='/about' className="py-2 pl-6 border-collapse uppercase" onClick={()=>setVisible(false)}>about</NavLink>
          <NavLink to='/contact' className="py-2 pl-6 border-collapse uppercase" onClick={()=>setVisible(false)}>contact</NavLink>
         </div>
      </div>
    </div>
  )
}

export default Navbar