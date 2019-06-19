import React, { useEffect, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { AlarmAdd } from "@material-ui/icons";
import { IconButton, Tooltip, Popper, Fade, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    color: "black"
  }
});

const Alarm = ({ noteID = null }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });

  function handleChange(event) {
    event.stopPropagation();
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-label-placeholder">
          Age
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={e => e.stopPropagation()} value={10}>
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
    </form>
  );
};

const AlarmButton = ({ handleOpen }) => {
  const onOpen = e => {
    e.stopPropagation();
    handleOpen(e);
  };
  return (
    <Tooltip title="Add alarm" placement="bottom">
      <IconButton
        color="primary"
        aria-label="Add alarm"
        size="small"
        onClick={onOpen}
      >
        <AlarmAdd />
      </IconButton>
    </Tooltip>
  );
};

const AddAlarm = ({ noteID, isEditing = false, visible }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "alarm-popper" : undefined;

  function handleOpen(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }
  function handleClose() {
    //setAnchorEl(null);
  }

  useEffect(() => {
    if (!visible) {
      setAnchorEl(null);
    }
  }, [visible]);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <>
        <AlarmButton aria-describedby={id} handleOpen={handleOpen} />
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="top"
          disablePortal={isEditing ? true : false}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Alarm noteID={noteID} />
              </Paper>
            </Fade>
          )}
        </Popper>
      </>
    </ClickAwayListener>
  );
};

export default AddAlarm;
