import React, { Component } from "react";
import ForecastHour from "../Forecast/ForecastHour/ForecastHour";
import ForecastDays from "../Forecast/ForecastDays/ForecastDays";
import classes from "./Forecast.module.css";

class Forecast extends Component {
  render() {
    let { CityForecastDataList, cityLoaded } = this.props;
    let firstHoursData;
    let forecastData;
    let currentHour;
    let nextDays1400Tab;
    let formattedTime;
    let minutes;
    let hours;
    let unixTimeStamp;
    let dayOfWeek;
    const weekDaysNames = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

    if (cityLoaded) {
      let nextHours = [
        CityForecastDataList[1],
        CityForecastDataList[2],
        CityForecastDataList[3],
        CityForecastDataList[4],
        CityForecastDataList[5]
      ];

      nextDays1400Tab = CityForecastDataList.map(day => {
        unixTimeStamp = new Date(day.dt * 1000);
        hours = unixTimeStamp.getHours();
        minutes = "0" + unixTimeStamp.getMinutes();
        dayOfWeek = unixTimeStamp.getDay();
        formattedTime = hours + minutes;

        if (formattedTime === "1400") {
          return (
            <ForecastDays
              key={day.dt}
              dayOfWeek={weekDaysNames[dayOfWeek]}
              icon={day.weather[0].icon}
              temp={day.main.temp}
            />
          );
        }
      });

      firstHoursData = nextHours.map(hour => {
        currentHour = hour.dt_txt.substring(11, 16);
        return (
          <ForecastHour
            key={hour.dt}
            hour={currentHour}
            temp={hour.main.temp}
            clouds={hour.clouds.all}
            icon={hour.weather[0].icon}
          />
        );
      });

      forecastData = (
        <div className={classes.nextHoursDescription}>
          <div className={classes.description}>
            <p>NEXT HOURS</p>
            <div className={classes.hline}></div>
          </div>

          <div className={classes.forecastHour}>{firstHoursData}</div>

          <div className={classes.description}>
            <p>NEXT DAYS</p>
            <div className={classes.hline}></div>
          </div>

          <div className={classes.forecastDays}>{nextDays1400Tab}</div>
        </div>
      );
    }

    return (
      <div>
        <div className={classes.forecastDaysContainer}>{forecastData}</div>
      </div>
    );
  }
}

export default Forecast;
