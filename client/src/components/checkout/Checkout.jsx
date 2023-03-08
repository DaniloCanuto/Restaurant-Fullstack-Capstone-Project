import React from "react";
import { useSelector } from "react-redux";
import Payment from "../Payment.js";
import classes from "./checkout.module.css";

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);
  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Payment />
      </div>
    </div>
  );
};

export default Checkout;
