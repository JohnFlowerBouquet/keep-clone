import React, { useEffect, useState, useRef } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { AlarmAdd, CheckCircle, Cancel } from "@material-ui/icons";
import {
  IconButton,
  Tooltip,
  Popper,
  Fade,
  Paper,
  Input,
  InputLabel,
  FormControl
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    padding: "6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  popper: {
    zIndex: "1400"
  },
  formControl: {
    marginTop: "10px"
  },
  formLabel: {
    left: "10%"
  },
  textField: {
    width: "50px"
  },
  inputTwoChars: {
    width: "22px"
  },
  inputFourChars: {
    width: "42px"
  }
});

const Alarm = ({ noteID = null, onAlarmAdd, handleClose }) => {
  const classes = useStyles();
  const today = new Date();
  const [date, setDate] = React.useState({
    day: formatNumber(today.getDay()),
    month: formatNumber(today.getMonth()),
    year: today.getFullYear(),
    hh: formatNumber(today.getHours()),
    mm: formatNumber(today.getMinutes()),
    text: "Time left"
  });
  const prevDate = usePreviousDate(date);

  function usePreviousDate(date) {
    const ref = useRef();
    useEffect(() => {
      ref.current = date;
    });
    return ref.current;
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (checkInput(name, value)) {
      setDate({ ...prevDate, [name]: value });
    }
    return;
  }

  function formatNumber(num) {
    return num.toString().length < 2 ? "0" + num : num;
  }

  function checkInput(name, value) {
    if (name === "day") {
      return value > 31 || value < 0 ? false : true;
    }
    if (name === "month") {
      return value > 12 || value < 0 ? false : true;
    }
    if (name === "year") {
      return value < 2019 ? false : true;
    }
    if (name === "hh") {
      return value > 24 || value < 0 ? false : true;
    }
    if (name === "mm") {
      return value > 60 || value < 0 ? false : true;
    }
  }

  function handleAlarmAdd(e) {
    e.stopPropagation();
    onAlarmAdd(date, noteID);
    handleClose();
  }

  /*const handleChange = name => event => {
    setDate({ ...date, [name]: event.target.value });
  };
  const handleClick = () => {
    this.setState({ isOpen: true });
}

handleCancel = () => {
    this.setState({ isOpen: false });
}*/

  return (
    <div className={classes.root} onClick={e => e.stopPropagation()}>
      <div className={classes.name}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.formLabel} htmlFor="input-name">
            Text
          </InputLabel>
          <Input
            className={classes.inputName}
            id="input-name"
            name="name"
            value={date.text}
            onChange={handleChange}
            inputProps={{
              style: {
                padding: "0"
              }
            }}
          />
        </FormControl>
      </div>
      <div className={classes.date}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.formLabel} htmlFor="input-day">
            DD
          </InputLabel>
          <Input
            className={classes.inputTwoChars}
            id="input-dD"
            name="day"
            value={date.day}
            onChange={handleChange}
            inputProps={{
              maxLength: "2",
              style: {
                padding: "0"
              }
            }}
            endAdornment={"-"}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.formLabel} htmlFor="input-month">
            MM
          </InputLabel>
          <Input
            className={classes.inputTwoChars}
            id="input-month"
            name="month"
            value={date.month}
            onChange={handleChange}
            inputProps={{
              maxLength: "2",
              style: {
                padding: "0"
              }
            }}
            endAdornment={"-"}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.formLabel} htmlFor="input-year">
            YYYY
          </InputLabel>
          <Input
            className={classes.inputFourChars}
            id="input-year"
            name="year"
            value={date.year}
            onChange={handleChange}
            inputProps={{
              maxLength: "4",
              style: {
                padding: "0"
              }
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-hour">HH</InputLabel>
          <Input
            className={classes.inputTwoChars}
            id="input-hour"
            name="hh"
            value={date.hh}
            onChange={handleChange}
            inputProps={{
              maxLength: "2",
              style: {
                padding: "0"
              }
            }}
            endAdornment={":"}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-minute">MM</InputLabel>
          <Input
            className={classes.inputTwoChars}
            id="input-minute"
            name="mm"
            value={date.mm}
            onChange={handleChange}
            inputProps={{
              maxLength: "2",
              style: {
                padding: "0"
              }
            }}
          />
        </FormControl>
      </div>
      <div className={classes.formControls}>
        <IconButton
          color="primary"
          aria-label="Change color"
          size="small"
          onClick={handleAlarmAdd}
        >
          <CheckCircle />
        </IconButton>
        <IconButton color="primary" aria-label="Change color" size="small">
          <Cancel />
        </IconButton>
      </div>
    </div>
  );
};

const AlarmButton = ({ handleOpen }) => {
  const onOpen = e => {
    e.stopPropagation();
    handleOpen(e);
  };
  return (
    <Tooltip title="Add alarm" placement="bottom">
      <IconButton color="primary" aria-label="Add alarm" onClick={onOpen}>
        <AlarmAdd />
      </IconButton>
    </Tooltip>
  );
};

const AddAlarm = ({ noteID, onAlarmAdd, isEditing = false, visible }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "alarm-popper" : undefined;

  function handleOpen(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
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
          className={classes.popper}
          transition
          placement="bottom"
          disablePortal={isEditing ? true : false}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Alarm
                  noteID={noteID}
                  onAlarmAdd={onAlarmAdd}
                  handleClose={handleClose}
                />
              </Paper>
            </Fade>
          )}
        </Popper>
      </>
    </ClickAwayListener>
  );
};

export default AddAlarm;
