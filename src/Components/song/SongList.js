import React, { Component } from "react";
import Song from "./Song";
import PropTypes from "prop-types";

class SongList extends Component {
  render() {
    if (this.props.isSelectedList) {
      //only selected song list, no need to sort the all song list
      return this.props.songlist
        .sort((S1, S2) => S1.id - S2.id) //We can also sort with title but id should be faster
        .map(song => (
          <Song
            key={song.id}
            song={song}
            isSelectedList={this.props.isSelectedList}
            selectSong={this.props.selectSong}
          />
        ));
    }

    return this.props.songlist.map(song => (
      <Song
        key={song.id}
        song={song}
        isSelectedList={this.props.isSelectedList}
        selectSong={this.props.selectSong}
      />
    ));
  }
}

// PropsTypes
SongList.propTypes = {
  songlist: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SongList;
