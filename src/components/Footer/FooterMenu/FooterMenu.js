import React from "react";
import Menu from "../../UI/Menu/Menu";
import Title from "../../UI/Title/Title";
import classes from "./FooterMenu.module.scss";

function FooterMenu(props) {
  return (
    <div className={classes.footerMenu}>
      <Title size={5}>{props.title}</Title>
      <Menu links={props.links} />
    </div>
  );
}

export default FooterMenu;
