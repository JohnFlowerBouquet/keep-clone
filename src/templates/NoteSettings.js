import React from "react";
import PropTypes from "prop-types";
import { withStyles, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const styles = theme => ({
  visible: {
    opacity: "1",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  invisible: {
    opacity: "0"
  }
});

const DeleteButton = ({ noteID, handleDelete }) => {
  const onDelete = e => {
    e.stopPropagation();
    handleDelete(noteID);
  };
  return (
    <IconButton color="primary" aria-label="Directions" onClick={onDelete}>
      <Delete />
    </IconButton>
  );
};

const NoteSettings = ({ classes, hover, noteID, handleDelete }) => {
  return (
    <div className={hover ? classes.visible : classes.invisible}>
      <DeleteButton handleDelete={handleDelete} noteID={noteID} />
    </div>
  );
};

NoteSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoteSettings);
