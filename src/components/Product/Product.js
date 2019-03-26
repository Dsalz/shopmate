import React from "react";
import Footer from "../Category/Footer/Footer";
import TopBar from "../TopBar/TopBar";
import Title from "../UI/Title/Title";
import ProductDetails from "./ProductDetails/ProductDetails";

function Product() {
  return (
    <>
      <TopBar />
      <ProductDetails />
      <div className="container">
        <Title size={4}>You may also like</Title>
        {/*<CategoryProducts />*/}
      </div>
      <Footer />
    </>
  );
}

export default Product;
