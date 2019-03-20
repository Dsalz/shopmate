import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = props => {
  return (
    <div className={classes.search}>
      <div className={`searchIcon ${classes.searchIcon}`}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="search anything"
        classes={{
          root: `inputRoot ${classes.inputRoot}`,
          input: `inputInput ${classes.inputInput}`
        }}
      />
    </div>
  );
};

export default SearchBar;
