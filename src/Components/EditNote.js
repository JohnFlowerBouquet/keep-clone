import React, { Component } from "react";
import {
  withStyles,
  Paper,
  InputBase,
  ClickAwayListener,
  Typography
} from "@material-ui/core/";
import Checklist from "./Checklist";
import NoteSettings from "../templates/NoteSettings";
import Favorite from "../templates/Favorite";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    flexWrap: "wrap",
    alignItems: "center",
    width: 300,
    margin: "5rem auto",
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      margin: "5rem auto",
      width: 400
    }
  },
  textContainer: {
    flex: 1,
    padding: "12px 16px"
  },
  text: {
    fontWeight: "bold"
  },
  iconButton: {
    padding: 5
  },
  alarm: {
    backgroundColor: "rgb(251, 140, 0, 0.1)",
    borderRadius: "0 10px 10px 0",
    padding: "2px 4px 2px 4px",
    margin: "2px 0"
  }
});

const StyledInput = withStyles(theme => ({
  root: {
    display: "block",
    marginLeft: 8,
    width: 400,
    marginBottom: 5,
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

class EditNote extends Component {
  state = {
    ...this.props.note,
    tasks: [
      ...this.props.note.tasks,
      { text: "", isDone: false, id: new Date().getTime() }
    ]
  };

  handleCheck = id => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    }));
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
  handleClickAway = () => {
    return true;
  };

  handleTaskAdd = e => {
    this.handleTaskChange(e);
    this.setState(({ tasks }) => ({
      tasks: [...tasks, { text: "", isDone: false, id: new Date().getTime() }]
    }));
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

  handleFavorite = () => {
    this.setState(({ isFavorite }) => ({
      isFavorite: !isFavorite
    }));
  };

  handleSave = () => {
    const editedNote = Object.assign({}, this.state);
    this.props.onUpdate(editedNote);
  };

  componentWillUnmount() {
    const editedNote = Object.assign({}, this.state);
    editedNote.tasks.pop();
    this.props.onUpdate(editedNote);
  }

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
    const { classes, onDelete } = this.props;
    const style = {
      backgroundColor: color
    };
    let Input;
    if (text) {
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
    } else if (tasks.length > 0) {
      Input = (
        <Checklist
          tasks={tasks}
          handleCheck={this.handleCheck}
          handleTaskAdd={this.handleTaskAdd}
          handleTaskChange={this.handleTaskChange}
        />
      );
    }

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <Paper
          className={classes.root}
          style={style}
          elevation={1}
          display="flex"
        >
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
              tabIndex="-1"
            />
            {alarm && (
              <Typography
                variant="subtitle2"
                component="p"
                className={classes.alarm}
              >
                {alarm.text} : {alarm.day} - {alarm.month} - {alarm.year}
              </Typography>
            )}
          </>
          {Input}
          <NoteSettings
            onDelete={onDelete}
            noteID={noteID}
            onColorSelect={this.handleColorSelect}
            onAlarmAdd={this.handleAlarmAdd}
            onSave={this.handleSave}
            visible={true}
            isEditing={true}
            isModal={true}
          />
        </Paper>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(EditNote);
