import React from "react";
import classes from "./Toolbar.module.css";

const Toolbar = ({ cityLoaded, currentCityName, currentDataDt }) => {
  const weekDaysNames = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  let toolbar;

  let unixTimeStamp = new Date(currentDataDt * 1000);
  let hours = unixTimeStamp.getHours();
  let minutes = ":" + unixTimeStamp.getMinutes();
  let time = hours + minutes;
  let dayOfWeek = weekDaysNames[unixTimeStamp.getDay()];

  if (cityLoaded) {
    toolbar = (
      <header>
        <div className={classes.container}>
          <p className={classes.currentCityName}>{currentCityName}</p>
          <p className={classes.currentDay}>
            {dayOfWeek} {time}
          </p>
        </div>
      </header>
    );
  } else {
    toolbar = <div className={classes.emptyToolbar}></div>;
  }

  return <div>{toolbar}</div>;
};

export default Toolbar;
