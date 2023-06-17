import NoContactFound from './NoContactFound'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

const ContactList = ({ setShowComponent }: any) => {
    const {contacts} = useSelector((state: any) => state.contacts)

    const handleClick = () => {
        setShowComponent('createContact')
    }
    
console.log(contacts);
    return (
        <div className='text-center'>
            {contacts?.length > 0 ?
                <div className='conatcts'>
                    <h1 className='text-3xl font-semibold text-center'>Here's a list of your previosuly saved contacts</h1>
                    <div className='grid grid-cols-4 gap-6 m-9'>
                        {
                            contacts?.map((contact: any, index: any) => {
                                return (
                                    <ContactCard
                                        firstName={contact.fname}
                                        lastName={contact.lname}
                                        status={contact.status}
                                        id={contact.id}
                                        contacts={contacts}
                                        key={index}
                                        setShowComponent={setShowComponent}
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
