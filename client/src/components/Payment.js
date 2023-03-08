import React, { useState } from "react";
import classes from "./payment.module.css";
import StripeContainer from "./StripeContainer";
// import { emptyCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";

function Payment() {
  const [showItem, setShowItem] = useState(false);
  const { products } = useSelector((state) => state.cart);
  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  return (
    <div className={classes.container}>
      {showItem ? (
        <StripeContainer />
      ) : (
        <button
          className={classes.makePayment}
          onClick={() => {
            setShowItem(true);
            // clearCart();
          }}
        >
          Make Payment
        </button>
      )}
      <br />
      <span className={classes.total}>Total: ${totalPrice}</span>
    </div>
  );
}

export default Payment;
