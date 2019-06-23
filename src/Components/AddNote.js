import React, { Component } from "react";
import {
  withStyles,
  Paper,
  InputBase,
  IconButton,
  ClickAwayListener,
  Typography,
  Tooltip
} from "@material-ui/core/";

import {
  CheckBoxOutlined,
  Brush,
  InsertPhotoOutlined
} from "@material-ui/icons";

import Checklist from "./Checklist";
import NoteSettings from "../templates/NoteSettings";
import Favorite from "../templates/Favorite";
import AlarmLabel from "../templates/AlarmLabel";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    flexWrap: "wrap",
    alignItems: "center",
    width: 300,
    margin: "5rem auto",
    padding: 0,
    boxShadow:
      "0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)",
    [theme.breakpoints.up("sm")]: {
      margin: "5rem auto",
      width: 600
    }
  },
  textContainer: {
    flex: 1,
    padding: "12px 16px"
  },
  text: {
    fontWeight: "500",
    fontSize: "1rem",
    color: "#80868b"
  },
  iconButton: {
    padding: 5
  },
  alarm: {
    backgroundColor: "rgb(251, 140, 0, 0.1)",
    borderRadius: "0 10px 10px 0",
    padding: "2px",
    margin: "2px 0"
  }
});

const StyledInput = withStyles(theme => ({
  root: {
    display: "block",
    marginLeft: 8,
    width: 400,
    marginBottom: 10,
    fontWeight: "bold",
    padding: "12px 16px",
    '&[label="Title"]': {
      width: "calc(100% - 48px)"
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      '&[label="Title"]': {
        width: "calc(100% - 48px)"
      }
    }
  },
  inputMultiline: {
    overflow: "hidden"
  }
}))(InputBase);

class NewNote extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { note } = this.props;
    return note
      ? note
      : {
          title: "",
          id: `note${new Date().getTime().toString()}`,
          isFavorite: false,
          text: "",
          color: "#ffffff",
          tasks: [
            {
              text: "",
              isDone: false,
              id: `task${new Date().getTime().toString()}`
            }
          ]
        };
  }

  handleCheck = id => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    }));
  };

  handleClickAway = e => {
    const { isOpen } = this.props;
    if (isOpen) {
      const newNote = this.state;
      newNote.tasks.pop();
      this.props.onAdd(newNote);
      e.preventDefault();
    }
    this.setState(() => this.getInitialState());
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState(() => ({
      [name]: value
    }));
  };

  handleTaskChange = ({ target: { value, id } }) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task =>
        task.id.toString() === id ? { ...task, text: value } : task
      )
    }));
  };

  handleTaskAdd = e => {
    this.handleTaskChange(e);
    this.setState(({ tasks }) => ({
      tasks: [...tasks, { text: "", isDone: false, id: new Date().getTime() }]
    }));
  };
  handleFavorite = () => {
    this.setState(({ isFavorite }) => ({
      isFavorite: !isFavorite
    }));
  };

  handleDelete = () => {
    this.setState(() => ({
      title: "",
      id: `note${new Date().getTime().toString()}`,
      isFavorite: false,
      text: "",
      color: "#ffffff",
      tasks: [
        {
          text: "",
          isDone: false,
          id: `task${new Date().getTime().toString()}`
        }
      ]
    }));
  };

  handleSave = () => {
    const { isOpen } = this.props;
    if (isOpen) {
      const newNote = this.state;
      newNote.tasks.pop();
      this.props.onAdd(newNote);
    }
    this.setState(() => this.getInitialState());
  };

  handleColorSelect = color => {
    this.setState(() => ({
      color: color
    }));
  };

  handleAlarmAdd = alarm => {
    this.setState(() => ({
      alarm: alarm
    }));
  };

  render() {
    const {
      title,
      id: noteID,
      isFavorite,
      text,
      tasks,
      color,
      alarm
    } = this.state;
    const { classes, selectNoteType, type, isOpen } = this.props;
    const style = {
      backgroundColor: color
    };
    let Input;
    if (!isOpen) {
      Input = (
        <div className={classes.textContainer}>
          <Typography
            className={classes.text}
            onClick={() => selectNoteType("note")}
          >
            Create Note...
          </Typography>
        </div>
      );
    } else {
      if (type === "note") {
        Input = (
          <StyledInput
            label="Note"
            autoComplete="off"
            value={text}
            name="text"
            onChange={this.handleChange}
            placeholder="Create Note..."
            multiline
          />
        );
      } else if (type === "list") {
        Input = (
          <Checklist
            tasks={tasks}
            handleCheck={this.handleCheck}
            handleTaskAdd={this.handleTaskAdd}
            handleTaskChange={this.handleTaskChange}
          />
        );
      }
    }

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <Paper
          className={classes.root}
          elevation={1}
          display="flex"
          style={style}
        >
          {isOpen && (
            <>
              <Favorite
                noteID={noteID}
                visible={true}
                isFavorite={isFavorite}
                handleFavorite={this.handleFavorite}
              />
              <StyledInput
                label="Title"
                autoComplete="off"
                value={title}
                name="title"
                placeholder={"Add Title..."}
                onChange={this.handleChange}
                multiline
                fullWidth
              />
              {alarm && <AlarmLabel alarm={alarm} margin={true} />}
            </>
          )}
          {Input}

          {!isOpen && (
            <div className={classes.buttonsContainer}>
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="New list"
              >
                <IconButton
                  color="primary"
                  onClick={() => selectNoteType("list")}
                  className={classes.iconButton}
                  aria-label="Add List Note"
                  name="list"
                >
                  <CheckBoxOutlined />
                </IconButton>
              </Tooltip>
              <IconButton
                color="primary"
                disabled
                className={classes.iconButton}
                aria-label="Directions"
              >
                <Brush />
              </IconButton>
              <IconButton
                color="primary"
                disabled
                className={classes.iconButton}
                aria-label="Directions"
              >
                <InsertPhotoOutlined />
              </IconButton>
            </div>
          )}
          {isOpen && (
            <NoteSettings
              onDelete={this.handleDelete}
              onColorSelect={this.handleColorSelect}
              onAlarmAdd={this.handleAlarmAdd}
              onSave={this.handleSave}
              visible={true}
              isEditing={true}
            />
          )}
        </Paper>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(NewNote);
