import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Stars from "../../../../UI/Stars/Stars";
import Title from "../../../../UI/Title/Title";
import classes from "./ReviewForm.module.scss";

function ReviewForm() {
  return (
    <form>
      <Title size={4}>Add a review</Title>
      <div className={classes.reviewGrid}>
        <label htmlFor="nickname" className={classes.label}>
          Choose a nickname
        </label>
        <Input
          id="nickname"
          name="nickname"
          className="input"
          inputProps={{
            "aria-label": "Nickname"
          }}
        />
        <label htmlFor="review" className={classes.label}>
          Your review
        </label>
        <div>
          <TextField
            id="review"
            label=""
            multiline
            name="review"
            rows="4"
            className="input"
            margin="normal"
          />
          <div className={classes.reviewGuideLine}>
            Your review must be at least 50 characters
            <a href="/">Full review guidelines</a>
          </div>
        </div>
        <div className={classes.label}>Overall rating</div>
        <div>
          <Stars size={4} />
          <Button type="submit" className="button button-small">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
