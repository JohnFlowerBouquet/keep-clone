import React, { Component } from "react";
import { withStyles, CssBaseline } from "@material-ui/core";
import Header from "./Layout/Header";
import NoteInput from "./Notes/NoteInput";
import Grid from "./Layout/Grid";
import { Notes } from "../store";

class App extends Component {
  state = {
    Notes,
    note: {},
    editMode: false
  };

  handleNoteSelectEdit = id =>
    this.setState(({ Notes }) => ({
      note: Notes.find(note => note.id === id),
      editMode: true
    }));

  handleNoteCloseEdit = () =>
    this.setState(() => ({
      note: {},
      editMode: false
    }));

  handleUpdateNotes = updatedNote =>
    this.setState(({ Notes }) => ({
      Notes: [
        ...Notes.map(note => (note.id === updatedNote.id ? updatedNote : note))
      ]
    }));

  handleAddNote = addedNote =>
    this.setState(({ Notes }) => ({
      Notes: [...Notes, addedNote]
    }));

  render() {
    const { Notes } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <NoteInput onAdd={this.handleAddNote} />
        <Grid
          notes={Notes}
          onSelect={this.handleNoteSelectEdit}
          onDeselect={this.handleNoteCloseEdit}
          onUpdate={this.handleUpdateNotes}
          editMode={this.state.editMode}
          note={this.state.note}
        />
      </React.Fragment>
    );
  }
}

const styles = {
  root: {
    padding: "3rem"
  }
};

export default withStyles(styles)(App);
