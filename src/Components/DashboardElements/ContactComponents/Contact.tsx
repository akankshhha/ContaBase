import React from "react"
import ContactList from "./ContactList"
import CreateContact from "./CreateContact"


const Contact = () => {
  const [showComponent, setShowComponent] = React.useState(true)

  return (
    <div className="p-7 m-7 h-screen flex items-center justify-center z-50">
      {showComponent ? <ContactList setShowComponent={setShowComponent}/> : <CreateContact setShowComponent={setShowComponent}/>}
    </div>
  )
}

export default Contact