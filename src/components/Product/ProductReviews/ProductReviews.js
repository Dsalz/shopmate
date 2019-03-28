import React from "react";
import Stars from "../../../UI/Stars/Stars";
import Title from "../../../UI/Title/Title";
import classes from "./ProductReviews.module.scss";
import ReviewForm from "./ReviewForm/ReviewForm";

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
          <div className={classes.reviewIcons}>
            <div className={classes.reviewIcon}>
              <div className={classes.reviewIconImage} />
              <div className={classes.reviewIconText}>113</div>
            </div>
            <div className={classes.reviewIcon}>
              <div className={classes.reviewCommentImage} />
              <div className={classes.reviewIconText}>6</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <ReviewForm/>
    </div>
  );
}

export default ProductReviews;
