import React from 'react'
import classes from './ForecastDays.module.css'

const ForecastDays = ({dayOfWeek, icon, temp}) =>{

    const allWeatherIconsDirectory = require.context('../../../assets/icons/weatherIcons', true);
    let img = allWeatherIconsDirectory(`./${icon}@2x.png`);

    let tempRounded = Math.round(temp)

    return(
        <div className={classes.wrapper}>
          
                <div>{dayOfWeek}</div>
  
                <div className={classes.iconWrapper}>                            
                    <img src={img} className={classes.icon} alt='logo'/>
                </div>         
                           
                <div>{tempRounded}&deg; </div>

                {/* <div>{clouds} % </div>  */}
           
        </div>
    )
}

export default ForecastDays