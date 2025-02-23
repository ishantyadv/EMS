import React, { useState } from 'react'

const Login = ({handleLogin}) => {
       
    const [email , setEmail] = useState('');
    const [passwprd , setPassword] = useState('');


    const submitHandler =(e)=>{
        e.preventDefault()
        // console.log ("email is ", email);
        // console.log('password is',passwprd);
        handleLogin(email,passwprd);
        setEmail("");
        setPassword(""); 


    }
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
       className='flex flex-col items-center justify-center'>
        <input
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
         required className='  outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-6 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your Email'/>
        <input 
        value={passwprd}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        required className='  outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-6 rounded-full mt-4 placeholder:text-gray-400' type='password' placeholder='Enter your password'/>
        <button className=' text-white outline-none  border-none hover:bg-emerald-700 text-lg py-2 px-8 rounded-full mt-7 placeholder:text-white '>Log in</button>
      </form>

      </div>
    </div>
  )
}

export default Login
