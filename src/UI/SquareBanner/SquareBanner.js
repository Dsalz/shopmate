import React from "react";
import BannerWithPaper from "../BannerWithPaper/BannerWithPaper";
import Title from "../Title/Title";
import classes from "./SquareBanner.module.scss";

const SquareBanner = props => {
  return (
    <BannerWithPaper type="square" bg={props.bg} img={props.img}>
      <Title size={3}>{props.title}</Title>
      {props.children && (
        <div className={classes.description}>{props.children}</div>
      )}
    </BannerWithPaper>
  );
};

export default SquareBanner;
