import React, { Component } from "react";
import {
  withStyles,
  Paper,
  InputBase,
  ClickAwayListener,
  IconButton
} from "@material-ui/core/";
import { ColorLens } from "@material-ui/icons";
import Checklist from "./Checklist";

const styles = theme => ({
  root: {
    display: "flex",
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
    [theme.breakpoints.up("sm")]: {
      width: "100%"
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

  handleClickAway = () => {
    const editedNote = this.state;
    editedNote.tasks.pop();
    this.props.onUpdate(editedNote);
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

  render() {
    const { title, text, tasks } = this.state;
    const { classes, handleClick } = this.props;
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
        <Paper className={classes.root} elevation={1} display="flex">
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
          {Input}
          <IconButton
            color="primary"
            onClick={() => handleClick("list")}
            className={classes.iconButton}
            aria-label="Add List Note"
            name="list"
          >
            <ColorLens />
          </IconButton>
        </Paper>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(EditNote);
