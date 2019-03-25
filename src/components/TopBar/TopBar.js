import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import LoginBar from "../LoginBar/LoginBar";
import Menu from "../UI/Menu/Menu";
import Logo from "./Logo/Logo";
import MenuIconButton from "./MenuIconButton/MenuIconButton";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon/ShoppingCartIcon";
import classes from "./TopBar.module.scss";

const theme = "white";

const TopBar = () => {
  const categories = [
    { url: "/category/women", title: "Women" },
    { url: "/category/men", title: "Men" },
    { url: "/category/kids", title: "Kids" }
  ];

  return (
    <>
      <AppBar className={getClasses(classes.appBar, theme)}>
        <LoginBar />
        <Toolbar>
          <Logo />
          <Menu links={categories} className="topBarMenu" />
          <SearchBar />
          <ShoppingCartIcon />
          <MenuIconButton />
        </Toolbar>
      </AppBar>
    </>
  );
};

const getClasses = (cls, theme) => {
  return `${cls} `.concat(theme + "Theme");
};

export default TopBar;
