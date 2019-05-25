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
    activeNote: {},
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
    this.setState(
      ({ Notes }) => ({
        activeNote: Notes.find(note => note.id === id)
      }),
      this.openModal()
    );

  openModal = () =>
    this.setState(() => ({
      editMode: true
    }));

  handleNoteCloseEdit = () =>
    this.setState(() => ({
      activeNote: {},
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
  handleFavorite = noteID =>
    this.setState(({ Notes }) => ({
      Notes: [
        ...Notes.map(note =>
          note.id === noteID ? { ...note, isFavorite: !note.isFavorite } : note
        )
      ]
    }));

  render() {
    const { Notes, wordToMatch, editMode, activeNote } = this.state;
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
          handleFavorite={this.handleFavorite}
          editedNote={activeNote.id}
          onDelete={this.handleDeleteNote}
          wordToMatch={wordToMatch.toUpperCase()}
        />
        <ModalComponent
          editMode={editMode}
          onDeselect={this.handleNoteCloseEdit}
          onUpdate={this.handleUpdateNotes}
          editedNote={activeNote}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
