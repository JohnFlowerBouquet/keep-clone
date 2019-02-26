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
    margin: theme.spacing.unit * 0.5,
    width: "250px"
  },
  title: {
    marginBottom: "1rem",
    cursor: "default"
  },
  text: {
    cursor: "default"
  }
});

class NoteLayout extends React.Component {
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

  handleCheck(name) {
    this.setState(
      ({ tasks }) => ({
        tasks: tasks.map(task =>
          task.name === name ? { name: task.name, isDone: !task.isDone } : task
        )
      }),
      () => this.props.onUpdate(this.state)
    );
  }
  render() {
    const { classes } = this.props,
      { title, tasks, text } = this.state;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} variant="h6" component="h3">
          {title}
        </Typography>
        <List className={classes.list}>
          {tasks.map(({ name, isDone }) => (
            <ListItem key={name} className={classes.item}>
              <Checkbox
                className={classes.itemCheckbox}
                checked={isDone}
                onClick={e => {
                  e.stopPropagation();
                  this.handleCheck(name);
                }}
                checkedIcon={<CheckBoxOutlined />}
                disableRipple
              />
              <ListItemText className={classes.itemText} primary={name} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
          {text && (
            <InputBase className={classes.text} multiline value={text} />
          )}
        </List>
      </Paper>
    );
  }
}

NoteLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoteLayout);
