import PropTypes from "prop-types";
import React from "react";
import Label from "../Label/Label";
import classes from "./ImageWithLabel.module.scss";

function ImageWithLabel(props) {
  return (
    <div className={classes.imageWithLabel}>
      <Label color={props.labelColor}>{props.label}</Label>
      <img src={props.img} alt={props.title} />
    </div>
  );
}

ImageWithLabel.propTypes = {
  img: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

ImageWithLabel.defaultProps = {
  labelColor: "green"
};

export default ImageWithLabel;
