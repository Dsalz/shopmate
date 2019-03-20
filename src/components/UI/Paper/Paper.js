import React, { Component } from "react";
import classes from "./Paper.module.scss";

const Paper = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div className={classes.paper}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default Paper;
