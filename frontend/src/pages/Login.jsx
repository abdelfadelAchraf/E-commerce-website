import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const { token , setToken, navigate, backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (state === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
      //  console.log(response)
        if (response.data.success) {
         setToken(response.data.token)
         localStorage.setItem('token', response.data.token)
          toast.success("Account created successfully");

          setTimeout(() => {
            setState("Login");
            setLoading(false);
          }, 1500); // Delay to simulate loading

        } else {
          toast.error(response.data.message);
          setLoading(false);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful");
        //  setLog(true);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
        setLoading(false);
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };


  useEffect(()=>{
    if (token) {
      navigate("/")
    }
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Log In"}</p>
        <p>Please {state === "Sign Up" ? "sign up" : "log in"}</p>
        {state === "Sign Up" && (
          <div className='w-full'>
            <label>Full name</label><br />
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        )}
        <div className='w-full'>
          <label>Email address</label><br />
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <label>Password</label><br />
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button className='bg-slate-500 text-white w-full rounded-md text-base py-2' disabled={loading}>
          {loading ? "Processing..." : state === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        {state === "Sign Up" ? (
          <p>Already have an account? <span onClick={() => setState("Login")} className='text-blue-700 underline cursor-pointer'>Login here</span></p>
        ) : (
          <p>Create an account? <span onClick={() => setState("Sign Up")} className='text-blue-700 underline cursor-pointer'>Click here</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
