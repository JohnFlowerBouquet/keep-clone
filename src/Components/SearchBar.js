import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: "8px",
    margin: "4px 4px 4px auto",
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      margin: "8px 16px 8px auto",
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "0",
    [theme.breakpoints.up("sm")]: {
      width: 48
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    height: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(7),
    transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: 16,
    width: "0",
    cursor: "pointer",
    "&:focus": {
      width: "40vw",
      backgroundColor: "#f1f3f4",
      cursor: "auto"
    },
    [theme.breakpoints.up("sm")]: {
      width: 120,
      backgroundColor: "#f1f3f4",
      "&:focus": {
        width: 240
      }
    }
  }
});

const SearchBar = ({ classes, handleSearch, wordToMatch }) => {
  function search(e) {
    e.preventDefault();
    handleSearch(e.target.value);
  }
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
        value={wordToMatch}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        onChange={search}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  wordToMatch: PropTypes.string.isRequired
};

export default withStyles(styles)(SearchBar);
