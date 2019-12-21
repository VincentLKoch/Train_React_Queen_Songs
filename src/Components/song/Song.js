import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

export const Song = props => {
  const getStyle = selected => {
    if (selected && !props.isSelectedList) {
      return id % 2 == 1
      ? { backgroundColor: "lightblue" }
        : { backgroundColor: "lightyellow" };
    }
    return {};
  };

  const { id, title, selected } = props.song;
  return (
    <div className="song-row" style={getStyle(selected)}>
      <p>
        <Button
          fullWidth="true"
          type="button"
          id="song"
          checked={selected} // allow check box match selected, in case of a selected = true when launching
          onClick={props.selectSong.bind(this, id)}>
          {title}
        </Button>
      </p>
    </div>
  );
};

// PropsTypes
Song.propTypes = {
  song: PropTypes.shape({
    //shape of Song object
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired,

  isSelectedList: PropTypes.bool.isRequired,
  selectSong: PropTypes.func.isRequired // function to call when song is selected
};

export default Song;
