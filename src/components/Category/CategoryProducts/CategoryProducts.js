import React from "react";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import classes from "./CategoryProducts.module.scss";

function CategoryProducts() {
  return (
    <main className={classes.categoryProducts}>
      <CategoryProduct name="Men's Knitwear Offers" />
      <CategoryProduct name="Men's Shirts Offers" />
      <CategoryProduct name="New Look T-Shirt In Gradient Fade" />
      <CategoryProduct name="Novelty T-shirts" />
      <CategoryProduct name="Various T-shorts" />
      <CategoryProduct name="Pull&amp;Bear Jumper In Textured Knit In Blue" />
    </main>
  );
}

export default CategoryProducts;
