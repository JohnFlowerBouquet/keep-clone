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
      handleCheck,
      editedNote,
      onDelete,
      wordToMatch
    } = this.props;

    const searchResults = () => {
      return wordToMatch
        ? notes.filter(note => {
            if (note.text) {
              return (
                note.title.toUpperCase().includes(wordToMatch) |
                note.text.toUpperCase().includes(wordToMatch)
              );
            } else {
              return (
                note.title.toUpperCase().includes(wordToMatch) |
                note.tasks.some(task =>
                  task.text.toUpperCase().includes(wordToMatch)
                )
              );
            }
          })
        : null;
    };

    const renderNotes = wordToMatch ? searchResults() : notes;
    return (
      <Grid className={classes.root} container justify="flex-start">
        {renderNotes.map(note => (
          <Grid
            item
            xs={12}
            sm={"auto"}
            key={note.id}
            onClick={() => onSelect(note.id)}
            className={note.id === editedNote.id ? classes.ghost : null}
          >
            <Note
              key={note.id}
              note={note}
              wordToMatch={wordToMatch}
              handleCheck={handleCheck}
              onDelete={onDelete}
              onSelect={onSelect}
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
