import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  InputBase
} from "@material-ui/core";
import { CheckBoxOutlined } from "@material-ui/icons";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: theme.spacing.unit,
    transition: "all 0.5s ease",
    [theme.breakpoints.up("sm")]: {
      width: "250px"
    }
  },
  list: {
    display: "flex",
    flexDirection: "column"
  },
  list__item: {
    padding: "0"
  },
  list__itemDone: {
    order: "1",
    padding: "0",
    textDecoration: "line-through",
    color: "#5f6368"
  },
  title: {
    cursor: "default",
    overflowWrap: "break-word"
  },
  text: {
    cursor: "default",
    overflowWrap: "break-word",
    overflow: "hidden"
  },
  itemText: {
    overflowWrap: "break-word"
  },
  itemCheckbox: {
    padding: "4"
  }
});

const StyledInput = withStyles(theme => ({
  root: {
    cursor: "default",
    overflowWrap: "break-word"
  },
  inputMultiline: {
    overflow: "hidden"
  }
}))(InputBase);

class Note extends React.Component {
  state = this.getInitState();

  getInitState() {
    const { note } = this.props;
    return (
      note || {
        title: "",
        id: "",
        tasks: []
      }
    );
  }

  handleCheck = id => {
    this.setState(
      ({ tasks }) => ({
        tasks: tasks.map(task =>
          task.id === id ? { ...task, isDone: !task.isDone } : task
        )
      }),
      () => this.props.onUpdate(this.state)
    );
  };
  render() {
    const { classes } = this.props,
      { title, tasks, text } = this.state;
    const lastTask = tasks.length - 1;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} variant="h6" component="h3">
          {title}
        </Typography>
        <List className={classes.list}>
          {tasks.map(({ text, isDone, id }, index) => (
            <ListItem
              key={id}
              className={isDone ? classes.list__itemDone : classes.list__item}
              divider
            >
              <Checkbox
                checked={isDone}
                onClick={e => {
                  e.stopPropagation();
                  this.handleCheck(id);
                }}
                checkedIcon={<CheckBoxOutlined />}
              />
              <ListItemText className={classes.itemText} primary={text} />
            </ListItem>
          ))}
          {text && <StyledInput multiline fullWidth value={text} />}
        </List>
      </Paper>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Note);
