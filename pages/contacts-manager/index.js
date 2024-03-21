import React, { useState, useEffect } from "react";
import Layout from "./layout";
import ContactList from "./contactList";
import ContactInfo from "./contactInfo";
import AddContacts from "./addContacts";
function Contacts({ users }) {
  const [contacts, setContacts] = useState(users || []);
  const [contact, setContact] = useState(null);
  const [isAddContact, setIsAddContact] = useState(false);
  const [newContact, setNewContact] = useState(null);
  const handleContact = (contact) => {
    setContact(contact);
  };

  const saveContact = (contact) => {
    // console.log(newContact);
    setNewContact(contact);
    //setContacts(contacts.concat(newContact));
  };

  useEffect(() => {
    newContact && setContacts([...contacts, newContact]);
  }, [newContact]);

  const handleAddContact = () => {
    console.log("addContact");
    setIsAddContact(true);
  };
  console.log({ contacts });
  return (
    <Layout>
      <ContactList contacts={contacts} handleContact={handleContact} />
      {contact && (
        <ContactInfo contact={contact} handleAddContact={handleAddContact} />
      )}
      <AddContacts
        handleAddContact={handleAddContact}
        handleSaveContact={saveContact}
      />
    </Layout>
  );
}

export default Contacts;

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users");
  const { users } = await res.json();

  return {
    props: {
      users,
    },
  };
}
