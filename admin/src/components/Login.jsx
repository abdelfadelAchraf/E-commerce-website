import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    {/**Create the email and password states */ }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = React.useState(false);
    {/**The form submit function */ }
    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();

            const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });

            if (response.data.success) {
                setToken(response.data.token)
                toast.success("Login succesfully")
            } else {
                toast.error(response.data.message)
               
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white rounded-lg shadow-md px-8 py-6 max-w-md '>
                <h1 className='text-2xl font-bold mb-4'>Admin panel</h1>
                <form onSubmit={onSubmitHandler} >
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email address</p>
                        <input onChange={(event) => setEmail(event.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-700 outline-none ' type="email" placeholder='your@email.com' />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Your  password</p>
                        <input onChange={(event) => setPassword(event.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-700 outline-none ' type="password" placeholder='Enter your password' />
                    </div>
                    <button className={`mt-2 w-full px-7 py-2 rounded-md bg-black text-xl text-white ${email === "" || password === "" ? 'bg-black/85 cursor-not-allowed' : 'bg-black'}`} type='submit'>
                        {
                            loading ? "logging..." : "login"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login