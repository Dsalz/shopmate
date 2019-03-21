import React from "react";
import BannerWithPaper from "../BannerWithPaper/BannerWithPaper";
import classes from "./SquareBanner.module.scss";

const SquareBanner = props => {
  return (
    <BannerWithPaper type="square" bg="blue">
      <div className={classes.title}>{props.title}</div>
      <div className={classes.description}>{props.children}</div>
    </BannerWithPaper>
  );
};

export default SquareBanner;
