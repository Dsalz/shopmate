import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../../UI/Menu/Menu";
import Copyright from "../../Footer/Copyright/Copyright";
import classes from "./Footer.module.scss";

function Footer(props) {
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
    <footer className={`${classes.footer} ${props.footerCls}`}>
      <Menu links={links} />
      <div className={classes.social}>
        <Link to="/" className={classes.instagram} />
        <Link to="/" className={classes.pinterest} />
        <Link to="/" className={classes.twitter} />
        <Link to="/" className={classes.facebook} />
      </div>
      <Copyright cls={`${classes.copyRight}  ${props.copyrightCls}`}>
        <span>&bull;</span>
        <Link to="/contact">Contact</Link>
        <span>&bull;</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Copyright>
    </footer>
  );
}

export default Footer;
