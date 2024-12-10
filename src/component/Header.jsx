import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg bg-blue-700 px-6 md:px-10 lg:px-20'>
      {/* Left Part */}
      <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-2 sm:gap-0 md:gap-2 sm:py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight text-white'>
          Book Your Doctor <br /> Appointment <br /> Online
        </p>
        <p className='text-xs md:text-sm text-white text-wrap '>
          A healthcare Tomorrow Starts Today Schedule Your Appointment. 
          Your wellness Our Expertise Set Up Your Appointment Today.
        </p>
        <a href='#speciality' className='bg-white text-blue-700 text-xs md:text-sm px-5 py-2 rounded-lg '>
          Explore Now
        </a>
      </div>

      {/* Right Part */}
      <div className='md:w-1/2 relative'>
        <img src={assets.doctors} alt="Doctor Image" className='w-full sm:absolute h-auto rounded-lg bottom-0'/>
      </div>
    </div>
  );
}

export default Header;
