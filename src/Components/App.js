import React, { Component } from "react";
import { withStyles, CssBaseline } from "@material-ui/core";
import Header from "./Header";
import NoteInput from "./AddNote";
import Grid from "./Grid";
import { Notes } from "../store";

class App extends Component {
  state = {
    Notes,
    note: {},
    editMode: false,
    isOpen: false,
    type: ""
  };

  handleClick = type => {
    this.setState(() => ({
      type: type,
      isOpen: true
    }));
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

  handleAddNote = addedNote => {
    if (addedNote.title || addedNote.text || addedNote.tasks.length > 1) {
      this.setState(({ Notes }) => ({
        Notes: [...Notes, { ...addedNote, id: new Date().getTime() }],
        isOpen: false,
        type: ""
      }));
    } else {
      this.setState(() => ({
        isOpen: false,
        type: ""
      }));
    }
  };

  render() {
    const { Notes } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <NoteInput
          onAdd={this.handleAddNote}
          isOpen={this.state.isOpen}
          type={this.state.type}
          handleClick={this.handleClick}
        />
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
