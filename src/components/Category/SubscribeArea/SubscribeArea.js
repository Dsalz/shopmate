import React from "react";
import Email from "../../Email/Email";
import classes from "./SubscribeArea.module.scss";

function SubscribeArea() {
  return (
    <div className={classes.subscribe}>
      <div className={`container ${classes.subscribeArea}`}>
        <div className={classes.subscribeText}>
          SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS
        </div>
        <Email btnText="Subscribe" text="Your e-mail here" />
      </div>
    </div>
  );
}

export default SubscribeArea;
