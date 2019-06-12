import React from "react";
import PropTypes from "prop-types";
import { withStyles, IconButton } from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";

const Favorite = withStyles(theme => ({
  favorite: {
    position: "absolute",
    right: "0",
    top: "0",
    opacity: "1",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  invisible: {
    opacity: "0",
    position: "absolute",
    right: "0",
    top: "0"
  }
}))(({ classes, noteID, isFavorite, visible, handleFavorite }) => {
  const toggleFavorite = e => {
    e.stopPropagation();
    handleFavorite(noteID);
  };
  return (
    <IconButton
      color="primary"
      aria-label="Directions"
      onClick={toggleFavorite}
      className={visible ? classes.favorite : classes.invisible}
    >
      {isFavorite ? <Star /> : <StarBorder />}
    </IconButton>
  );
});

Favorite.propTypes = {
  noteID: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired
};

export default Favorite;
