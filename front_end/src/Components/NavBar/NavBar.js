import React from "react";
import "./navbar.css";

import NavBarItem from "../NavBarItem/NavBarItem";

const NavBar = (props) => {
  return (
    <div>
      <div className="navbar">
        {/* navbar items */}
        <NavBarItem item="Todo" link="/todo" />
        <NavBarItem item="Pomodoro" link="/pomodoro" />
        <NavBarItem item="Routine+" link="/routine" />
      </div>
    </div>
  );
};

export default NavBar;
