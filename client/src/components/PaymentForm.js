import { CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import classes from "./paymentForm.module.css";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/cartSlice";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "red" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#87bbfd",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className={classes.formGroup}>
            <div className={classes.formRow}>
              <CardElement className={classes.element} options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button
            className={classes.pay}
            onClick={() => {
              clearCart();
            }}
          >
            Pay
          </button>
        </form>
      ) : (
        <div>
          <h2>Your order has been placed and paid successfully!</h2>
          <h3>Your delivery will arrive between 35 and 50 minutes</h3>
          <p>The cart and the price have been cleared</p>
        </div>
      )}
    </>
  );
}
