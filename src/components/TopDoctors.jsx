import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to  Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simpley brows through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((doctor, index)=>(
            <div key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                <img className='bg-blue-50' src={doctor.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                        <p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
                    <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-6'>
        more
      </button>
    </div>
  )
}

export default TopDoctors
