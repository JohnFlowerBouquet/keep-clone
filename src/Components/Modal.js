import React from "react";
import { Modal, withStyles } from "@material-ui/core";
import EditNote from "./EditNote";

const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const ModalComponent = ({
  classes,
  onDeselect,
  editMode,
  editedNote,
  onUpdate,
  onDelete
}) => {
  return (
    <Modal
      open={editMode}
      onClose={onDeselect}
      className={classes.modal}
      disableAutoFocus
    >
      <EditNote
        note={editedNote}
        onUpdate={onUpdate}
        focus={true}
        onDelete={onDelete}
      />
    </Modal>
  );
};

export default withStyles(styles)(ModalComponent);
