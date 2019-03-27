import React from "react";
import Stars from "../../../UI/Stars/Stars";
import Title from "../../../UI/Title/Title";
import classes from "./ProductReviews.module.scss";

function ProductReviews() {
  return (
    <div className={classes.productReviews}>
      <Title size={4}>Product reviews</Title>
      <div className={classes.reviewDetails}>
        <div className={classes.reviewLeft}>
          <Stars size={4} />
          <div className={classes.reviewNick}>Pablo Permins</div>
          <div className={classes.reviewTime}>one hour ago</div>
        </div>
        <div className={classes.reviewRight}>
          <div className={classes.reviewDescription}>
            Got this through the post the other day and right from opening the
            packet I knew this was quality, put it on and I was right!! Well
            done
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProductReviews;
