import React from 'react';
import classes from './SideDrawerToggle.module.css';
import Location from '../../../../assets/icons/Location.png';

const SideDrawerToggle = ({openToogleButtonChandler}) => {

    return(
        <div className={classes.SideDrawerToggle} onClick={openToogleButtonChandler}> 
            <img src={Location} className={classes.icon} alt='logo'/>
        </div>
    )
}

export default SideDrawerToggle