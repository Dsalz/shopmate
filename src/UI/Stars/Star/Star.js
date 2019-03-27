import React from "react";
import classes from "./Star.module.scss";

function Star(props) {
  let starType = classes.star + " ";
  starType += props.type === "full" ? classes.full : classes.half;

  return <span className={starType} />;
}

export default Star;
