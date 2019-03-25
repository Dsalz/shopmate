import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <Typography variant="h6" color="inherit" className={`logo ${classes.logo}`}>
      <Link to="/">Shopmate</Link>
    </Typography>
  );
};

export default Logo;
