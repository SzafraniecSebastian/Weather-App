import React from "react";
import classes from "./ForecastHour.module.css";
import temp_icon from "../../../assets/icons/temp.png";

const ForecastDay = ({ icon, temp, hour, clouds }) => {
  const images = require.context("../../../assets/icons/weatherIcons", true);
  let img = images(`./${icon}@2x.png`);
  let clouds_icon = images(`./04d@2x.png`);
  let tempRounded = Math.round(temp);

  return (
    <div className={classes.wrapper}>
      <div className={classes.hourLeft}>
        <div>{hour}</div>

        <div>
          <img src={img} className={classes.icon} alt="weather_icon" />
        </div>
      </div>

      <div className={classes.hourRigth}>
        <div>
          <img src={temp_icon} className={classes.tempIcon} alt="temp_icon" />
        </div>
        <div>{tempRounded}&deg; </div>

        <div>
          <img src={clouds_icon} className={classes.icon} alt="clound_icon" />
        </div>
        <div>{clouds} % </div>
      </div>
    </div>
  );
};

export default ForecastDay;
