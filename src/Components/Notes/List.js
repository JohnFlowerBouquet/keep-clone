import React from "react";
import {
  withStyles,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  InputBase
} from "@material-ui/core";
import { CheckBoxOutlined, Add } from "@material-ui/icons";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: theme.spacing.unit * 0.5,
    width: "400"
  },
  input: {
    marginLeft: 5
  }
});

const Checklist = ({ classes, text, handleChange }) => (
  <List>
    <ListItem>
      {text === "" ? <Add /> : <Checkbox />}
      <InputBase
        label="List Item"
        name="text"
        autoComplete="off"
        placeholder="Add Element"
        className={classes.input}
        onChange={handleChange}
      />
    </ListItem>
    {text !== "" && (
      <ListItem>
        <Add />
        <InputBase
          label="List Item"
          name="text"
          autoComplete="off"
          placeholder="Add Element"
          className={classes.input}
        />
      </ListItem>
    )}
  </List>
);
export default withStyles(styles)(Checklist);
