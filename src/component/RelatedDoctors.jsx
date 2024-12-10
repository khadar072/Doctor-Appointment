import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../assets/assets';

const RelatedDoctors = ({docId,speciality}) => {
    const [relDoc,setRelDoc]=useState([]);
    const navigate=useNavigate()

    useEffect(()=>{
        if(Doctor.length >0 && speciality){
            const FilterDoc=Doctor.filter(doc=>doc.speciality===speciality && doc._id !== docId)
            setRelDoc(FilterDoc)
        }
    },[docId,speciality])
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="w-full  max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0 cursor-pointer">
        {relDoc.slice(0, 10).map((item, index) => (
                    <div
                      onClick={() => navigate(`/appointment/${item._id}`)}
                      key={index}
                      className=" border px-1 py-1 rounded-lg h-[240px] transition-transform transform duration-500 hover:-translate-y-2 hover:border-2 hover:border-blue-700  "
                    >
                      <div className="max-h-40 ">
                        <img
                          className=" h-40 w-full border object-fill bg-blue-100  rounded-lg"
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

export default RelatedDoctors
