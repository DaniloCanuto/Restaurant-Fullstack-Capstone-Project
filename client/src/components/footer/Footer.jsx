import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <h5 className={classes.contact}>
          {" "}
          Delivery: +303 9996-0123 / outer@outer.delivery
        </h5>
        <ul className={classes.iconList}>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <AiFillTwitterCircle />
          </li>
        </ul>
        <h5 className={classes.contact}> Tueday - Sunday / 11:00 - 23:00</h5>
      </div>
    </section>
  );
};

export default Footer;
