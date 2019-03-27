import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import heart from "../../../../assets/img/heart.png";
import top from "../../../../assets/img/top.jpg";
import Paper from "../../../../hoc/Paper/Paper";
import ImageWithLabel from "../../../../UI/ImageWithLabel/ImageWithLabel";
import Title from "../../../../UI/Title/Title";
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
        <input type="radio" name="color" value="blue" checked readOnly />
        <input type="radio" name="color" value="green" checked readOnly />
        <input type="radio" name="color" value="red" checked readOnly />
      </div>

      <div className={classes.productHover}>
        <img className="addToWishlist" src={heart} alt="add to wishlist" />
        <Link to="/product/1">
          <Button className="button button-small">Quick View</Button>
        </Link>
      </div>
    </div>
  );
}

export default Paper(CategoryProduct);
