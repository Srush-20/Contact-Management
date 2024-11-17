import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import { Container } from "@mui/material";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => setContacts((prevContacts) => [...prevContacts, newContact]);

  const editContact = (contactToEdit) => {
    const updatedContacts = contacts.map((contact) =>
      contact.email === contactToEdit.email ? contactToEdit : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (contactToDelete) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.email !== contactToDelete.email));
  };

  return (
    <Container>
      <ContactForm onAddContact={addContact} />
      <ContactsTable contacts={contacts} onEdit={editContact} onDelete={deleteContact} />
    </Container>
  );
};

export default App;
