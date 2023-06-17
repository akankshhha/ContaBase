import React from "react"
import ContactList from "./ContactList"
import CreateContact from "./CreateContact"
// import UpdateContact from './UpdateContact'


const Contact = () => {
  const [showComponent, setShowComponent] = React.useState('contactList')

  return (
    <div className="p-7 m-7 h-screen flex items-center justify-center z-50">
      {
        showComponent === 'contactList' ? <ContactList setShowComponent={setShowComponent} />
          : showComponent === 'createContact' ? <CreateContact setShowComponent={setShowComponent} />
            // : showComponent === 'updateContact' ? <UpdateContact setShowComponent={setShowComponent}/> 
            : ''
      }
    </div>
  )
}

export default Contact