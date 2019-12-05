import React, { Component } from "react";
import Song from "./Song";
import PropTypes from "prop-types";

class SongList extends Component {
  render() {
    return this.props.songlist.map(song => (
      <Song
        key={song.id}
        song={song}
        isAllSongList={this.props.isAllSongList}
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
