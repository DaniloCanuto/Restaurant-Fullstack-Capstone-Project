import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MW983EuZ6ucSFVLh5x6GGfHostjjteegaMXjt02wr2E1MgN2qeQAZA3w6QWyNvCktwb1wiPOdXOLnjUobaP2xRT00shJxD91c";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
