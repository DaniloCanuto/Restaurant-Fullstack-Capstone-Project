import React from "react";
import { foodTypes } from "../../data/data";
import { Link } from "react-router-dom";
import classes from "./foods.module.css";

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.subtitle}>Restaurant</h2>
        <h4 className={classes.title}>Menus</h4>
        <div className={classes.foods}>
          {foodTypes.map((foodType) => (
            <Link
              to={`/foods/${foodType.name}`}
              key={foodType.id}
              className={classes.food}
            >
              <div className={classes.imgContainer}>
                <img src={foodType.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
