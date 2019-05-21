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

  render() {
    const {
      classes,
      onDelete,
      wordToMatch,
      handleCheck,
      note: { title, tasks, text, id: noteID }
    } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} variant="h6" component="h3">
          {wordToMatch ? this.getHighlightedText(title, wordToMatch) : title}
        </Typography>
        {tasks.length !== 0 && (
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
                    handleCheck(noteID, id);
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
          </List>
        )}

        {text && (
          <Typography variant="body2" component="p">
            {wordToMatch ? this.getHighlightedText(text, wordToMatch) : text}
          </Typography>
        )}
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="Directions"
          onClick={e => {
            e.stopPropagation();
            onDelete(noteID);
          }}
        >
          <Delete />
        </IconButton>
      </Paper>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  wordToMatch: PropTypes.string,
  handleCheck: PropTypes.func.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.string,
    dateCreated: PropTypes.string,
    deadline: PropTypes.string,
    tasks: PropTypes.array
  })
};

export default withStyles(styles)(Note);
