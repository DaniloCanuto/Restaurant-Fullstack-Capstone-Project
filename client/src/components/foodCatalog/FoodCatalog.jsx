import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./foodCatalog.module.css";
import { useEffect } from "react";
const urlBackend = "https://danilo-canuto-restaurant-app.herokuapp.com/";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await fetch(
        `${urlBackend}/product?category=${foodEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setFilteredFoods(data);
    };
    fetchFoodType();
  }, [foodEndpoint, token]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && (
          <h2 className={classes.title}>The best {foodEndpoint}</h2>
        )}
        <div className={classes.foods}>
          {filteredFoods.length !== 0 ? (
            filteredFoods.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
                <div className={classes.imgContainer}>
                  <img
                    src={`${urlBackend}images/${f?.img}`}
                    className={classes.foodImg}
                    alt=""
                  />
                </div>
                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{f?.title}</h4>
                  <span className={classes.price}>
                    <span>$</span> {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <span className={classes.noQuantity}></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
