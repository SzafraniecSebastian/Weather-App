import React from "react";
import classes from "./SideDrawer.module.css";
import magnifier from "../../../assets/icons/Magnifier.png";

const sideDrawer = ({ open, city, handleChangeCity, getCityWeather }) => {
  let attachedClasses = [classes.sideDrawer, classes.closed];
  if (open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  return (
    <div className={attachedClasses.join(" ")}>
      <form>
        <label className={classes.input}>
          <input
            type="text"
            placeholder="Type city name..."
            value={city}
            onChange={handleChangeCity}
          ></input>
        </label>
        <div
          className={classes.submitBtn}
          type="button"
          value="submit"
          onClick={getCityWeather}
        >
          <img
            className={classes.magnifierIcon}
            src={magnifier}
            alt="magnifier"
          />
        </div>
      </form>
    </div>
  );
};

export default sideDrawer;
