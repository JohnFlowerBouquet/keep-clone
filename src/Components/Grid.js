import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Typography } from "@material-ui/core";
import Note from "../templates/Note";

const styles = theme => ({
  root: {
    margin: "0 auto 3rem",
    padding: "5px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 10vw"
    }
  },
  subheading: {
    margin: "0 13px",
    [theme.breakpoints.up("sm")]: {
      margin: "0 10vw"
    }
  },
  ghost: {
    opacity: 0
  }
});

export class GridComponent extends PureComponent {
  render() {
    const {
      classes,
      notes,
      onSelect,
      handleCheck,
      editedNote,
      onDelete,
      wordToMatch,
      handleFavorite,
      handleColorSelect,
      handleAlarmAdd
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
    const favoriteNotes = [];
    const regularNotes = [];
    renderNotes.length &&
      renderNotes.forEach(note =>
        note.isFavorite ? favoriteNotes.push(note) : regularNotes.push(note)
      );

    return (
      <>
        {favoriteNotes.length > 0 && (
          <>
            <Typography className={classes.subheading}>Favorites</Typography>
            <Grid className={classes.root} container justify="flex-start">
              {favoriteNotes.map(note => (
                <Grid
                  item
                  xs={12}
                  sm={"auto"}
                  key={note.id}
                  className={note.id === editedNote ? classes.ghost : null}
                >
                  <Note
                    note={note}
                    wordToMatch={wordToMatch}
                    handleCheck={handleCheck}
                    handleFavorite={handleFavorite}
                    onDelete={onDelete}
                    onSelect={onSelect}
                    handleColorSelect={handleColorSelect}
                    handleAlarmAdd={handleAlarmAdd}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {favoriteNotes.length > 0 && (
          <Typography className={classes.subheading}>Others</Typography>
        )}
        <Grid className={classes.root} container justify="flex-start">
          {regularNotes.map(note => (
            <Grid
              item
              xs={12}
              sm={"auto"}
              key={note.id}
              className={note.id === editedNote ? classes.ghost : null}
            >
              <Note
                note={note}
                wordToMatch={wordToMatch}
                handleCheck={handleCheck}
                handleFavorite={handleFavorite}
                onDelete={onDelete}
                onSelect={onSelect}
                handleColorSelect={handleColorSelect}
                handleAlarmAdd={handleAlarmAdd}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

GridComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  editedNote: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  wordToMatch: PropTypes.string.isRequired
};

GridComponent.defaultProps = {
  editedNote: ""
};

export default withStyles(styles)(GridComponent);
