import React, { PureComponent } from "react";
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
import { Star, StarBorder, CheckBoxOutlined } from "@material-ui/icons";
import NoteSettings from "./NoteSettings";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: theme.spacing.unit,
    position: "relative",
    "&:hover": {
      boxShadow:
        "0px 2px 4px 0px rgba(0,0,0,0.3), 0px 2px 2px 0px rgba(0,0,0,0.16), 0px 3px 2px -2px rgba(0,0,0,0.14)"
    },
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
    overflowWrap: "break-word",
    width: "80%"
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
  },
  invisible: {
    opacity: "0"
  },
  favorite: {
    position: "relative"
  }
});

const CheckBox = ({ noteID, taskID, isDone, handleCheck }) => {
  const onCheck = e => {
    e.stopPropagation();
    handleCheck(noteID, taskID);
  };
  return (
    <Checkbox
      checked={isDone}
      onClick={onCheck}
      checkedIcon={<CheckBoxOutlined />}
    />
  );
};

const Favorite = withStyles(theme => ({
  favorite: {
    position: "absolute",
    right: "0",
    top: "0",
    opacity: "1",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  invisible: {
    opacity: "0",
    position: "absolute",
    right: "0",
    top: "0"
  }
}))(({ classes, noteID, isFavorite, hover, handleFavorite }) => {
  const toggleFavorite = e => {
    e.stopPropagation();
    handleFavorite(noteID);
  };
  return (
    <IconButton
      color="primary"
      aria-label="Directions"
      onClick={toggleFavorite}
      className={hover ? classes.favorite : classes.invisible}
    >
      {isFavorite ? <Star /> : <StarBorder />}
    </IconButton>
  );
});

class Note extends PureComponent {
  state = {
    hover: false
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
  selectNote = () => {
    this.props.onSelect(this.props.note.id);
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    const {
      classes,
      onDelete,
      wordToMatch,
      handleCheck,
      handleFavorite,
      hidden,
      note: { title, tasks, text, isFavorite, id: noteID }
    } = this.props;
    const { hover } = this.state;
    return (
      <Paper
        className={classes.root}
        style={{ visibility: hidden ? "hidden" : "visible" }}
        elevation={1}
        onClick={this.selectNote}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <Favorite
          noteID={noteID}
          hover={hover}
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
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
                <CheckBox
                  taskID={id}
                  noteID={noteID}
                  isDone={isDone}
                  handleCheck={handleCheck}
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

        <NoteSettings handleDelete={onDelete} noteID={noteID} hover={hover} />
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
