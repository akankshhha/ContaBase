import { useState, useEffect } from 'react'
import { getContacts } from "../../../Services/contactService"
import NoContactFound from './NoContactFound'

import ContactCard from './ContactCard'

const ContactList = ({ setShowComponent }: any) => {
    const [contacts, setContacts] = useState<any[]>([])

    useEffect(() => {
        getContacts().then((contactList) => setContacts(contactList))
    }, [])

    const handleClick = () => {
        setShowComponent(false)
    }

    

    return (
        <div className='text-center'>
            {contacts.length > 0 ? 
                  <div className='conatcts'>
                  <h1 className='text-3xl font-semibold text-center'>Here's a list of your previosuly saved contacts</h1>
                  <div className='grid grid-cols-4 gap-6 m-9'>
                      {
                          contacts?.map((item, index) => {
                              return (
                                  <ContactCard 
                                    firstName={item.fname} 
                                    lastName={item.lname} 
                                    status={item.status} 
                                    id={item.id} 
                                    contacts={contacts} 
                                    setContacts={setContacts} 
                                    key={index}
                                     />
                              )
                          }
                          )
                      }
                  </div>
              </div>
            : <NoContactFound />}
          
            <button onClick={handleClick} className='bg-[#2065D1] text-white font-medium px-4 py-2 rounded-md text-sm mt-6'>Create New Contact</button>
        </div>
    )
}

export default ContactList