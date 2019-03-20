import Typography from "@material-ui/core/Typography";
import React from "react";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <Typography variant="h6" color="inherit" className={`logo ${classes.logo}`}>
      Shopmate
    </Typography>
  );
};

export default Logo;
