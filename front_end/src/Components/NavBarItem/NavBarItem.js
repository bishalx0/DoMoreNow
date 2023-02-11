import React from 'react';
import classes from './NavBarItem.module.css';

import {Link} from 'react-router-dom';

const NavBarItem = (props) => {
  return (
    // <Link to={props.link} style={{textDecoration:'none'}}>
    <h3 className={classes.navbarItem} onClick={props.onClick} style={props.textStyle}>{props.item}</h3>
    // </Link>
  )
}
                  
export default NavBarItem;
