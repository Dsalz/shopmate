import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import Paper from "../../../hoc/Paper/Paper";
import Colors from "../../../UI/Colors/Colors";
import Sizes from "../../../UI/Sizes/Sizes";
import SliderRange from "../../../UI/SliderRange/SliderRange";
import Brands from "../../Brands/Brands";
import classes from "./Filters.module.scss";
class Filters extends Component {
  render() {
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
          <Colors />
          <Sizes />
          <SliderRange />
          <Brands />
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
