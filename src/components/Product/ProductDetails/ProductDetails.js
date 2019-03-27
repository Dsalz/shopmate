import { Button } from "@material-ui/core";
import React from "react";
import Container from "../../../hoc/Container/Container";
import Paper from "../../../hoc/Paper/Paper";
import BreadCrumbs from "../../../UI/BreadCrumbs/BreadCrumbs";
import Colors from "../../../UI/Colors/Colors";
import Quantity from "../../../UI/Quantity/Quantity";
import Sizes from "../../../UI/Sizes/Sizes";
import Stars from "../../../UI/Stars/Stars";
import Title from "../../../UI/Title/Title";
import ProductImages from "../ProductImages/ProductImages";
import ProductReviews from "../ProductReviews/ProductReviews";
import classes from "./ProductDetails.module.scss";

const ProductDetails = () => {
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
    <main>
      <div className={classes.productDetails}>
        <ProductImages />
        <div className={classes.productFeatures}>
          <BreadCrumbs links={links} />
          <Stars size={4} />
          <Title size={1}>
            Super Oversized T-Shirt With Raw Sleeves In Brown
          </Title>
          <div className={classes.price}>£13.99</div>
          <Colors />
          <Sizes />
          <Quantity />
          <Button className="button button-large">Add to cart</Button>
        </div>
      </div>
      <ProductReviews />
    </main>
  );
};

export default Container(Paper(ProductDetails));
