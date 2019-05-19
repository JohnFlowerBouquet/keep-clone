import React, { Component } from "react";
import { withStyles, CssBaseline } from "@material-ui/core";
import Header from "./Header";
import NoteInput from "./AddNote";
import Grid from "./Grid";
import ModalComponent from "./Modal";
import { Notes } from "../store";

class App extends Component {
  state = {
    Notes,
    searchResults: null,
    wordToMatch: "",
    actvieNote: {},
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
      actvieNote: Notes.find(note => note.id === id),
      editMode: true
    }));

  handleNoteCloseEdit = () =>
    this.setState(() => ({
      actvieNote: {},
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
  handleDeleteNote = id =>
    this.setState(({ Notes }) => ({
      Notes: [...Notes.filter(note => note.id !== id)]
    }));

  handleSearch = wordToMatch =>
    this.setState(() => ({
      wordToMatch: wordToMatch
    }));

  render() {
    const { Notes, wordToMatch, editMode, actvieNote } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header
          handleSearch={this.handleSearch}
          wordToMatch={this.state.wordToMatch}
        />
        <NoteInput
          onAdd={this.handleAddNote}
          isOpen={this.state.isOpen}
          type={this.state.type}
          handleClick={this.handleClick}
        />
        <Grid
          notes={Notes}
          onSelect={this.handleNoteSelectEdit}
          onUpdate={this.handleUpdateNotes}
          editedNoteID={this.state.actvieNote.id}
          onDelete={this.handleDeleteNote}
          wordToMatch={wordToMatch}
        />
        <ModalComponent
          editMode={editMode}
          onDeselect={this.handleNoteCloseEdit}
          onUpdate={this.handleUpdateNotes}
          actvieNote={actvieNote}
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

/*editMode && actvieNote.id === note.id ? (
            <React.Fragment key={actvieNote.id}>
              <Grid item style={{ width: "260px" }} />
              
            </React.Fragment>
          )*/
