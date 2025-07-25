import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointment from './pages/MyAppointment.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar.jsx'


export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointment />} /> // for users to view their appointments
        <Route path='/appointment/:doctorId' element={<Appointment />} /> // for doctors to view appointment details they got.
      </Routes>
    </div>
  )
}
