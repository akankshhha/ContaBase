import React from 'react'
import DashboardContent from './DashboardContent'
import Sidebar from './DasboardSidebar'

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <DashboardContent />
        </div>
    )
}

export default Dashboard