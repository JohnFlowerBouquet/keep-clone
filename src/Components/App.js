import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "./Header";
import AddNote from "./AddNote";
import Grid from "./Grid";
import ModalComponent from "./Modal";
import * as store from "../store.json";

const styles = {
  root: {
    padding: "3rem"
  }
};

class App extends Component {
  state = {
    Notes: store.notes,
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

  handleNoteSelect = id =>
    this.setState(({ Notes }) => ({
      activeNote: Notes.find(note => note.id === id),
      editMode: true
    }));

  handleModalClose = () =>
    this.setState(() => ({
      activeNote: {},
      editMode: false
    }));

  handleUpdateNotes = updatedNote =>
    this.setState(
      ({ Notes }) => ({
        Notes: [
          ...Notes.map(note =>
            note.id === updatedNote.id ? updatedNote : note
          )
        ]
      }),
      () => this.state.editMode && this.handleModalClose()
    );

  handleAddNote = addedNote => {
    if (addedNote.title || addedNote.text || addedNote.tasks.length > 1) {
      this.setState(({ Notes }) => ({
        Notes: [{ ...addedNote }, ...Notes],
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
      Notes: [...Notes.filter(note => note.id !== id)],
      editMode: false
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

  handleColorSelect = (color, noteID) =>
    this.setState(({ Notes }) => ({
      Notes: [
        ...Notes.map(note =>
          note.id === noteID ? { ...note, color: color } : note
        )
      ]
    }));

  handleAlarmAdd = (alarm, noteID) =>
    this.setState(
      ({ Notes }) => ({
        Notes: [
          ...Notes.map(note =>
            note.id === noteID ? { ...note, alarm: alarm } : note
          )
        ]
      }),
      () => console.log(this.state)
    );

  render() {
    const { Notes, wordToMatch, editMode, activeNote } = this.state;
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch} wordToMatch={wordToMatch} />
        <AddNote
          onAdd={this.handleAddNote}
          isOpen={this.state.isOpen}
          type={this.state.type}
          selectNoteType={this.selectNoteType}
          handleFavorite={this.handleFavorite}
        />
        <Grid
          notes={Notes}
          onSelect={this.handleNoteSelect}
          handleCheck={this.handleCheck}
          handleFavorite={this.handleFavorite}
          editedNote={activeNote.id}
          onDelete={this.handleDeleteNote}
          wordToMatch={wordToMatch.toUpperCase()}
          handleColorSelect={this.handleColorSelect}
          handleAlarmAdd={this.handleAlarmAdd}
        />
        <ModalComponent
          editMode={editMode}
          onDeselect={this.handleModalClose}
          onUpdate={this.handleUpdateNotes}
          onDelete={this.handleDeleteNote}
          editedNote={activeNote}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
