import React from 'react';
import { Userscomment } from '../assets/assets';
import { motion } from "motion/react";

const Comment = () => {
  return (
    <div className='container m-auto overflow-hidden '>
      <div className='flex '>
        {/* First Scrolling Section */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }} 
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className=' flex   gap-4 overflow-x-auto p-4 flex-shrink-0'
        >
          {Userscomment.map((item, index) => (
            <div
              className=' hover:bg-blue-700 hover:text-white cursor-pointer flex flex-col max-w-40 md:max-w-56  gap-1 border border-blue-600 px-3 py-2 rounded-lg '
              key={index}
            >
              <div className='flex gap-4 items-start'>
                <img className='w-8 h-8 rounded-full' src={item.image} alt="" />
                <div className='flex flex-col'>
                  <p className='text-sm font-medium'>{item.name}</p>
                  <img className='w-12' src={item.rating} alt="" />
                </div>
              </div>
              <p className='text-xs text-wrap break-words'>{item.comment}</p>
            </div>
          ))}
        </motion.div>
        {/* second scrolling section */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }} 
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className=' flex  gap-4 overflow-x-auto p-4 flex-shrink-0'
        >
          {Userscomment.map((item, index) => (
            <div
              className='hover:bg-blue-700 hover:text-white cursor-pointer flex flex-col max-w-40 md:max-w-56  gap-1 border border-blue-600 px-3 py-2 rounded-lg'
              key={index}
            >
              <div className='flex gap-4 items-start'>
                <img className='w-8 h-8 rounded-full' src={item.image} alt="" />
                <div className='flex flex-col'>
                  <p className='text-sm font-medium'>{item.name}</p>
                  <img className='w-12' src={item.rating} alt="" />
                </div>
              </div>
              <p className='text-xs text-wrap break-words'>{item.comment}</p>
            </div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default Comment;
