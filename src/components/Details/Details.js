import React from "react";
import classes from "./Details.module.css";
import temp from "../../assets/icons/temp.png";
import wind from "../../assets/icons/wind.png";
import humidity from "../../assets/icons/humidity.png";
import pressure from "../../assets/icons/pressure.png";
import clouds from "../../assets/icons/clouds.png";
import visibility from "../../assets/icons/visibility.png";

const Details = props => {
  let feelsLikeTemp = Math.round(props.CurrentData.main.feels_like);
  let windSpeed = Math.round(props.CurrentData.wind.speed);

  return (
    <div className={classes.detailsWrapper}>
      <div className={classes.detailsDescription}>
        <p>DETAILS</p>
        <div className={classes.hline}></div>
      </div>

      <div className={classes.detailsItemsWrapper}>
        <div className={classes.ItemsRow1}>
          <div className={classes.detailsItem}>
            <img src={temp} alt="temperature icon" />
            <p className={classes.description}>Feels Like</p>
            <p className={classes.value}>{feelsLikeTemp}&deg;</p>
          </div>

          <div className={classes.detailsItem}>
            <img src={wind} alt="wind icon" />
            <p className={classes.description}>Wind</p>
            <p className={classes.value}>{windSpeed} m/s</p>
          </div>

          <div className={classes.detailsItem}>
            <img src={humidity} alt="humidity icon" />
            <p className={classes.description}>Humidity</p>
            <p className={classes.value}>{props.CurrentData.main.humidity} %</p>
          </div>
        </div>

        <div className={classes.ItemsRow2}>
          <div className={classes.detailsItem}>
            <img src={pressure} alt="pressure icon" />
            <p className={classes.description}>Pressure</p>
            <p className={classes.value}>
              {props.CurrentData.main.pressure} hPa
            </p>
          </div>

          <div className={classes.detailsItem}>
            <img src={clouds} alt="clouds icon" />
            <p className={classes.description}>Clouds</p>
            <p className={classes.value}>{props.CurrentData.clouds.all} %</p>
          </div>

          <div className={classes.detailsItem}>
            <img src={visibility} alt="visibility icon" />
            <p className={classes.description}>Visibility</p>
            <p className={classes.value}>{props.CurrentData.visibility} m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
