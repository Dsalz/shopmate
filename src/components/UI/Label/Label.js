import React from "react";
import classes from "./Label.module.scss";

function Label(props) {
  const colors = {
    green: classes.green,
    orange: classes.orange
  };

  return (
    <div className={`${classes.label} ${colors[props.color]}`}>
      {props.children}
    </div>
  );
}

export default Label;
