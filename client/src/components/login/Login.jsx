import React from "react";
import { useState } from "react";
import classes from "./login.module.css";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/woman-eating.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {};

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
