import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit=()=>{
        if(email==='admin@example.com' && password==='password123'){
            navigate('/dashboard')
        }
        else{
            alert('invalid Credencial');
        }

    }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-400 '>
    <div className='bg-white p-6 shadow-md rounded w-84 '>
        <h2 className=' text-2xl font-bold mb-4'>Login</h2>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border w-full p-2 mb-3'/>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border w-full p-2 mb-3' />
        <button onClick={handleSubmit} className='text-white bg-green-400 w-full items-center p-2 font-semibold'>Login</button>
    </div>
      
    </div>
  )
}

export default Login
