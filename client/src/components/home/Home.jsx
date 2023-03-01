import React from "react";
import Hero from "../hero/Hero";
import classes from "./home.module.css";
import img1 from "../../assets/images/team.jpg";
import img2 from "../../assets/images/moto-girl.jpg";
import img3 from "../../assets/images/friendly.jpg";
import Foods from "../foods/Foods";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitles}></span>
            <h2 className={classes.deliveryTitle}>Always on time!!!</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={img1} alt="" className={classes.firstImg} />
              <h3>The best delivery team!!!</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={img2} alt="" className={classes.secondImg} />
              <h3>Work, work, work!!!</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={img3} alt="" className={classes.thirdImg} />
              <h3>Friendly and Polite</h3>
            </div>
          </div>
        </div>
        <Foods />
      </div>
    </div>
  );
};

export default Home;
