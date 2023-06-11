import React from 'react'
import { NavLink } from 'react-router-dom';
import brandName from '../Assets/brandName1.png'

const Sidebar = () => {
  const sidebarList = [
    {
      to: "/",
      listItemName: "Contact"
    },
    {
      to: "/analytics",
      listItemName: "Analytics"
    }
  ]
  return (
    <div className='h-screen w-[18rem] bg-[#F9FAFB] border-r border-[#dedede]'>
      <img src={brandName} alt='brand' className='w-24 h-24 mx-auto mt-6'/>
  
      <nav className='flex flex-col text-center mt-6'>
        {sidebarList.map((listItem, index) => {
          return (
            <NavLink
              to={listItem.to}
              className={({ isActive }) => (isActive ? 'bg-[#E8EBEE] py-3 mx-2.5 rounded-md': 'py-3')}
              key={index}
            >
              {listItem.listItemName}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar