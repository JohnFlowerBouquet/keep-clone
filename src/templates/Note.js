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
  IconButton
} from "@material-ui/core";
import { CheckBoxOutlined, Delete } from "@material-ui/icons";

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

  getHighlightedText = (text, higlight) => {
    let parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === higlight.toLowerCase()
                ? { backgroundColor: "#FB8C00" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  onSelect = id => {
    this.setState(
      () => ({
        active: true
      }),
      this.props.onSelect(id)
    );
  };

  render() {
    const { classes, onDelete, wordToMatch } = this.props,
      { title, tasks, text, id, active } = this.state;
    return (
      <Paper
        className={classes.root}
        styles={active ? { visibility: "hidden" } : null}
        elevation={1}
        onClick={() => this.onSelect(id)}
      >
        <Typography className={classes.title} variant="h6" component="h3">
          {wordToMatch ? this.getHighlightedText(title, wordToMatch) : title}
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
              <ListItemText
                className={classes.itemText}
                primary={
                  wordToMatch
                    ? this.getHighlightedText(text, wordToMatch)
                    : text
                }
              />
            </ListItem>
          ))}
          {text && (
            <Typography variant="body2" component="p">
              {wordToMatch ? this.getHighlightedText(text, wordToMatch) : text}
            </Typography>
          )}
        </List>
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="Directions"
          onClick={e => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          <Delete />
        </IconButton>
      </Paper>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Note);
