import React from 'react';
import classes from './SiteDisabler.module.css';

const SiteDisabler = () => {
    return (
        <div className={classes.siteDisablerContainer}>
            <h1>This is for site disabler</h1>
            <h2>Enter site names to be blocked when you are on focus mode</h2>
        </div>
    )
}

export default SiteDisabler;
