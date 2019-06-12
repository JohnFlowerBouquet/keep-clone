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
  Hidden
} from "@material-ui/core";
import { CheckBoxOutlined } from "@material-ui/icons";
import NoteSettings from "./NoteSettings";
import Favorite from "./Favorite";

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
  itemText: {
    overflowWrap: "break-word",
    cursor: "default"
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
  toggleHoverOn = () => {
    this.setState({ hover: true });
  };
  toggleHoverOff = () => {
    this.setState({ hover: false });
  };
  render() {
    const {
      classes,
      onDelete,
      wordToMatch,
      handleCheck,
      handleFavorite,
      hidden,
      handleColorSelect,
      note: { title, tasks, text, isFavorite, id: noteID, color }
    } = this.props;
    const { hover } = this.state;
    const style = {
      visibility: hidden ? "hidden" : "visible",
      backgroundColor: color
    };
    return (
      <Paper
        className={classes.root}
        style={style}
        elevation={1}
        onClick={this.selectNote}
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}
      >
        <Hidden mdDown>
          <Favorite
            noteID={noteID}
            visible={hover}
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
          />
        </Hidden>

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
          <Typography
            variant="body2"
            component="p"
            className={classes.itemText}
          >
            {wordToMatch ? this.getHighlightedText(text, wordToMatch) : text}
          </Typography>
        )}
        <Hidden mdDown>
          <NoteSettings
            onColorSelect={handleColorSelect}
            onDelete={onDelete}
            noteID={noteID}
            visible={hover}
          />
        </Hidden>
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
