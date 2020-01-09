import React from "react";
import Song from "./Song";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    if (this.props.isSelectedList) {
      //only selected song list, no need to sort the all song list
      return this.props.songlist
        .sort((S1, S2) => S1.id - S2.id) //We can also sort with title but id should be faster
        .map(song => <Song key={song.id} song={song} isSelectedList={true} />);
    } //else :
    return this.props.songlist.map(song => (
      <Song key={song.id} song={song} isSelectedList={false} />
    ));
  }
}

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
  ).isRequired
};

const mapStateToProps = (state, ownprops) => {
  const songlist = ownprops.isSelectedList
    ? state.songList.selectedSongList.filter(song =>
        song.title.toLowerCase().includes(state.filterSongs.filter[1])
      )
    : state.songList.songsList.filter(song =>
        song.title.toLowerCase().includes(state.filterSongs.filter[0])
      );
  return {
    songlist: songlist,
    isSelectedList: ownprops.isSelectedList
  };
};

export default connect(mapStateToProps, null)(SongList);
