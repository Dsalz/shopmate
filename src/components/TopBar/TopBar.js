import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import LoginBar from "../LoginBar/LoginBar";
import Menu from "../Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./TopBar.module.scss";

const TopBar = props => {
  const theme = "white";

  const categories = [
    { url: "/", title: "Women" },
    { url: "/", title: "Men" },
    { url: "/", title: "Kids" }
  ];

  return (
    <>
      <AppBar className={getClasses(classes.appBar, theme)}>
        <LoginBar />
        <Toolbar className="toolbar">
          <Typography
            variant="h6"
            color="inherit"
            className={`logo ${classes.logo}`}
          >
            Shopmate
          </Typography>

          <Menu links={categories} className="topBarMenu" />

          <SearchBar />

          <IconButton color="inherit">
            <Badge
              badgeContent={6}
              color="secondary"
              className={`cartBadge ${classes.cartBadge}`}
            >
              <div className={`shoppingCartIcon ${classes.shoppingCartIcon}`} />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="Menu"
            className={`menuButton ${classes.menuButton}`}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

const getClasses = (cls, theme) => {
  return `${cls} `.concat(theme + "Theme");
};

export default TopBar;
