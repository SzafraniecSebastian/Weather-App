import React, { Component } from "react";
import axios from "../../axiosCities";
import { Route, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import SideDrawerToggle from "../../components/Navigation/SideDrawer/SideDrawerToggle/SideDrawerToggle";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Forecast from "../../components/Forecast/Forecast";
import classes from "./Root.module.css";
import SwipeableRoutes from "react-swipeable-routes";

class Root extends Component {
  state = {
    cityLoaded: false,
    city: "",
    currentCityName: "",
    currentCityCountry: "",
    cityWeatherMain: "",
    cityWeatherWind: "",
    cityWeatherClound: "",
    cityForecastDataList: "",
    currentCityWeather_0: "",
    currentData: "",
    isSideDrawerInputOpen: true
  };

  getCityWeather = () => {
    const { city } = this.state;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_APPID}`
      )
      .then(forecast => {
        this.setState({
          cityForecastDataList: forecast.data.list
        });
        return axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APPID}`
        );
      })

      .then(weather => {
        const { name, sys, main, wind, clouds } = weather.data;

        this.setState({
          currentCityWeather_0: weather.data.weather[0],
          currentCityName: name,
          currentCityCountry: sys.country,
          cityWeatherMain: main,
          cityWeatherWind: wind,
          cityWeatherClound: clouds,
          currentData: weather.data,
          cityLoaded: true
        });
        return axios.get(
          `https://tile.openweathermap.org/map/clouds_new/10/19/50.png?appid=${process.env.REACT_APP_APPID}`
        );
      })
      .catch(error => alert("Wrong city name"));

    this.setState({
      isSideDrawerInputOpen: false
    });

    setTimeout(this.interv, 1800000);
  };

  interv = () => setInterval(this.getCityWeather(), 1800000);

  handleChangeCity = e => {
    this.setState({ city: e.target.value });
  };

  openToogleButtonChandler = () => {
    this.setState(prevState => {
      return { isSideDrawerInputOpen: !prevState.isSideDrawerInputOpen };
    });
  };

  render() {
    const {
      currentCityCountry,
      currentCityName,
      cityLoaded,
      currentCityWeather_0,
      cityWeatherMain,
      cityWeatherWind,
      cityWeatherClound,
      currentData,
      isSideDrawerInputOpen,
      city,
      cityForecastDataList
    } = this.state;

    let weatherDataClasses = [
      classes.weatherDataWrapper,
      classes.backgroundClear
    ];

    switch (this.state.currentCityWeather_0.main) {
      case "Clouds":
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundCloudy
        ];
        break;

      case "Clear":
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundClear
        ];
        break;

      case "Snow":
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundSnow
        ];
        break;

      case "Rain":
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundRain
        ];
        break;

      case "Drizzle":
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundDrizzle
        ];
        break;

      case "Thunderstorm":
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundThunderstorm
        ];
        break;

      default:
        weatherDataClasses = [
          classes.weatherDataWrapper,
          classes.backgroundClear
        ];
    }

    return (
      <BrowserRouter>
        <div className={classes.mainWrapper}>
          <div className={weatherDataClasses.join(" ")}>
            <Toolbar
              cityLoaded={cityLoaded}
              currentCityName={currentCityName}
              currentDataDt={currentData.dt}
            />

            <SideDrawerToggle
              openToogleButtonChandler={this.openToogleButtonChandler}
            />

            <div className={classes.forecastButtons}>
              <header className={classes.menu}>
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/" exact activeStyle={{ fontWeight: "700" }}>
                        Current Weather
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/forecast"
                        exact
                        activeStyle={{ fontWeight: "700" }}
                      >
                        Forecast
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </header>
            </div>

            <SideDrawer
              open={isSideDrawerInputOpen}
              handleChangeCity={this.handleChangeCity}
              city={city}
              getCityWeather={this.getCityWeather}
              handleKeyPress={this.handleKeyPress}
            />

            <SwipeableRoutes>
              <Route
                exact
                path="/"
                render={props => (
                  <CurrentWeather
                    {...props}
                    cityLoaded={cityLoaded}
                    currentCityWeather_0={currentCityWeather_0}
                    currentCityName={currentCityName}
                    currentCityCountry={currentCityCountry}
                    CityWeatherMain={cityWeatherMain}
                    CityWeatherWind={cityWeatherWind}
                    CityWeatherClound={cityWeatherClound}
                    CurrentData={currentData}
                  />
                )}
              />

              <Route
                path="/forecast"
                render={props => (
                  <Forecast
                    {...props}
                    cityLoaded={cityLoaded}
                    CityForecastDataList={cityForecastDataList}
                  />
                )}
              />
            </SwipeableRoutes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
