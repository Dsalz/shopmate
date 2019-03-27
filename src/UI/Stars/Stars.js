import React from "react";
import { starSize } from "../../propsValidation";
import Star from "./Star/Star";
import classes from "./Stars.module.scss";

function Stars(props) {
  const stars = [];
  for (let i = 0; i < props.size; i++) {
    stars.push(<Star key={i} type="full" />);
  }
  for (let i = props.size; i < 5; i++) {
    stars.push(<Star key={i} type="half" />);
  }

  return <div className={classes.stars}>{stars}</div>;
}

Stars.propTypes = {
  size: starSize
};

export default Stars;
