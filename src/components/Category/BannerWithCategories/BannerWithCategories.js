import React from "react";
import Container from "../../../hoc/Container/Container";
import Paper from "../../../hoc/Paper/Paper";
import Menu from "../../../UI/Menu/Menu";
import Title from "../../../UI/Title/Title";
import classes from "./BannerWithCategories.module.scss";
import links from "./Links";

function BannerWithCategories() {
  return (
    <aside className={classes.bannerWithCategories}>
      <Title>Mens Wear</Title>
      <div className={classes.menus}>
        <Menu links={links.left} />
        <Menu links={links.middle} />
        <Menu links={links.right} />
      </div>
    </aside>
  );
}

export default Container(Paper(BannerWithCategories));
