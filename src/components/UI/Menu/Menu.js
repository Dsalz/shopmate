import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss";

const Menu = props => {
  return (
    <nav className={`${classes.menu} ${props.className}`}>
      <ul>
        {props.links.map(link => (
          <li key={link.title}>
            <NavLink exact to={link.url}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  links: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Menu;
