import React, { Component } from "react";
import { AppBar, Typography, IconButton, withStyles } from "@material-ui/core/";
import {
  Menu,
  Description,
  Search,
  ViewAgendaOutlined,
  Settings
} from "@material-ui/icons";

const styles = theme => ({
  root: {
    display: "inline-block",
    color: "#7f7777",
    background: "#fff"
  },
  iconButton: {
    margin: 8,
    cursor: "pointer"
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
            className={classes.iconButton}
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
            className={classes.iconButton}
            aria-label="Search"
          >
            <Search />
          </IconButton>
          <IconButton
            color="primary"
            disabled
            className={classes.iconButton}
            aria-label="Change View"
          >
            <ViewAgendaOutlined />
          </IconButton>
          <IconButton
            color="primary"
            disabled
            className={classes.iconButton}
            aria-label="Settings"
          >
            <Settings />
          </IconButton>
        </div>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
