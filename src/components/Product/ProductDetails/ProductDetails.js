import { Button } from "@material-ui/core";
import React from "react";
import Container from "../../../hoc/Container/Container";
import Paper from "../../../hoc/Paper/Paper";
import BreadCrumbs from "../../../UI/BreadCrumbs/BreadCrumbs";
import Stars from "../../../UI/Stars/Stars";
import Title from "../../../UI/Title/Title";
import classes from "./ProductDetails.module.scss";

function ProductDetails() {
  const links = [
    {
      url: "/",
      title: "Home"
    },
    {
      url: "/all-categories",
      title: "All categories"
    },
    {
      url: "/category/men",
      title: "Men's clothing & Accesories"
    }
  ];
  return (
    <main className={classes.productDetails}>
      <div className={classes.productImages}>Images</div>
      <div className={classes.productFeatures}>
        <BreadCrumbs links={links} />
        <Stars size={4} />
        <Title size={1}>
          Super Oversized T-Shirt With Raw Sleeves In Brown
        </Title>
        <Button className="button button-large">Add to cart</Button>
      </div>
    </main>
  );
}

export default Container(Paper(ProductDetails));
