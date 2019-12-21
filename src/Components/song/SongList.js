import React from "react";
import Song from "./Song";
import PropTypes from "prop-types";

export const SongList = props => {
  if (props.isSelectedList) {
    //only selected song list, no need to sort the all song list
    return props.songlist
      .sort((S1, S2) => S1.id - S2.id) //We can also sort with title but id should be faster
      .map(song => (
        <Song
          key={song.id}
          song={song}
          isSelectedList={props.isSelectedList}
          selectSong={props.selectSong}
        />
      ));
  }

  return props.songlist.map(song => (
    <Song
      key={song.id}
      song={song}
      isSelectedList={props.isSelectedList}
      selectSong={props.selectSong}
    />
  ));
};

// PropsTypes
SongList.propTypes = {
  isSelectedList: PropTypes.bool.isRequired,

  songlist: PropTypes.arrayOf(
    PropTypes.shape({
      //shape of Song object
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,

  selectSong: PropTypes.func.isRequired // function to call when song is selected
};
