

import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-around'>
    <div className='w-[50%] '>
<img src='ref-shirt.png' />
   </div>



<div className='w-[30%] mt-20 '>

<div className='border w-[90%] h-[90%] p-2 rounded-2xl shadow-xl'>
    <h1 className='font-semibold text-3xl text-center mb-5 '>Create Account</h1>


<form className='px-5'>
<p className='text-sm'>NAME</p>
<input className='w-[100%] border mt-1 rounded-md px-2 border-black  focus:outline-none focus:ring focus:ring-sky-300  outline-offset-0' required/>



<p className='mt-5 text-sm'>EMAIL</p>
<input className='w-[100%] border mt-1 rounded-md px-2 border-black' required/>



<p className='mt-5 text-sm'>PASSWORD</p>
<input className='w-[100%] border mt-1 rounded-md px-2 border-black' required/>




<p className='mt-5 text-sm'>MOBILE NUMBER</p>
<input className='w-[100%] border mt-1 rounded-md px-2 border-black' required/>


<button className='mt-5 border text-center text-black p-1 rounded-md shadow-sm w-full hover:bg-sky-400 hover:text-white'>Create Account </button>

</form>
<div className='flex justify-center gap-2 mt-3'>
<p>Already have an account?</p>

<p>Sign In</p>
</div>
</div>



</div>


    </div>
  )
}

export default Signup