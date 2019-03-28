import React from "react";
import Footer from "../Category/Footer/Footer";
import TopBar from "../TopBar/TopBar";
import classes from "./Product.module.scss";
import ProductDetails from "./ProductDetails/ProductDetails";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

function Product() {
  return (
    <>
      <TopBar />
      <ProductDetails />
      <SimilarProducts />
      <Footer footerCls={classes.footer} copyrightCls={classes.copyright} />
    </>
  );
}

export default Product;
