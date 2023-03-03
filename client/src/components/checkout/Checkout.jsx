import React from "react";
import { useSelector } from "react-redux";
import classes from "./checkout.module.css";

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);
  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order has been placed</h2>
        <h3>Your delivery will arrive between 35 and 50 minutes</h3>
        <p>The cart and the price will be cleared shortly</p>
        <span>Total Price: {totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
