import React from 'react'
import AppRoutes from './Routes/AppRoutes'

const DashboardContent = () => {
  return (
    <div className='w-screen bg-[#F9FAFB] relative overflow-hidden relative'>
      {/* <img src={blob1} alt='blob-1' className='absolute w-[25rem] -left-32 -bottom-10 z-0'/>
      <img src={blob2} alt='blob-2' className='absolute w-[45rem] -right-64 -bottom-44 z-0'/>
      <img src={blob3} alt='blob-3' className='absolute w-[45rem] right-44 -top-80 z-0'/> */}
        <AppRoutes />
    </div>
  )
}

export default DashboardContent