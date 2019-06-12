import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { ColorLens, Lens } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Colors = ({ colors, onColorSelect, noteID = null }) => {
  const colorsArr = Object.entries(colors);
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
        <Lens />
      </IconButton>
    );
  });
};

const ColorsButton = ({ handleTooltipOpen }) => {
  const onOpen = e => {
    e.stopPropagation();
    handleTooltipOpen();
  };
  return (
    <IconButton
      color="primary"
      aria-label="Delete note"
      size="small"
      onClick={onOpen}
    >
      <ColorLens />
    </IconButton>
  );
};

const ColorsPalette = ({ onColorSelect, noteID }) => {
  const [open, setOpen] = React.useState(false);
  const colors = {
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
  };

  function handleTooltipClose() {
    setOpen(false);
  }
  function handleTooltipOpen() {
    setOpen(true);
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <Colors
            colors={colors}
            onColorSelect={onColorSelect}
            noteID={noteID}
          />
        }
        placement="top"
        interactive
      >
        <ColorsButton handleTooltipOpen={handleTooltipOpen} />
      </Tooltip>
    </ClickAwayListener>
  );
};

export default ColorsPalette;
