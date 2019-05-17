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

    render() {
      const { title, text, tasks } = this.state;
      const { classes, handleClick, type, isOpen } = this.props;
      let Input;
      if (!isOpen) {
        Input = (
          <div className={classes.textContainer}>
            <Typography
              className={classes.text}
              onClick={() => handleClick("note")}
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
          <Paper className={classes.root} elevation={1} display="flex">
            {isOpen && (
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
            )}
            {Input}

            {!isOpen && (
              <div className={classes.buttonsContainer}>
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
              </div>
            )}
          </Paper>
        </ClickAwayListener>
      );
    }
  }
);
