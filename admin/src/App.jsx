import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import SideBar from './components/SideBar'
import List from './pages/List'
import Orders from './pages/Orders'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

 export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";
const App = () => {
  const [token , setToken ] = useState(localStorage.getItem('MyToken') ? localStorage.getItem('MyToken')  : "") ;


  //Use the local storage to store the token.
      useEffect(() => {
        localStorage.setItem('MyToken', token)
      }, [token]);
  return (
    <div  draggable="false" className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {
        token === "" ?
         <Login setToken={setToken}  /> 
         : 
         <>
        <Navbar setToken={setToken}/>
        <hr />
        <div className='flex w-full'>
          <SideBar />
          <div className='w-[70%] mx-auto ml-[max(5vw , 25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/add" element={<Add token={token}/>} />
              <Route path="/list" element={<List token={token}/>} />
              <Route path="/orders" element={<Orders token={token}/>} />
            </Routes>
          </div>
        </div>
      </>
      }
      

    </div>
  )
}

export default App