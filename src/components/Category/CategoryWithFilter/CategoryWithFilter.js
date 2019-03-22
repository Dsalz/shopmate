import React from "react";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Filters from "../Filters/Filters";
import classes from "./CategoryWithFilter.module.scss";

function CategoryWithFilter() {
  return (
    <div className={`container ${classes.categoryWithFilter}`}>
      <Filters />
      <CategoryProducts />
    </div>
  );
}

export default CategoryWithFilter;
