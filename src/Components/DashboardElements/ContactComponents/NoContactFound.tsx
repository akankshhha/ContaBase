import React from 'react'
import notFound from '../../../Assets/delivery-cancelled.png'

const NoContactFound = () => {
  return (
    <div className=' bg-white z-10 p-6 shadow-md rounded-md border border-[#dedede]'>
        <img src={notFound} alt='Not Found.' className='w-24 h-24 m-auto'/>
        <h1 className='text-base font-medium mt-4 text-[#442C0C]'>No contacts are available. Please add contact from Create Contact button</h1>
    </div>
  )
}

export default NoContactFound