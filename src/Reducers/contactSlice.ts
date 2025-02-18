import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../Components/Contacts";

type Contact = {
  id: number;
  nomeCompleto: string;
  email: string;
  telefone: string | number;
};

type ContactState = {
  contacts: Contact[];
  selectedContact: Contact | null;
};

const initialState: ContactState = {
  contacts: [
    { id: 1, nomeCompleto: "Ailton dos Coco Junior", email: "adoscoco@hotmail.com", telefone: 1122334455 },
    { id: 2, nomeCompleto: "Zé das Flor e Silva", email: "zdasflor@gmail.com", telefone: 1955334499 }
  ],
  selectedContact: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      const newId = state.contacts.length ? state.contacts[state.contacts.length - 1].id + 1 : 1;
      state.contacts.push({ id: newId, ...action.payload });
    },
    selectContact: (state, action: PayloadAction<number>) => {
      const foundContact = state.contacts.find((c) => c.id === action.payload);
      state.selectedContact = foundContact || null;
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = state.contacts.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
      state.selectedContact = null;
    },
    cancelEditing: (state) => {
      state.selectedContact = null;
    },
    deleteContacts: (state, action: PayloadAction<number[]>) => {
      state.contacts = state.contacts.filter(contact => !action.payload.includes(contact.id));
    }
  },
});

export const { selectContact, updateContact, cancelEditing, addContact, deleteContacts } = contactSlice.actions;
export default contactSlice.reducer;