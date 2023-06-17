import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Contact from '../DashboardElements/ContactComponents/Contact';
import Analytics from '../DashboardElements/AnalyticsComponents/Analytics';
import CreateContact from '../DashboardElements/ContactComponents/CreateContact';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Contact />}></Route>
        <Route path='/updateContact/:id' element={<CreateContact />}></Route>
        <Route path='/analytics' element={<Analytics />}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes