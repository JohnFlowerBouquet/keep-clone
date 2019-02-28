import React, { Component } from "react";
import {
  withStyles,
  Paper,
  InputBase,
  IconButton,
  ClickAwayListener,
  Typography
} from "@material-ui/core/";

import {
  CheckBoxOutlined,
  Brush,
  InsertPhotoOutlined
} from "@material-ui/icons";

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
  input: {
    display: "block",
    fontWeight: "bold",
    marginLeft: 8,
    flex: 1
  },
  inputActive: {
    width: 300,
    marginBottom: 10,
    flex: "initial",
    [theme.breakpoints.up("sm")]: {
      width: 400
    }
  },
  iconButton: {
    padding: 5
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitialState();

    getInitialState() {
      const { note } = this.props;
      return note
        ? note
        : {
            text: "",
            title: "",
            tasks: [
              {
                text: "",
                isDone: false,
                id: new Date().getTime()
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

    handleClickAway = () => {
      const { isOpen } = this.props;
      if (isOpen) {
        const newNote = this.state;
        newNote.tasks.pop();
        this.props.onAdd(newNote);
      }
      this.setState(() => this.getInitialState());
    };

    handleChange = ({ target: { value, name } }) =>
      this.setState(() => ({
        [name]: value
      }));

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
      const { classes, handleClick, type, isOpen } = this.props;
      let Input;
      if (!isOpen) {
        Input = (
          <Typography
            className={classes.input}
            onClick={() => handleClick("note")}
          >
            Create Note...
          </Typography>
        );
      } else {
        if (type === "note") {
          Input = (
            <InputBase
              label="Note"
              autoComplete="off"
              className={[classes.input, classes.inputActive].join(" ")}
              value={text}
              name="text"
              onChange={this.handleChange}
              placeholder="Create Note..."
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
          <Paper className={classes.root} elevation={1}>
            {isOpen && (
              <InputBase
                label="Title"
                autoComplete="off"
                className={[classes.input, classes.inputActive].join(" ")}
                value={title}
                name="title"
                placeholder={"Add Title..."}
                onChange={this.handleChange}
              />
            )}
            {Input}

            {!isOpen && (
              <>
                <IconButton
                  color="primary"
                  onClick={() => handleClick("list")}
                  className={classes.iconButton}
                  aria-label="Add List Note"
                  name="list"
                >
                  <CheckBoxOutlined />
                </IconButton>
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
              </>
            )}
          </Paper>
        </ClickAwayListener>
      );
    }
  }
);
