import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import classes from "./Email.module.scss";

function Email() {
  return (
    <form noValidate autoComplete="off" className={classes.emailForm}>
      <div className={classes.email}>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
      </div>
      <Button className="button button-small">Register</Button>
    </form>
  );
}

export default Email;
