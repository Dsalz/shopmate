import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import classes from "./ShoppingCartIcon.module.scss";

const ShoppingCartIcon = () => {
  return (
    <IconButton color="inherit">
      <Badge
        badgeContent={6}
        color="secondary"
        className={`cartBadge ${classes.cartBadge}`}
      >
        <div className={`shoppingCartIcon ${classes.shoppingCartIcon}`} />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCartIcon;
