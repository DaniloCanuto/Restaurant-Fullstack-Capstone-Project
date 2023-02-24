import React from "react";
import { restaurants } from "../../data/data";
import { Link } from "react-router-dom";
import classes from "./restaurantCatalog.module.css";

const RestaurantCatalog = () => {
  return (
    <section id="restaurants" className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.subtitle}>Restaurants</h2>
        <h4 className={classes.title}>Menus</h4>
        <div className={classes.plates}>
          {restaurants.map((restaurant) => (
            <Link
              to={`/restaurantCatalog/${restaurants.name}`}
              key={restaurant.id}
              className={classes.plates}
            >
              {/* <h4>{restaurant.name}</h4> */}
              <div className={classes.imgContainer}>
                <img src={restaurant.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantCatalog;
