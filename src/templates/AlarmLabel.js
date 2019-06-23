import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  alarm: {
    backgroundColor: "rgb(251, 140, 0, 0.1)",
    borderRadius: "0 10px 10px 0",
    padding: "2px",
    margin: "2px 0",
    marginLeft: props => (props.margin ? "" : "-16px")
  }
});

export default function AlarmLabel(props) {
  const classes = useStyles(props);
  const alarm = props.alarm;

  const handleAlarmType = function(alarm) {
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
  };
  return (
    <Typography variant="subtitle2" component="p" className={classes.alarm}>
      {alarm.label} : {handleAlarmType(alarm)}
    </Typography>
  );
}

AlarmLabel.propTypes = {
  alarm: PropTypes.object.isRequired
};
