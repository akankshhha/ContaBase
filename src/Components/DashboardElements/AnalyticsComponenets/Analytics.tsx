import React from 'react'
import CaseFluctuations from './CaseFluctuations'
import CountrywiseData from './CountrywiseData'

const Analytics = () => {
  return (
    <div className='m-auto p-5'>
      <h1 className='text-lg font-semibold m-5'>Day-wise fluctuation in covid cases, dated from 22nd January, 2020</h1>
      <CaseFluctuations />
      <h1 className='text-lg font-semibold m-5'>Leaflet Map of country-wise covid cases</h1>
      <CountrywiseData />
    </div>

  )
}

export default Analytics