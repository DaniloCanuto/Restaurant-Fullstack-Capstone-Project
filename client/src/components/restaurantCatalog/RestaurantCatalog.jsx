import React from "react";
import { restaurants } from "../../data/data";
import { Link } from "react-router-dom";
import classes from "./restaurantCatalog.module.css";

const RestaurantCatalog = () => {
  return (
    <section id="restaurants" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Menus</h4>
        <h2 clasName={classes.title}>Restaurants</h2>
        <div className={classes.plates}>
          {restaurants.map((restaurant) => (
            <Link to={`/restaurantCatalog/${restaurants}`}></Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantCatalog;
