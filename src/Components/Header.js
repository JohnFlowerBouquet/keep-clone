import React, { Component } from "react";
import { AppBar, Typography, withStyles } from "@material-ui/core/";
import { Description } from "@material-ui/icons";
import SearchBar from "./SearchBar";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    color: "#7f7777",
    background: "#fff"
  },
  container: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "120px",
    [theme.breakpoints.up("sm")]: {
      margin: 8,
      width: "auto"
    }
  },
  logo: {
    color: "#f4b607",
    fontSize: 32,
    margin: 8
  },
  title: {
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem"
    }
  }
});

export class Header extends Component {
  render() {
    const { classes, handleSearch, wordToMatch } = this.props;
    return (
      <AppBar className={classes.root}>
        <div className={classes.container}>
          <Description className={classes.logo} />
          <Typography className={classes.title} variant="h5" color="inherit">
            Keep-clone
          </Typography>
        </div>
        <SearchBar handleSearch={handleSearch} wordToMatch={wordToMatch} />
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
