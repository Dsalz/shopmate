import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import classes from "./MenuIconButton.module.scss";

const MenuIconButton = () => {
  return (
    <IconButton
      color="inherit"
      aria-label="Menu"
      className={`menuIconButton ${classes.menuIconButton}`}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuIconButton;
