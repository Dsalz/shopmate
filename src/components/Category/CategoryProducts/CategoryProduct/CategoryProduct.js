import Button from "@material-ui/core/Button";
import React from "react";
import Paper from "../../../../hoc/Paper/Paper";
import heart from "../../../../img/heart.png";
import top from "../../../../img/top.jpg";
import ImageWithLabel from "../../../UI/ImageWithLabel/ImageWithLabel";
import Title from "../../../UI/Title/Title";
import classes from "./CategoryProduct.module.scss";

function CategoryProduct(props) {
  return (
    <div className={classes.categoryProduct}>
      <ImageWithLabel
        title="let the game begin"
        img={top}
        label="hot"
        labelColor="red"
      />
      <Title size={2}>{props.name}</Title>
      <Button className="button button-small">Buy Now</Button>
      <div className="price">£14.99</div>
      <div>
        <input type="radio" name="color" value="blue" checked />
        <input type="radio" name="color" value="green" checked />
        <input type="radio" name="color" value="red" checked />
      </div>

      <div className={classes.productHover}>
        <img className="addToWishlist" src={heart} alt="add to wishlist" />
        <Button className="button button-small">Quick View</Button>
      </div>
    </div>
  );
}

export default Paper(CategoryProduct);
