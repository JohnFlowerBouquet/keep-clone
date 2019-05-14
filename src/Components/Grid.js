import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Modal, Grid } from "@material-ui/core";
import Note from "../templates/Note";
import EditNote from "./EditNote";

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
      onUpdate,
      editMode,
      actvieNote
    } = this.props;

    return (
      <Grid className={classes.root} container justify="flex-start">
        {notes.map(note =>
          editMode && actvieNote.id === note.id ? (
            <React.Fragment key={actvieNote.id}>
              <Grid item style={{ width: "260px" }} />
              <Modal
                open={editMode}
                onClose={this.handleModalClose}
                className={classes.modal}
              >
                <EditNote tabIndex="-1" note={note} onUpdate={onUpdate} />
              </Modal>
            </React.Fragment>
          ) : (
            <Grid
              item
              xs={12}
              sm={"auto"}
              key={note.id}
              onClick={() => onSelect(note.id)}
            >
              <Note key={note.id} note={note} onUpdate={onUpdate} />
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
