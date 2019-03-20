import React from "react";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
      </ul>
    </nav>
  );
};

export default Menu;
