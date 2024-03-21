import React from "react";
import classes from "./layout.module.css";
function Layout({ children }) {
  return (
    <div>
      <div className={classes["header"]}>
        <i
          class="fa-solid fa-address-book fa-2xl"
          style={{ color: "#ffffff", paddingLeft: "2%" }}
        ></i>
        <span className={classes["brand-name"]}>Contact Manager</span>
      </div>
      <div className={classes["contact"]}>{children}</div>
      <div
        className={classes["footer"]}
        style={{ color: "#ffffff", justifyContent: "center" }}
      >
        &copy;
        {new Date().getFullYear()} &nbsp;
        <small style={{ color: "#ffffff" }}>Contact Manager Pvt. Ltd.</small>
      </div>
    </div>
  );
}

export default Layout;
