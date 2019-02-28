import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Modal, Grid } from "@material-ui/core";
import NoteLayout from "../Notes/NoteLayout";

const styles = theme => ({
  root: {
    margin: "3rem auto",
    padding: "5px",
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      padding: "0 10vw"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export class Table extends Component {
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
      <Grid className={classes.root} container justify="flex-start">
        {notes.map(not =>
          editMode && note.id === not.id ? (
            <>
              <Grid item key={not.title} style={{ width: "260px" }} />
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
            <Grid
              item
              xs={12}
              sm={"auto"}
              key={not.id}
              onClick={() => onSelect(not.id)}
            >
              <NoteLayout key={not.id} note={not} onUpdate={onUpdate} />
            </Grid>
          )
        )}
      </Grid>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Table);
