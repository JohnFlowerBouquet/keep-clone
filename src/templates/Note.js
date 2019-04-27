import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  InputBase
} from "@material-ui/core";
import { CheckBoxOutlined } from "@material-ui/icons";

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
  title: {
    cursor: "default",
    overflowWrap: "break-word"
  },
  text: {
    cursor: "default"
  },
  item: {
    padding: "0"
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
  render() {
    const { classes } = this.props,
      { title, tasks, text } = this.state;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} variant="h6" component="h3">
          {title}
        </Typography>
        <List className={classes.list}>
          {tasks.map(({ text, isDone, id }) => (
            <ListItem key={id} className={classes.item}>
              <Checkbox
                className={classes.itemCheckbox}
                checked={isDone}
                onClick={e => {
                  e.stopPropagation();
                  this.handleCheck(id);
                }}
                checkedIcon={<CheckBoxOutlined />}
                disableRipple
              />
              <ListItemText className={classes.itemText} primary={text} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
          {text && (
            <InputBase
              className={classes.text}
              multiline
              fullWidth
              value={text}
            />
          )}
        </List>
      </Paper>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Note);
