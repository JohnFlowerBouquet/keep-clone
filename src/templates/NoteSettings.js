import React from "react";
import PropTypes from "prop-types";
import { withStyles, IconButton } from "@material-ui/core";
import { Delete, AlarmAdd, Save } from "@material-ui/icons";
import ColorsPalette from "./ColorsPalette";

const styles = theme => ({
  visible: {
    opacity: "1",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    display: "table",
    marginLeft: "auto"
  },
  invisible: {
    opacity: "0",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    display: "table",
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
    <IconButton color="primary" aria-label="Set alarm" size="small">
      <AlarmAdd />
    </IconButton>
  );
};

const SaveButton = ({ noteID, onSave }) => {
  const handleSave = e => {
    e.stopPropagation();
    onSave();
  };
  return (
    <IconButton
      color="primary"
      aria-label="Save note"
      size="small"
      onClick={handleSave}
    >
      <Save />
    </IconButton>
  );
};

const NoteSettings = ({
  classes,
  visible,
  noteID,
  onDelete,
  onSave,
  onColorSelect,
  isEditing
}) => {
  return (
    <div className={visible ? classes.visible : classes.invisible}>
      {isEditing && <SaveButton noteID={noteID} onSave={onSave} />}
      <ColorsPalette noteID={noteID} onColorSelect={onColorSelect} />
      <AlarmButton noteID={noteID} />
      <DeleteButton noteID={noteID} onDelete={onDelete} />
    </div>
  );
};

NoteSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoteSettings);
