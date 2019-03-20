import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import Menu from "../Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./TopBar.module.scss";

const TopBar = props => {
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.logo}>
            Shopmate
          </Typography>
          <Menu />

          <SearchBar />

          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
