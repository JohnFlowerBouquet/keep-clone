import React, { useEffect, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { ColorLens, Lens } from "@material-ui/icons";
import { IconButton, Tooltip, Popper, Fade, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "50%"
  }
});

const Colors = ({ colors, onColorSelect, noteID = null }) => {
  const colorsArr = Object.entries(colors);
  const classes = useStyles();
  return colorsArr.map(([name, value]) => {
    const handleColorSelect = e => {
      e.stopPropagation();
      onColorSelect(value, noteID);
    };
    const style = {
      color: value
    };
    return (
      <IconButton
        onClick={handleColorSelect}
        aria-label={name}
        size="small"
        key={value}
        style={style}
      >
        <Lens className={classes.root} />
      </IconButton>
    );
  });
};

const ColorsButton = ({ handleOpen }) => {
  const onOpen = e => {
    e.stopPropagation();
    handleOpen(e);
  };
  return (
    <Tooltip title="Change color" placement="bottom">
      <IconButton color="primary" aria-label="Change color" onClick={onOpen}>
        <ColorLens />
      </IconButton>
    </Tooltip>
  );
};

const ColorsPalette = ({
  onColorSelect,
  noteID,
  isEditing = false,
  visible
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "colors-popper" : undefined;
  const colors = {
    white: "#ffffff",
    red: "#f15152",
    green: "#ccff90",
    blue: "#cbf0f8"
  };

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
        <ColorsButton aria-describedby={id} handleOpen={handleOpen} />
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="top-start"
          disablePortal={isEditing ? true : false}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Colors
                  colors={colors}
                  onColorSelect={onColorSelect}
                  noteID={noteID}
                />
              </Paper>
            </Fade>
          )}
        </Popper>
      </>
    </ClickAwayListener>
  );
};

export default ColorsPalette;
