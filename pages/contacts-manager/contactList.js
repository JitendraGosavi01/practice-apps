import { useState } from "react";
import classes from "./layout.module.css";
function ContactList({ contacts, handleContact }) {
  const [contactList, setContactList] = useState(contacts);

  const handleContactClick = (contact) => {
    handleContact(contact);
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (e.target.value)
  //     setContactList(contactList?.find((ele) => ele.fname === e.target.value));
  // };

  const renderInitials = (contact) => {
    let initials =
      contact.firstName[0].toUpperCase() + contact.lastName[0].toUpperCase();
    return initials;
  };
  return (
    <div className={classes["contact-sidebar"]}>
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <label for="searchContact">Search</label>
          <input
            class="form-control mr-sm-2"
            type="input"
            placeholder="Search..."
            aria-label="Search"
            id="searchContact"
            // onChange={handleSearch}
          />
        </form>
      </nav>
      <div className={classes["contact-list"]}>
        {contacts?.map((contact) => (
          <div
            className={classes["contact-list-item"]}
            onClick={(e) => handleContactClick(contact)}
            // onMouseOver={(e) => handleContactClick(contact)}
            key={contact.id}
          >
            <div className={classes["contact-list-image"]}>
              {contact.image ? (
                <img src={contact?.image} alt="" height="20px" width="20px" />
              ) : (
                renderInitials(contact)
              )}
            </div>
            <div className={classes["contact-list-name"]}>
              {contact.firstName} &nbsp;
              {contact.lastName}
              <div className={classes["contact-list-item-phone"]}>
                {contact.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
