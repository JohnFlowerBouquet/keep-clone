import React from "react";
import PropTypes from "prop-types";
import { withStyles, IconButton } from "@material-ui/core";
import { Delete, AlarmAdd } from "@material-ui/icons";
import ColorsPalette from "./ColorsPalette";

const styles = theme => ({
  visible: {
    opacity: "1",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    marginLeft: "auto"
  },
  invisible: {
    opacity: "0",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    marginLeft: "auto"
  }
});

const DeleteButton = ({ noteID = null, onDelete }) => {
  const handleDelete = e => {
    e.stopPropagation();
    onDelete(noteID);
  };
  const handleClear = e => {
    e.stopPropagation();
    onDelete();
  };
  return (
    <IconButton
      color="primary"
      aria-label="Delete note"
      size="small"
      onClick={noteID ? handleDelete : handleClear}
    >
      <Delete />
    </IconButton>
  );
};

const AlarmButton = ({ noteID }) => {
  return (
    <IconButton color="primary" aria-label="Delete note" size="small">
      <AlarmAdd />
    </IconButton>
  );
};

const NoteSettings = ({
  classes,
  visible,
  noteID,
  onDelete,
  onColorSelect
}) => {
  return (
    <div className={visible ? classes.visible : classes.invisible}>
      <DeleteButton onDelete={onDelete} noteID={noteID} />
      <ColorsPalette onColorSelect={onColorSelect} noteID={noteID} />
      <AlarmButton noteID={noteID} />
    </div>
  );
};

NoteSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoteSettings);
