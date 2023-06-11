export const getContacts = async () => {
    try {
        const doctors = await fetch("http://localhost:8000/contacts")
        return await doctors.json()
    } catch {
        console.log("Error fetching contacts.");
    }
    
}

export const addContact = async (contactDetails:any) => {
    try {
        const postContact = await fetch("http://localhost:8000/contacts", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactDetails)
        })
        if(postContact.ok) console.log("Contact added successfully!");
        else console.log("Error creating contact.");
    }
    catch {
        console.log("Error posting contact to the contacts array - message from service file")
    }
}

export const deleteContact = async (id:any) => {
    try {
        console.log(id)
        const deleteContact = await fetch(`http://localhost:8000/contacts/${id}` , {
            method: 'DELETE'
        })
        if(deleteContact.ok) console.log("Contact deleted successfully!");
        else console.log("Error deleting contact.");
    } catch {
        console.log("Error deleting contact from the contacts array - message from service file")
    }
    }
