import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./cart.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { removeProduct } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/cartSlice";
const urlBackend = "https://danilo-canuto-restaurant-app.herokuapp.com/";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
    setTimeout(clearCart, 8000);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className={classes.product}>
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className={classes.closeBtn}
                >
                  <AiOutlineClose />
                </div>
                <img
                  src={`${urlBackend}/images/${product.img}`}
                  className={classes.img}
                  alt=""
                />
                <div className={classes.productData}>
                  <h3 className={classes.title}>{product.title}</h3>
                  <div className={classes.productAndQuantity}>
                    <span className={classes.quantity}>
                      {product.quantity} x{" "}
                    </span>
                    <span className={classes.price}>
                      <span>$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className={classes.noProducts}>
              Your cart is empty. Please select your dishes or if you already
              checked out, make a new order.{" "}
            </h1>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>
            Total products: {products.length}
          </div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal: ${totalPrice}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className={classes.orderNowBtn}
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
