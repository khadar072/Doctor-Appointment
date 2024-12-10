import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import MyAppointment from './pages/MyAppointment'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[6%] m-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='appointment/:docId' element={<Appointment/>}/>
        <Route path='my-appointment' element={<MyAppointment/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
