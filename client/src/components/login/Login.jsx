import React from "react";
import { useState } from "react";
import classes from "./login.module.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/delivery.jpg";
import { login } from "../../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        headers: {
          "Content-Type": "application.json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      dispatch(login(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} className={classes.leftImg} alt="" />
        </div>

        <div className={classes.loginRightSide}></div>
        <form onSubmit={handleLogin} className={classes.loginForm}>
          <h2 className={classes.title}>Login</h2>
          <input
            type="email"
            placeholder="Type email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Type password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={classes.submitBtn}>Login</button>
          <p>
            Not registered on Outer yet?{" "}
            <Link to="/signup">Create Account</Link>
          </p>
        </form>
        {error && (
          <div className={classes.errorMessage}>
            Account information incorrect! Please, try again...
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
