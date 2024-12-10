import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { SlCalender } from "react-icons/sl";
import { IoMdClock } from "react-icons/io";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"


const BookingAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [slotTime, setSlotTime] = useState([]);
  const [selectedTime,setSelectedTime]=useState()

  useEffect(() => {
    getTime();
  }, []);

  const getTime=()=>{
    const timeList=[];
    for (let i = 8; i  <= 12; i++) {
        timeList.push({
            time: i+ ':00 AM'
        })
        timeList.push({
            time: i+ ':30 AM'
        })    
    }
    for (let i = 1; i  <= 6; i++) {
        timeList.push({
            time: i+ ':00 PM'
        })
        timeList.push({
            time: i+ ':30 PM'
        })    
    }

    setSlotTime(timeList)
  }

  const isPastDay=(day)=>{
    return day<=new Date()
  }


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mt-3 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700">
            Booking On Appointment
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book An Appointment</DialogTitle>
            <DialogDescription>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Date Selection */}
                <div className="flex flex-col gap-1">
                  <h2 className="flex items-center gap-2 text-lg font-medium text-black">
                    <SlCalender className="text-blue-700" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border  text-blue-800 hover:bg-blue-50"
                  />
                </div>

                {/* Time Slot Selection */}
                <div className="flex flex-col gap-1    text-xs">
                  <h2 className="flex items-center gap-2 text-lg font-medium text-black">
                    <IoMdClock className="text-blue-700" />
                    Select Time
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border hover:bg-blue-50 px-5 py-1.5 ">
                    {slotTime.map((item, index) => (
                      <h1
                      className={`border text-center rounded-xl px-1 py-1.5 cursor-pointer transition-colors duration-200 
                        ${item.time === selectedTime ? "bg-blue-700 text-white" : "border-blue-600 hover:bg-blue-700 hover:text-white"}`}
                      onClick={() => setSelectedTime(item.time)}
                      >
                        {item.time}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex sm:justify-end gap-2 sm:gap-0 ">
          <DialogClose asChild>   
            <Button type="button" className='bg-red-700 hover:bg-red-600 px-6 h-8 '>
              Close
            </Button>        
          </DialogClose>
          <Button type="button" disabled={!(date&&selectedTime)} className='bg-blue-700 hover:bg-blue-600 px-6  h-8'>
              Save
            </Button> 
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingAppointment;
