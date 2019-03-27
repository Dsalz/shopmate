import React from "react";
import Title from "../Title/Title";
import classes from "./Sizes.module.scss";

function Sizes() {
  return (
    <>
      <Title size={6}>Sizes</Title>
      <div className={classes.sizes}>
        <div className={classes.size}>XS</div>
        <div className={classes.size}>S</div>
        <div className={classes.size}>M</div>
        <div className={classes.size}>L</div>
        <div className={classes.size}>XL</div>
        <div className={classes.size}>XXL</div>
      </div>
    </>
  );
}

export default Sizes;
