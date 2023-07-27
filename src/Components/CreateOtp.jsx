

import React from 'react'



const CreateOtp = () => {
  return (
    <div className=' text-center border   '>
    
<div className='bg-[url("/Images/background.jpg")] h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center pt-20 ' >

<div className='h-[80%] border  w-[28%] p-5 m-auto pt-10 bg-white rounded-md shadow-lg'>

<h1 className='text-2xl font-serif font-semibold'>Vertification Code</h1>
<p className='text-gray-600 mt-4'>Please Enter the Vertification code sent </p>
<p className='text-gray-600 '>to +91 9814234575</p>



<div className='flex justify-center gap-5 mt-10'>
<input className='border rounded-md bg-blue-100  w-10 h-10 tetx-center'/>
<input className='border rounded-md  bg-blue-100 w-10 h-10 tetx-center'/>
<input className='border rounded-md   bg-blue-100 w-10 h-10 tetx-center'/>
<input className='border rounded-md  bg-blue-100  w-10 h-10 tetx-center'/>
</div>



<p className='mt-10 text-xl font-semibold'>Didn't receive on OTP ?</p>

<p className='mt-5 font-sans font-bold'>Resend OTP ?</p>



<button className='mt-10 border w-full bg-yellow-400 rounded-md text-2xl font-semibold py-3 text-white'>Sumbit</button>
</div>
</div>
    
    </div>
  )
}

export default CreateOtp