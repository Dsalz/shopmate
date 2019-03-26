import React from "react";
import { Link } from "react-router-dom";
import classes from "./BreadCrumbs.module.scss";

function BreadCrumbs(props) {
  return (
    <div className={classes.breadCrumbs}>
      {props.links.map(link => (
        <>
          <Link to={link.url} key={link.url}>
            {link.title}
          </Link>
          <span>&bull;</span>
        </>
      ))}
    </div>
  );
}

export default BreadCrumbs;
