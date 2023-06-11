import { useState } from 'react'
import { addContact } from '../../../Services/contactService'

const CreateContact = ({ setShowComponent }: any) => {

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    status: ''
  })

  const handleButtonClick = () => {
    setShowComponent(true)
  }

  const handleCreation = () => {
    console.log("Contact created!")
    addContact(formData)
    setFormData({
      fname: '',
      lname: '',
      status: ''
    })
  }

  const handleFormChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    console.log(formData)
  }
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-semibold'>Create a new contact here.</h1>
      <div className='mt-8 border border-[#cecece] mx-auto w-[30rem] rounded-md p-8 bg-white shadow-md'>
        <h1 className='font-semibold text-[#442C0C]'>Enter the contact details</h1>
        <div className="relative mx-auto w-96">
          <input
            type="text"
            className="block p-3 pt-4 w-full text-sm bg-transparent rounded-md border border-greyStroke focus:outline-none focus:border-darkGray peer mt-5"
            placeholder=" "
            name='fname'
            onChange={handleFormChange}
          />
          <label className="absolute text-sm text-[#878686] duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-1 peer-focus:text-[#3d3d3d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-2">First Name</label>
        </div>

        <div className="relative mx-auto w-80 w-96">
          <input
            type="text"
            className="block p-3 pt-4 w-full text-sm bg-transparent rounded-md border border-greyStroke focus:outline-none focus:border-darkGray peer mt-5"
            placeholder=" "
            name='lname'
            onChange={handleFormChange}
          />
          <label className="absolute text-sm text-[#878686] duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-1 peer-focus:text-[#3d3d3d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-2">Last Name</label>
        </div>

        <div className="relative mx-auto text-left text-sm py-4 flex items-center w-96">
          <label className="mx-2 font-medium">Status:</label>
          <div className='flex items-center mx-5'>

            <input
              type="radio"
              className="mx-2"
              name='status'
              value='active'
              onClick={handleFormChange}
            />
            <label>Active</label>

            <input
              type="radio"
              className="mx-2"
              name='status'
              value='inactive'
              onClick={handleFormChange}
            />
            <label>Inactive</label>
          </div>

        </div>.

        <button type='submit' onClick={handleCreation} className='bg-[#2065D1] text-white font-medium px-4 py-2 rounded-md text-sm mt-4'>
          Create Contact
        </button>
      </div>
      <button onClick={handleButtonClick} className='text-sm font-semibold bg-white border border-[#cecece] mt-4 px-4 py-2 rounded-md'>View Contact Details</button>
    </div>
  )
}

export default CreateContact