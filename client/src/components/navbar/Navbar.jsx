import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a href="/" className={classes.title}>
            OUTER <span>DELIVERY</span>
          </a>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="/">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#restaurants">Restaurants</a>
            </li>
            <li className={classes.listItem}>
              <Link to="/create">Create</Link>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to="/cart" className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>0</div>
          </Link>
          <button className={classes.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
