import React from "react";
import { Link } from "react-router-dom";
import Copyright from "../../Footer/Copyright/Copyright";
import Menu from "../../UI/Menu/Menu";
import classes from "./Footer.module.scss";

function Footer() {
  const links = [
    {
      url: "/women",
      title: "Women"
    },
    {
      url: "/men",
      title: "Men"
    },
    {
      url: "/kids",
      title: "Kids"
    },
    {
      url: "/shoes",
      title: "Shoes"
    },
    {
      url: "/brands",
      title: "Brands"
    }
  ];
  return (
    <footer className={classes.footer}>
      <Menu links={links} />
      <div className={classes.social}>
        <Link to="/" className={classes.instagram} />
        <Link to="/" className={classes.pinterest} />
        <Link to="/" className={classes.twitter} />
        <Link to="/" className={classes.facebook} />
      </div>
      <Copyright cls={classes.copyRight}>
        <span>&bull;</span>
        <Link to="/contact">Contact</Link>
        <span>&bull;</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Copyright>
    </footer>
  );
}

export default Footer;
