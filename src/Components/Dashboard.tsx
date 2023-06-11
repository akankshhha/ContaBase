import React from 'react'
import DashboardContent from './DashboardContent'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <DashboardContent />
        </div>
    )
}

export default Dashboard