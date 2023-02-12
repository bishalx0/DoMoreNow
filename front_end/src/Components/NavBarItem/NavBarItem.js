import React , {useRef} from 'react';
import classes from './NavBarItem.module.css';

import {Link} from 'react-router-dom';

const NavBarItem = (props) => {
  const navRef = useRef(null);
  return (
    // <Link to={props.link} style={{textDecoration:'none'}}>
    <h3 ref={navRef} className={classes.navbarItem} onClick={props.onClick} style={props.textStyle}>{props.item}</h3>
    // </Link>
  )
}
                  
export default NavBarItem;
