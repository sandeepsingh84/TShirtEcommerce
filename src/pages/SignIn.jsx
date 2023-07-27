import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full'>

        <div className='flex justify-center mt-8 text-7xl font-bold font-[sans-sarif]'><h1>Sign In</h1></div>
        <div className='mt-10 w-[35%] m-auto'>

           <form action="">
            <div>
            <div>  <label className='text-3xl  ' htmlFor="Email">Email</label> </div>
              <input type="text" className='w-full border border-black h-14 rounded-md mt-3 pl-4 text-xl' placeholder='Enter email adress' />
            </div>

            <div className='mt-6'>
            <div>  <label className='text-3xl  ' htmlFor="Password">Password</label> </div>
              <input type="text" className='w-full border border-black h-14 rounded-md mt-3 pl-4 text-xl' placeholder='Enter password' />
            </div>

           <div className='mt-8'><button className='w-full h-14 bg-yellow-400 text-white text-2xl font-[sans-sarif] font-semibold rounded-md'>Sign In</button></div>

        <div className='flex justify-center text-3xl mt-8 font-[sans-sarif]'>Don't have an account?<button className='text-blue-300 underline'>Create account</button></div>

           </form>



              
        </div>
       


    </div>
  )
}

export default SignIn ;