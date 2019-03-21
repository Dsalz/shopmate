import PropTypes from "prop-types";
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

Label.propTypes = {
  color: PropTypes.string
};
Label.defaultProps = {
  color: "green"
};

export default Label;
