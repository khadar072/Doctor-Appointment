import React from 'react'
import { Doctor } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Topdoctors = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col  items-center gap-2 text-gray-800 my-10 md:mx-10'>
        <div className='w-full justify-center text-center'>
        <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
        <p className='sm:w-full text-sm text-center'>Our Trusted Experts Ready to Serve You</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0 cursor-pointer '>
            {
                Doctor.slice(0,10).map((item, index) => (
                    <div
                      onClick={() => navigate(`/appointment/${item._id}`)}
                      key={index}
                      className=" border px-1 py-1 rounded-lg h-[240px] transition-transform transform duration-500 hover:-translate-y-2 hover:border-2 hover:border-blue-700 "
                    >
                      <div className="max-h-40 ">
                        <img
                          className=" h-40 w-full px-2 bg-blue-100 border object-fill  rounded-lg"
                          src={item.image}
                          alt={`${item.name}`}
                        />
                      </div>
      
                      <div className="flex flex-col mt-1 gap-1 sm:gap-0 items-start px-3">
                        <div className="flex gap-1 items-center justify-center ">
                          <p className="w-[6px] h-[6px] rounded-full bg-green-500 "></p>
                          <p className="text-xs text-green-500"> Available</p>
                        </div>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-xs mt-1 border border-blue-500 px-2 rounded flex items-center justify-center mb-1">
                          {item.speciality}
                        </p>
                        {/* <button className="w-full rounded-xl text-sm border mt-1">
                          Book Now
                        </button> */}
                      </div>
                    </div>
                  ))}

        </div>
      
    </div>
  )
}

export default Topdoctors