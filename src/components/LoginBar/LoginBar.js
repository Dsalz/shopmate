import React from "react";
import ShoppingCartIcon from "../TopBar/ShoppingCartIcon/ShoppingCartIcon";
import Menu from "../UI/Menu/Menu";
import classes from "./LoginBar.module.scss";

const LoginBar = () => {
  const links = [
    { url: "/", title: "Daily Deals" },
    { url: "/", title: "Sell" },
    { url: "/", title: "Help & Contact" }
  ];
  return (
    <div className={`container loginBar ${classes.loginBar}`}>
      <div className={classes.registration}>
        Hi! <a href="/">Sign in</a> or <a href="/">Register</a>
      </div>
      <Menu links={links} className={`loginMenu ${classes.loginMenu}`} />
      <div className={classes.languageAndCurrency}>
        <a className={classes.languageSwitcher} href="/">
          EN
        </a>
        <span className={classes.currencySwitcher}>£ GBP</span>
      </div>
      <div className={classes.shoppingCartAndBag}>
        <ShoppingCartIcon />
        <span>Your bag: £ 102.99</span>
      </div>
    </div>
  );
};

export default LoginBar;
