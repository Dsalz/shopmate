import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BreadCrumbs.module.scss";

function BreadCrumbs(props) {
  return (
    <div className={classes.breadCrumbs}>
      {props.links.map(link => (
        <Fragment key={link.url}>
          <Link to={link.url}>{link.title}</Link>
          <span>&bull;</span>
        </Fragment>
      ))}
    </div>
  );
}

export default BreadCrumbs;
