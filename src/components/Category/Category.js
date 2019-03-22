import React from "react";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import BannerWithCategories from "./BannerWithCategories/BannerWithCategories";
import CategoryWithFilter from "./CategoryWithFilter/CategoryWithFilter";

function Category() {
  return (
    <>
      <TopBar />
      <BannerWithCategories />
      <CategoryWithFilter />
      <Footer />
    </>
  );
}

export default Category;
