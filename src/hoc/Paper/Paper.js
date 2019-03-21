import PropTypes from "prop-types";
import React, { Component } from "react";
import classes from "./Paper.module.scss";

const Paper = WrappedComponent => {
  const hocComponent = class extends Component {
    render() {
      const typeClass =
        this.props.type === "square" ? classes.square : classes.full;

      const bgClass = this.props.bg === "blue" ? classes.blue : classes.gray;

      return (
        <div className={`${classes.paper} ${typeClass} ${bgClass}`}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
  hocComponent.defaultProps = {
    type: "full"
  };
  hocComponent.propTypes = {
    type: PropTypes.string.isRequired
  };
  return hocComponent;
};

export default Paper;
