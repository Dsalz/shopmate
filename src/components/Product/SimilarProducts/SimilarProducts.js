import React from "react";
import Title from "../../../UI/Title/Title";
import CategoryProduct from "../../Category/CategoryProducts/CategoryProduct/CategoryProduct";
import classes from "./SimilarProducts.module.scss";

function SimilarProducts() {
  return (
    <div className={`container ${classes.similarProducts}`}>
      <Title size={4}>You may also like</Title>
      <div className={classes.theSimilarProducts}>
        <CategoryProduct name="Men's Knitwear Offers" />
        <CategoryProduct name="Men's Shirts Offers" />
        <CategoryProduct name="New Look T-Shirt In Gradient Fade" />
      </div>
    </div>
  );
}

export default SimilarProducts;
