import React from "react";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import BannerWithCategories from "./BannerWithCategories/BannerWithCategories";

function Category() {
  return (
    <>
      <TopBar />
      <main>
        <BannerWithCategories />
      </main>
      <Footer />
    </>
  );
}

export default Category;
