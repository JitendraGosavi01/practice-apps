import React, { useState, useRef } from "react";
import classes from "./layout.module.css";
function AddContacts({ handleSaveContact }) {
  const [isAddContact, setIsAddContact] = useState(false);
  const [image, setImage] = useState("");

  const contactFormRef = useRef();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    maidenName: "",
    lastName: "",
    phone: "",
    email: "",
    address: {
      address: "",
      state: "",
      city: "",
      postalCode: "",
    },
    image: "",
  });
  const handleAddContact = () => {
    setIsAddContact(!isAddContact);
  };

  const resetForm = () => {
    contactFormRef.current.reset();
    setIsAddContact(!isAddContact);
    setUserInfo({});
  };
  const handleInputChange = (value, field) => {
    if (field === "image") {
      setImage(URL?.createObjectURL(value));
    }

    if (
      field === "state" ||
      field === "city" ||
      field === "postalCode" ||
      field === "address"
    ) {
      setUserInfo({ ...userInfo, ["address"]: { [field]: value } });
    } else {
      setUserInfo({
        ...userInfo,
        [field]: field === "image" ? URL?.createObjectURL(value) : value,
      });
    }
  };

  const handleSave = () => {
    handleSaveContact(userInfo);
    contactFormRef.current.reset();
    setIsAddContact(false);
    setUserInfo({});
  };

  const renderAddContact = () => (
    <div className={classes["add-contact-modal"]}>
      <div className={classes["add-contact-modal-header"]}>
        Contact Information
      </div>
      <div className={classes["add-contact-modal-content"]}>
        <form action="" id="contact-form" ref={contactFormRef}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="First Name"
              value={userInfo?.firstName}
              onChange={(e) => handleInputChange(e.target.value, "firstName")}
            />
            <input
              type="text"
              placeholder="Middle Name"
              value={userInfo?.maidenName}
              onChange={(e) => handleInputChange(e.target.value, "maidenName")}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={userInfo?.lastName}
              onChange={(e) => handleInputChange(e.target.value, "lastName")}
            />
          </div>
          <div className={classes["contact-form-column2"]}>
            <input
              type="phone"
              placeholder="Phone no..."
              value={userInfo?.phone}
              onChange={(e) => handleInputChange(e.target.value, "phone")}
            />
            <input
              type="email"
              placeholder="Email ID..."
              value={userInfo?.email}
              onChange={(e) => handleInputChange(e.target.value, "email")}
            />
          </div>
          <div className={classes["contact-form-column2"]}>
            <textarea
              name=""
              id=""
              cols="60"
              rows="5"
              onChange={(e) => handleInputChange(e.target.value, "address")}
            >
              {userInfo?.address?.address}
            </textarea>
          </div>
          <div className={classes["contact-form-column2"]}>
            <input
              type="text"
              placeholder="City..."
              value={userInfo?.address?.city}
              onChange={(e) => handleInputChange(e.target.value, "city")}
            />
            <input
              type="text"
              placeholder="State..."
              value={userInfo?.address?.state}
              onChange={(e) => handleInputChange(e.target.value, "state")}
            />
          </div>
          <div className={classes["contact-form-column2"]}>
            <input
              type="text"
              placeholder="Postal Code..."
              value={userInfo?.address?.postalCode}
              onChange={(e) => handleInputChange(e.target.value, "postalCode")}
            />
            <input
              type="text"
              placeholder="State..."
              value={userInfo?.address?.state}
              onChange={(e) => handleInputChange(e.target.value, "state")}
            />
          </div>
          <div className={classes["contact-form-column2"]}>
            <input
              type="file"
              placeholder="Profile pic"
              accept="image/*"
              onChange={(e) => handleInputChange(e.target.files[0], "image")}
            />
            {/* <div className={classes["info-image-container"]}> */}
            <img src={image} height="200px" width="auto" />
            {/* </div> */}
          </div>
        </form>
      </div>
      <div className={classes["add-contact-modal-footer"]}>
        <button onClick={handleSave}>Save</button>
        <button onClick={(e) => resetForm()}>Cancel</button>
      </div>
    </div>
  );
  return (
    <div>
      <div className={classes["add-contact"]} onClick={handleAddContact}>
        <i
          class="fa-solid fa-plus fa-2xl"
          title="Add Contact"
          style={{ color: "#7b2af4" }}
        ></i>
      </div>

      {isAddContact && renderAddContact()}
    </div>
  );
}

export default AddContacts;
