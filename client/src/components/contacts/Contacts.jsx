import React from "react";
import classes from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Delivery: +303 9996-0123</h2>
        <p>outer@outer.delivery</p>
        <span>Open Tuesday - Sunday / 11:00 - 23:00</span>
      </div>
    </div>
  );
};

export default Contacts;
