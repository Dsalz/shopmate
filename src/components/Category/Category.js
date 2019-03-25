import React from "react";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import BannerEndCategory from "./BannerEndCategory/BannerEndCategory";
import BannerWithCategories from "./BannerWithCategories/BannerWithCategories";
import CategoryWithFilter from "./CategoryWithFilter/CategoryWithFilter";
import SubscribeArea from "./SubscribeArea/SubscribeArea";

function Category() {
  return (
    <>
      <TopBar />
      <BannerWithCategories />
      <CategoryWithFilter />
      <BannerEndCategory />
      <SubscribeArea />
      <Footer />
    </>
  );
}

export default Category;
