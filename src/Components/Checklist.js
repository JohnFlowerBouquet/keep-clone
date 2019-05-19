import React, { Component } from "react";
import {
  withStyles,
  List,
  ListItem,
  Checkbox,
  InputBase
} from "@material-ui/core";
import { CheckBoxOutlined, Add } from "@material-ui/icons";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: theme.spacing.unit * 0.5
  },
  list: {
    width: "100%"
  }
});

const StyledInput = withStyles({
  root: {
    marginLeft: 8,
    width: "100%"
  },
  inputMultiline: {
    overflow: "hidden"
  }
})(InputBase);

class Checklist extends Component {
  render() {
    const {
      classes,
      tasks,
      handleTaskAdd,
      handleTaskChange,
      handleCheck
    } = this.props;
    return (
      <List className={classes.list}>
        {tasks.map(({ text, isDone, id }, index, tasks) => {
          const last = index === tasks.length - 1;
          return (
            <ListItem key={id}>
              {last ? (
                <Add />
              ) : (
                <Checkbox
                  checked={isDone}
                  checkedIcon={<CheckBoxOutlined />}
                  disableRipple
                  onClick={e => {
                    e.stopPropagation();
                    handleCheck(id);
                  }}
                />
              )}
              <StyledInput
                label="List Item"
                name="text"
                autoComplete="off"
                placeholder={last ? "Add Element" : ""}
                onChange={last ? handleTaskAdd : handleTaskChange}
                className={classes.input}
                value={text}
                id={id.toString()}
                multiline
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
export default withStyles(styles)(Checklist);