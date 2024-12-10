import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='mt-5 flex flex-col  gap-4 gap-x-8'>
      <p className='text-center text-xl font-semibold text-gray-800'>CONTACT US</p>
      <div className='flex flex-col sm:flex-row gap-4 items-start w-full sm: mt-3'>
      {/* left side */}
      <div className='flex flex-col w-full sm:w-[60%] items-start gap-3'>
        <p className=' items-start font-medium text-gray-600'>
          Send us a message
        </p>
        <div className='w-full bg-blue-700 rounded py-10 px-3'>
          <input type="text" placeholder='your name' className='w-full px-3 py-1 rounded mb-5'/>
          <input type="text" placeholder='your email' className='w-full px-3 py-1 rounded mb-5'/>
          <textarea type="text" placeholder='your message' className='w-full min-h-20 px-3 py-1 rounded mb-5'/>
          <button className='w-full px-3 py-1 rounded mb-5 bg-white text-blue-800'>Send Message</button>    
        </div>

      </div>

      {/* right side */}
      <div className=' flex flex-col w-full sm:flex-1 items-start'>
      <p className=' items-start font-medium text-gray-600'>
      Contact information 
      </p>
      <div className='flex flex-col items-start py-5 gap-2'>
        <div className='flex items-center gap-1 '>
          <img className='w-8' src={assets.phone} alt="" />
          <p>+252 90 000000</p>
        </div>
        <div className='flex items-center gap-1 '>
          <img className='w-8' src={assets.message} alt="" />
          <p>+252 90 000000</p>
        </div>
        <div className='flex items-center gap-1 '>
          <img className='w-8' src={assets.blueLocation} alt="" />
          <p>+252 90 000000</p>
        </div>
      </div>

      </div>
      
     </div>
    </div>
    
  )
}

export default Contact
