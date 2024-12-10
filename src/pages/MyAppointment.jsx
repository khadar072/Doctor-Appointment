import React from 'react';
import { assets, Doctor } from '../assets/assets';

const MyAppointment = () => {
  return (
    <div className="px-4 sm:px-8 py-4 bg-gray-50">
      <div className="flex flex-col gap-6">
        <p className="text-xl sm:text-2xl font-bold mb-4">My Booking</p>
        {Doctor.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row  border border-blue-800 bg-white p-4 rounded-lg shadow-md"
          >
            {/* Left Side (Image) */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-24 sm:h-32  rounded-md bg-blue-100"
              />
            </div>

            {/* Middle Section (Details) */}
            <div className=" flex-grow px-4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <img className="w-5 h-5" src={assets.blueLocation} alt="Location" />
                <p>{item.address}</p>
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <img className="w-5 h-5" src={assets.calender} alt="Calendar" />
                <p>5 Oct 2024 | 10:30</p>
              </div>
            </div>

            {/* Bottom Section (Buttons) */}
            <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:flex-grow-0">
              <button className="px-4 py-2 text-sm sm:text-base border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-500 hover:text-white transition">
                Pay Online
              </button>
              <button className="px-4 py-2 text-sm sm:text-base border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-500 hover:text-white transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
