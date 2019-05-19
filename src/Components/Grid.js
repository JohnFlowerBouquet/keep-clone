import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import Note from "../templates/Note";

const styles = theme => ({
  root: {
    margin: "3rem auto",
    padding: "5px",
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      padding: "0 10vw"
    }
  },
  ghost: {
    visibility: "hidden"
  }
});

export class Table extends Component {
  render() {
    const {
      classes,
      notes,
      onSelect,
      onUpdate,
      editedNoteID,
      onDelete,
      wordToMatch
    } = this.props;

    const searchResults = () => {
      const regex = new RegExp(wordToMatch, "i");
      return wordToMatch ? notes.filter(note => note.title.match(regex)) : null;
    };
    const renderNotes = searchResults() ? searchResults() : notes;
    return (
      <Grid className={classes.root} container justify="flex-start">
        {renderNotes.map(note => (
          <Grid
            item
            xs={12}
            sm={"auto"}
            key={note.id}
            onClick={() => onSelect(note.id)}
          >
            <Note
              key={note.id}
              note={note}
              className={note.id === editedNoteID ? classes.ghost : null}
              wordToMatch={wordToMatch}
              onUpdate={onUpdate}
              handleDeleteNote={onDelete}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Table);
