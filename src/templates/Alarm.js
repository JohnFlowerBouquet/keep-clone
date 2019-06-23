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
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography
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
  date: {
    marginTop: "10px"
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
  const [alarm, setAlarm] = React.useState({
    day: formatNumber(today.getDate()),
    month: formatNumber(today.getMonth() + 1),
    year: today.getFullYear(),
    hh: formatNumber(today.getHours() < 23 ? today.getHours() + 1 : 0),
    mm: formatNumber(today.getMinutes()),
    label: "Time left"
  });
  const prevAlarmState = usePreviousAlarmState(alarm);

  function usePreviousAlarmState(alarm) {
    const ref = useRef();
    useEffect(() => {
      ref.current = alarm;
    });
    return ref.current;
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(alarm);
    setAlarm({ ...prevAlarmState, [name]: value });
    return;
  }

  function formatNumber(num) {
    return num.toString().length < 2 ? "0" + num : num;
  }
  //TODO check input date
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
    onAlarmAdd(alarm, noteID);
    e.stopPropagation();
    handleClose();
  }

  function handleAlarmType(alarm) {
    if (alarm.label === "Time left") {
      const futureDate = `${alarm.year}-${alarm.month}-${alarm.day}T${
        alarm.hh
      }:${alarm.mm}:00`;
      const countDownDate = new Date(futureDate).getTime();
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      return `${days > 0 ? days + "d" : ""} ${days < 2 ? hours + "h" : ""} ${
        days < 1 ? minutes + "m" : ""
      }`;
    }
    if (alarm.label === "On date") {
      return `${alarm.day} - ${alarm.month} - ${alarm.year}`;
    }
  }

  /*const handleChange = name => event => {
    setAlarm({ ...date, [name]: event.target.value });
  };
  const handleClick = () => {
    this.setState({ isOpen: true });
}

handleCancel = () => {
    this.setState({ isOpen: false });
}*/

  return (
    <div className={classes.root} onClick={e => e.stopPropagation()}>
      <div className={classes.label}>
        <Typography variant="h6" gutterBottom>
          {alarm.label} : {handleAlarmType(alarm)}
        </Typography>
      </div>
      <div className={classes.type}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Alarm type"
            name="label"
            value={alarm.label}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="Time left"
              control={<Radio color="primary" />}
              label="Time left"
              labelPlacement="top"
            />
            <FormControlLabel
              value="On date"
              control={<Radio color="primary" />}
              label="On date"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.alarm}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.formLabel} htmlFor="input-day">
            DD
          </InputLabel>
          <Input
            className={classes.inputTwoChars}
            id="input-dD"
            name="day"
            value={alarm.day}
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
            value={alarm.month}
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
            value={alarm.year}
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
            value={alarm.hh}
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
            value={alarm.mm}
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
