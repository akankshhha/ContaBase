import React from 'react'
import CaseFluctuations from './CaseFluctuations'
import CountrywiseData from './CountrywiseData'

const Analytics = () => {
  return (
    <div className='m-auto p-5'>
      <h1 className='text-xl font-semibold m-5 text-[#8884D8]'>Day-wise fluctuation in covid cases</h1>
      <p className='text-sm font-medium ml-5'>The graph shows the daywise fluctuation of covid cases, dated from 22nd January, 2020. Hover on the line graph for more detials.</p>
      <CaseFluctuations />
      <h1 className='text-xl font-semibold m-5 text-[#8884D8]'>Determine the country-wise covid cases in the Leaflet Map</h1>
      <p className='text-sm font-medium ml-5'>Zoom out and click on the location pin to get country-wise details.</p>
      <CountrywiseData />
    </div>
  )
}

export default Analytics