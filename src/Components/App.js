import React, { Component } from "react";
import { withStyles, CssBaseline } from "@material-ui/core";
import Header from "./Header";
import AddNote from "./AddNote";
import Grid from "./Grid";
import ModalComponent from "./Modal";
import { Notes } from "../store";

const styles = {
  root: {
    padding: "3rem"
  }
};

class App extends Component {
  state = {
    Notes,
    wordToMatch: "",
    actvieNote: {},
    editMode: false,
    isOpen: false,
    type: ""
  };

  selectNoteType = type => {
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

  handleCheck = (noteID, taskID) => {
    this.setState(({ Notes }) => ({
      Notes: Notes.map(note =>
        note.id === noteID
          ? {
              ...note,
              tasks: note.tasks.map(task =>
                task.id === taskID ? { ...task, isDone: !task.isDone } : task
              )
            }
          : note
      )
    }));
  };

  render() {
    const { Notes, wordToMatch, editMode, actvieNote } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header
          handleSearch={this.handleSearch}
          wordToMatch={this.state.wordToMatch}
        />
        <AddNote
          onAdd={this.handleAddNote}
          isOpen={this.state.isOpen}
          type={this.state.type}
          selectNoteType={this.selectNoteType}
        />
        <Grid
          notes={Notes}
          onSelect={this.handleNoteSelectEdit}
          handleCheck={this.handleCheck}
          editedNote={actvieNote}
          onDelete={this.handleDeleteNote}
          wordToMatch={wordToMatch.toUpperCase()}
        />
        <ModalComponent
          editMode={editMode}
          onDeselect={this.handleNoteCloseEdit}
          onUpdate={this.handleUpdateNotes}
          editedNote={actvieNote}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
