import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            { id: 1, fname: 'Akanksha', lname: 'S', status: 'active' },
            { id: 2, fname: 'Prajwal', lname: 'N', status: 'inactive' },
            { id: 3, fname: 'Monkey', lname: 'D Luffy', status: 'inactive' },
        ],
        contact: {
            fname: '',
            lname: '',
            status: ''
        }
    },

    reducers: {  
        selectedContact: (state, action) => {
            console.log(state);
            let item = JSON.parse(JSON.stringify(state))
            state.contact = state.contacts.find((c) => c.id === action.payload.id)
        },

        addNewContact: (state, action) => {
            const newContact = {
                id: Date.now(),
                fname: action.payload.fname,
                lname: action.payload.lname,
                status: action.payload.status,
            }
            state.contacts.push(newContact)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((c) => c.id !== action.payload.id)
            console.log(state.contacts);
        },
 
        updateContact: (state, action) => {
            state.contacts = state.contacts((c) => c.id === action.payload.id ? action.payload : c)
        }
    }
})

export const { addNewContact, deleteContact, updateContact, selectedContact } = contactsSlice.actions

export default contactsSlice.reducer

