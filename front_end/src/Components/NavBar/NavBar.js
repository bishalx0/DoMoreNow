import React from 'react';
import classes from './NavBar.module.css';

import NavBarItem from '../NavBarItem/NavBarItem';

const NavBar = (props) => {
    return(
        <div className={classes.navbar}>
            {/* navbar items */}
            <NavBarItem item="Todo" link='/todo' />
            <NavBarItem item="Pomodoro" link='/pomodoro' />
            <NavBarItem item="Routine+" link='/routine' />
        </div>
    );
}

export default NavBar;