import React from "react";
import Footer from "../Category/Footer/Footer";
import TopBar from "../TopBar/TopBar";
import ProductDetails from "./ProductDetails/ProductDetails";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

function Product() {
  return (
    <>
      <TopBar />
      <ProductDetails />
      <SimilarProducts />
      <Footer />
    </>
  );
}

export default Product;
