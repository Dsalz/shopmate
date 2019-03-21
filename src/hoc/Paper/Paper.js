import PropTypes from "prop-types";
import React, { Component } from "react";
import classes from "./Paper.module.scss";

const Paper = WrappedComponent => {
  const hocComponent = class extends Component {
    render() {
      const typeClass =
        this.props.type === "square" ? classes.square : classes.full;

      const bgClass =
        this.props.bg === "blue"
          ? classes.blue
          : this.props.bg === "yellow"
          ? classes.yellow
          : "";

      const style = this.props.img
        ? { backgroundImage: `url(${this.props.img})` }
        : {};

      return (
        <div className={`${classes.paper} ${typeClass} ${bgClass}`}>
          <div style={style} className={classes.bgImage}>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
  hocComponent.defaultProps = {
    type: "full"
  };
  hocComponent.propTypes = {
    type: PropTypes.string.isRequired,
    img: PropTypes.string
  };
  return hocComponent;
};

export default Paper;
