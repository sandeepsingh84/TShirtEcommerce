

import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='w-[50%] '>
<img src='ref-shirt.png' />
   </div>



<div className='w-[35%] h-[600px] mt-20 '>

<div className='border w-[70%] h-[100%] p-2 rounded-2xl shadow-xl'>
    <h1 className='font-bold text-4xl text-center mb-5 '>Create Account</h1>


<form className='px-5'>
<p className='text-lg'>NAME</p>
<input className='w-[100%] border mt-1 rounded-md px-2 h-12 border-black  focus:outline-none focus:ring focus:ring-sky-300  outline-offset-0' required placeholder='Enter Name'/>



<p className='mt-5 text-lg '>EMAIL</p>
<input className='w-[100%] border mt-1 rounded-md px-2 h-12 border-black' required placeholder='Enter Email'/>



<p className='mt-5 text-lg'>PASSWORD</p>
<input className='w-[100%] border mt-1 rounded-md px-2 h-12 border-black' required placeholder='Enter Password'/>




<p className='mt-5 text-lg'>MOBILE NUMBER</p>
<input className='w-[100%] border mt-1 rounded-md px-2 h-12 border-black' required placeholder='Enter Mobile Number'/>


<button className='mt-5 border text-center p-1 h-10 rounded-md shadow-sm w-full bg-yellow-400 text-white'>Create Account </button>

</form>
<div className='flex justify-center gap-2 mt-5'>
<p>Already have an account?</p>

<p>Sign In</p>
</div>
</div>



</div>


    </div>
  )
}

export default Signup