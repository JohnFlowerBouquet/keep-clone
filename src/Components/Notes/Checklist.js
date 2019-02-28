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
    margin: theme.spacing.unit * 0.5,
    width: "400"
  },
  input: {
    marginLeft: 5
  }
});

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
      <List>
        {tasks.map(({ text, isDone, id }, index, tasks) => {
          const last = index === tasks.length - 1;
          return (
            <ListItem key={id} className={classes.item}>
              {last ? (
                <Add />
              ) : (
                <Checkbox
                  className={classes.itemCheckbox}
                  checked={isDone}
                  checkedIcon={<CheckBoxOutlined />}
                  disableRipple
                  onClick={e => {
                    e.stopPropagation();
                    handleCheck(id);
                  }}
                />
              )}
              <InputBase
                label="List Item"
                name="text"
                autoComplete="off"
                placeholder={last ? "Add Element" : ""}
                onChange={last ? handleTaskAdd : handleTaskChange}
                className={classes.input}
                value={text}
                id={id.toString()}
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
export default withStyles(styles)(Checklist);
