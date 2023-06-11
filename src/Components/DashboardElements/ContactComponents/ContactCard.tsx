import React from 'react'
import {deleteContact} from '../../../Services/contactService'

const ContactCard = (props: any) => {

  const handleDeletion = (id:any) => {
    deleteContact(props.id)
    console.log(props.id);
    props.setContacts(props.contacts.filter((item:any) => item.id = id))
  }


  return (
    <div className='bg-[#F5F5F5] w-48 p-4 rounded-md text-center shadow-md border border-[#80808]'>
      <div className='p-6 bg-white rounded-full w-24 h-24 m-auto border border-[#80808] '>
       <p className='text-5xl font-semibold text-[#111111]'> {props.firstName.slice(0, 1)}</p>
      </div>
      <div className='mt-4 font-semibold'>
        <h1>{props.firstName} {props.lastName}</h1>
        <h1 className='text-xs'>{props.status}</h1>
      </div>
      
      <div className='flex justify-center gap-4 mt-3 text-xs w-24 m-auto font-medium'>
        <button className='bg-blue-200 py-2 px-4 rounded-md text-black '>Edit</button>
        <button className='bg-red-300 py-2 px-4 rounded-md' onClick={() =>handleDeletion(props.id)}>Delete</button>
      </div>

     
    </div>
  )
}

export default ContactCard