import React, { Component } from "react";
import { AppBar, Typography, IconButton, withStyles } from "@material-ui/core/";
import { Menu, Description, Search } from "@material-ui/icons";

const styles = theme => ({
  root: {
    display: "inline-block",
    color: "#7f7777",
    background: "#fff"
  },
  icon: {
    margin: 0,
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      margin: 8
    }
  }
});

export class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.root}>
        <div style={{ float: "left", display: "flex", alignItems: "center" }}>
          <IconButton
            color="primary"
            className={classes.icon}
            aria-label="Menu"
          >
            <Menu />
          </IconButton>
          <Description style={{ color: "#f4b607", fontSize: 32, margin: 8 }} />

          <Typography
            style={{ cursor: "default" }}
            variant="h5"
            color="inherit"
          >
            Keep-clone
          </Typography>
        </div>
        <div style={{ float: "right" }}>
          <IconButton
            color="primary"
            disabled
            className={classes.icon}
            aria-label="Search"
          >
            <Search />
          </IconButton>
        </div>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
