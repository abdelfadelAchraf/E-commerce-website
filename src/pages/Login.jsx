import React, { useEffect, useState } from 'react'

const Login = () => {
  const [state , setState ] = useState("Sign Up");
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [name ,setName] = useState("");

  const onSubmitHandler =async(event)=>{
    event.preventDefault();
  }
  return (
  <form className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-4 m-auto  items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
      <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" :"Log In"}</p>
      <p>Please {state === "Sign Up" ? "sign up " :"Log in "}to book an appointment</p>
     {
      state ==="Sign Up" &&   <div className='w-full'>
      <label>Full name</label><br />
      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value) } value={name} required/>
    </div>
     }
    
    
      <div className='w-full'>
        <label>Email adresse</label><br />
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value) } value={email} required/>
      </div>

      <div className='w-full'>
        <label>Password</label><br />
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.value) } value={password} required/>
      </div>

      <button className='bg-slate-500 text-white w-full rounded-md text-base py-2'>{state === "Sign Up" ? "Create Account" :"Log In"}</button>
      {
        state === "Sign Up" ? <p>Already have an account ? <span onClick={()=>setState("Login")} className='text-blue-700 underline cursor-pointer'>login here</span></p>
        : <p>Create an account ? <span onClick={()=>setState("Sign Up")} className='text-blue-700 underline cursor-pointer'> click here</span></p>
      }
    </div>
  </form>
  )
}

export default Login