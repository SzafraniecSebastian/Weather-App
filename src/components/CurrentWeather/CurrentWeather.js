import React, {Component} from 'react';
import classes from './CurrentWeather.module.css';
import Details from '../Details/Details'

class CurrentWeather extends Component {
    render(){

        const images = require.context('../../assets/icons/weatherIcons', true);
            
            let temp = Math.round(this.props.CityWeatherMain.temp)

            let currentWeather

            if (this.props.cityLoaded) {

                let img = images(`./${this.props.currentCityWeather_0.icon}@2x.png`);

                currentWeather = <div className={classes.wrapper}>

                    <div className={classes.currentWeather}>

                        <div className={classes.imgMainWrapper}>
                            <div>
                                <img src={img} alt='logo'/>
                            </div>

                            <div className={classes.main}>
                                {this.props.currentCityWeather_0.main}
                            </div>
                        </div>

                        <div className={classes.temp}>
                            {temp}&deg;
                        </div>

                        <Details CurrentData={this.props.CurrentData}/>

                    </div>
                </div>
            }
            
        return (
            <div>
                {currentWeather}
            </div>
        )
    }
}

export default CurrentWeather