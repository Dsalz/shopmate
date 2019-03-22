import React from "react";
import Paper from "../../../../hoc/Paper/Paper";
import Title from "../../../UI/Title/Title";

function CategoryProduct(props) {
  return (
    <div>
      <Title size={2}>{props.name}</Title>
    </div>
  );
}

export default Paper(CategoryProduct);
