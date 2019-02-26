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

import Checklist from "./List";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: 400,
    margin: "5rem auto"
  },
  input: {
    display: "block",
    fontWeight: "bold",
    marginLeft: 8,
    flex: 1
  },
  inputActive: {
    width: 400,
    marginBottom: 10,
    flex: "initial"
  },
  iconButton: {
    padding: 10
  }
};

export default withStyles(styles)(
  class extends Component {
    state = {
      isOpen: false,
      type: "",
      note: {
        title: "",
        text: "",
        tasks: []
      }
    };

    handleClick = type => {
      this.setState(() => ({
        type: type,
        isOpen: true
      }));
    };

    handleClickAway = () => {
      if (this.state.isOpen) {
        (this.state.note.title !== "" || this.state.note.text) &&
          this.props.onAdd(this.state.note);
        this.setState(() => ({
          isOpen: false,
          note: {
            title: "",
            text: "",
            tasks: []
          }
        }));
      }
    };

    handleChange = ({ target: { value, name } }) =>
      this.setState(({ note }) => ({
        note: Object.assign(note, {
          [name]: value
        })
      }));

    /*handleAddingTask = () =>
      this.setState(({ note: { text, tasks } }) => ({
        note: Object.assign(note, {
          tasks: [...tasks, text]
        })
      }));*/

    render() {
      const {
        isOpen,
        type,
        note: { title, text }
      } = this.state;
      const { classes } = this.props;
      let Input;
      if (!isOpen) {
        Input = (
          <Typography
            className={classes.input}
            onClick={() => this.handleClick("note")}
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
          Input = <Checklist text={text} handleChange={this.handleChange} />;
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
                  onClick={() => this.handleClick("list")}
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
