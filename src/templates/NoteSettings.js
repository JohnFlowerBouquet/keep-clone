import React from "react";
import PropTypes from "prop-types";
import { withStyles, IconButton } from "@material-ui/core";
import { Delete, ColorLens, AlarmAdd } from "@material-ui/icons";

const styles = theme => ({
  visible: {
    opacity: "1",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    textAlign: "end"
  },
  invisible: {
    opacity: "0",
    textAlign: "end"
  }
});

const DeleteButton = ({ noteID, handleDelete }) => {
  const onDelete = e => {
    e.stopPropagation();
    handleDelete(noteID);
  };
  return (
    <IconButton
      color="primary"
      aria-label="Delete note"
      size="small"
      onClick={onDelete}
    >
      <Delete />
    </IconButton>
  );
};

const ColorsButton = ({ noteID, handleDelete }) => {
  const onDelete = e => {
    e.stopPropagation();
    handleDelete(noteID);
  };
  return (
    <IconButton
      color="primary"
      aria-label="Delete note"
      size="small"
      onClick={onDelete}
    >
      <ColorLens />
    </IconButton>
  );
};

const AlarmButton = ({ noteID, handleDelete }) => {
  const onDelete = e => {
    e.stopPropagation();
    handleDelete(noteID);
  };
  return (
    <IconButton
      color="primary"
      aria-label="Delete note"
      size="small"
      onClick={onDelete}
    >
      <AlarmAdd />
    </IconButton>
  );
};

const NoteSettings = ({ classes, hover, noteID, handleDelete }) => {
  return (
    <div className={hover ? classes.visible : classes.invisible}>
      <DeleteButton handleDelete={handleDelete} noteID={noteID} />
      <ColorsButton handleDelete={handleDelete} noteID={noteID} />
      <AlarmButton handleDelete={handleDelete} noteID={noteID} />
    </div>
  );
};

NoteSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoteSettings);
