import React from "react";
import PropTypes from "prop-types";

export const Song = props => {
  const getStyle = selected => {
    return selected && !props.isSelectedList
      ? { backgroundColor: "lightblue" }
      : {};
  };

  const { id, title, selected } = props.song;
  return (
    <div className="song-row" style={getStyle(selected)}>
      <p>
        <input
          type="checkbox"
          className="checkbox"
          checked={selected} // allow check box match selected, in case of a selected = true when launching
          onChange={props.selectSong.bind(this, id)}
        />
        &nbsp;
        {title}
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
