import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Modal } from "@material-ui/core";
import NoteLayout from "../Notes/NoteLayout";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    padding: "3rem"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export class Grid extends Component {
  handleModalClose = () => {
    this.props.onDeselect();
  };
  render() {
    const {
      classes,
      notes,
      onSelect,
      onCheck,
      onUpdate,
      editMode,
      note
    } = this.props;

    return (
      <div className={classes.root}>
        {notes.map(not =>
          editMode && note.id === not.id ? (
            <>
              <div key={not.title} style={{ width: "260px" }} />
              <Modal
                key={note.id}
                open={editMode}
                onClose={this.handleModalClose}
                className={classes.modal}
              >
                <NoteLayout
                  tabindex="-1"
                  key={not.id}
                  note={not}
                  onCheck={onCheck}
                  onUpdate={onUpdate}
                />
              </Modal>
            </>
          ) : (
            <div key={not.id} onClick={() => onSelect(not.id)}>
              <NoteLayout key={not.id} note={not} onUpdate={onUpdate} />
            </div>
          )
        )}
      </div>
    );
  }
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Grid);
