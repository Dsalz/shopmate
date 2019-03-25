import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";
import React, { Component } from "react";
import Paper from "../../../hoc/Paper/Paper";
import SliderRange from "../../UI/SliderRange/SliderRange";
import classes from "./Filters.module.scss";

class Filters extends Component {
  state = {
    selectedValue: "a",
    gilad: true,
    jason: false,
    antoine: false
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  handleBrandChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { gilad, jason, antoine } = this.state;

    return (
      <aside className={classes.filtersAside}>
        <div className={classes.selectedFilters}>
          <div className={classes.title}>Filter 486 items</div>
          <div className={classes.selectedFilter}>
            <span className={classes.filterType}>Gender:</span>
            <span className={classes.filterValue}>Woman</span>
          </div>
          <div className={classes.selectedFilter}>
            <span className={classes.filterType}>Category:</span>
            <span className={classes.filterValue}>Dress</span>
          </div>
        </div>

        <div className={classes.theFilters}>
          <div className={classes.filter}>
            <div className={classes.filterName}>Color</div>
            <div className={classes.filterColor}>
              <Radio
                checked={this.state.selectedValue === "a"}
                onChange={this.handleChange}
                value="a"
                name="radio-button-demo"
                aria-label="A"
              />
              <Radio
                checked={this.state.selectedValue === "b"}
                onChange={this.handleChange}
                value="b"
                name="radio-button-demo"
                aria-label="B"
              />
              <Radio
                checked={this.state.selectedValue === "c"}
                onChange={this.handleChange}
                value="c"
                name="radio-button-demo"
                aria-label="C"
              />
              <Radio
                checked={this.state.selectedValue === "d"}
                onChange={this.handleChange}
                value="d"
                name="radio-button-demo"
                aria-label="D"
              />
            </div>
          </div>

          <div className={classes.filter}>
            <div className={classes.filterName}>Size</div>
            <div className={classes.filterSizes}>
              <div className={classes.size}>XS</div>
              <div className={classes.size}>S</div>
              <div className={classes.size}>M</div>
              <div className={classes.size}>L</div>
              <div className={classes.size}>XL</div>
            </div>
          </div>

          <div className={classes.filter}>
            <div className={classes.filterName}>Price Range</div>
            <SliderRange />
          </div>

          <div className={classes.filter}>
            <div className={classes.filterName}>Brands</div>
            <div className={classes.filterBrands}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gilad}
                      onChange={this.handleBrandChange("gilad")}
                      value="gilad"
                    />
                  }
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jason}
                      onChange={this.handleBrandChange("jason")}
                      value="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={this.handleBrandChange("antoine")}
                      value="antoine"
                    />
                  }
                  label="Antoine Llorca"
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div className={classes.applyAndClearFilters}>
          <Button className="button button-small">Apply</Button>
          <a className={classes.clearAll} href="/">
            <span>X</span> Clear all
          </a>
        </div>
      </aside>
    );
  }
}

export default Paper(Filters);
