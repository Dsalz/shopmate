import React from "react";
import classes from "./Menu.module.scss";

const Menu = props => {
  return (
    <nav className={`${classes.menu} ${props.className}`}>
      <ul>
        {props.links.map(link => (
          <li key={link.title}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
