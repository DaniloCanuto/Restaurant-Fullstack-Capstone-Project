import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import foodDelivery from "../../assets/images/delivery1.jpg";

const Hero = () => {
  return (
    <section
      style={{ height: "200vh" }}
      id="home"
      className={classes.container}
    >
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>
            Enjoy the best food in the comfort of your home!!!
          </h2>
          <p className={classes.msg}>
            At <span>OUTER</span>, we pride ourselves in making{" "}
            <span>super fast deliveries</span>, while handling your meal with{" "}
            <span>extreme care</span>.
          </p>
          <div className={classes.buttons}>
            <button className={classes.restButtons}>
              <a href="#foods">
                Choose a restaurant
                <AiOutlineArrowDown />
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={foodDelivery} alt="" className={classes.foodDelivery} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
