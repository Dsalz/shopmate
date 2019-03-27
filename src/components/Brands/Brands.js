import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import React, { Component } from "react";
import Title from "../../UI/Title/Title";

class Brands extends Component {
  state = {
    checked: ["jason", "antoine"]
  };

  handleChange = name => event => {
    if (this.isChecked(name)) {
      this.setState(state => {
        return {
          checked: state.checked.filter(val => name !== val)
        };
      });
    } else {
      this.setState(state => {
        return {
          checked: state.checked.concat(name)
        };
      });
    }
  };

  isChecked = value => this.state.checked.includes(value);

  render() {
    return (
      <>
        <Title size={6}>Brands</Title>
        <div className="classes.filterBrands">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.isChecked("gilad")}
                  onChange={this.handleChange("gilad")}
                  value="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.isChecked("jason")}
                  onChange={this.handleChange("jason")}
                  value="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.isChecked("antoine")}
                  onChange={this.handleChange("antoine")}
                  value="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
        </div>
      </>
    );
  }
}

export default Brands;
