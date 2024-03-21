import React from "react";
import classes from "./layout.module.css";
function ContactInfo({ contact }) {
  return (
    <div className={classes["info-container"]}>
      <div className={classes["info-image-container"]}>
        <img src={contact?.image} height="200px" width="auto" />
      </div>
      <div className={classes["info-details-container"]}>
        <div id="name" className={classes["contact-name"]}>
          {contact?.firstName} &nbsp; {contact?.lastName}
        </div>
        <div id="contact-no" className={classes["contact-no"]}>
          <i class="fa-solid fa-phone">&nbsp;&nbsp;</i>
          {contact?.phone}
        </div>
        <div className={classes["info-details-contact-icons"]}>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-regular fa-message"></i>
          <i class="fa-regular fa-envelope"></i>
        </div>
        <address>
          <i class="fa-solid fa-location-pin">&nbsp;&nbsp;&nbsp;</i>
          {contact?.address?.address}
          <br />
          {contact?.address?.city} {contact?.address?.postalCode}
          <br />
          {contact?.address?.state}
          <br />
        </address>
      </div>
    </div>
  );
}

export default ContactInfo;
