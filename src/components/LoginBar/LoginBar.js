import React from "react";
import Menu from "../UI/Menu/Menu";
import classes from "./LoginBar.module.scss";

const LoginBar = props => {
  const links = [
    { url: "/", title: "Daily Deals" },
    { url: "/", title: "Sell" },
    { url: "/", title: "Help & Contact" }
  ];
  return (
    <div className={`container loginBar ${classes.loginBar}`}>
      Hi! <a href="/">Sign in</a> or <a href="/">Register</a>
      <Menu links={links} className={`loginMenu ${classes.loginMenu}`} />
    </div>
  );
};

export default LoginBar;
