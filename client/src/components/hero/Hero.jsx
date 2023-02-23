import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import foodDelivery from "../../assets/images/original-combo.jpg";
import motoDelivery from "../../assets/images/moto.png";

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
          <p className={classes.msgOne}>
            All your <span>favorite restaurants</span> in one place!!!
          </p>
          <p className={classes.msgTwo}>
            Dishes from all over the world!!!
            <span> Mexico, Italy, France, Brazil</span>...
          </p>
          <img
            src={motoDelivery}
            alt="motorcycle delivery icon"
            className={classes.motoDelivery}
          />
          <p className={classes.msg}>
            At <span>OUTER</span>, we pride ourselves in making{" "}
            <span>super fast deliveries</span>, while handling your meal with{" "}
            <span>care</span>.
          </p>
          <div className={classes.buttons}>
            <button className={classes.orderButton}>Order Now!</button>
            <button className={classes.restButtons}>
              <a href="#restaurants">
                Choose your favorite restaurant
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
