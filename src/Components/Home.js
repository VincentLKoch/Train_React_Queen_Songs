import React from "react";

// Components : (all Stateless)
import SongList from "./song/SongList";
import { ValidatePlaylistButton } from "./ValidatePlaylistButton";
import SearchBar from "./song/SearchBar";

// Others
import { allSongs } from "../songs";

/* Import list of all songs, convert as object with id and selected boolean */
const allSongsObject = [];
for (let it = 0; it < allSongs.length; it++) {
  allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
}

class Home extends React.Component {
  //Home is the only component with state
  state = {
    allSongList: allSongsObject, // allSongsObject stay as the complete list, allSongList can be filter
    selectedSongList: [],
    resetChecked: false, // Switch if we reset when export
    filterContent: ["", ""], //text content of the filter bar
    /*
      selectedSongShadowList stock the complete list of selected song, we use it to filter selectedSongList
      */
    selectedSongShadowList: []
  };

  // filterList with search bar input:
  filterList = (title, isSelectedSongList) => {
    /* if the search bar is for filtering the selected song list or the other */
    if (isSelectedSongList) {
      this.setState({
        filterContent: [this.state.filterContent[0], title.toLowerCase()],
        selectedSongList: this.state.selectedSongShadowList.filter(songItem => {
          return songItem.title.toLowerCase().includes(title.toLowerCase());
        })
      });
    } else {
      this.setState({
        filterContent: [title.toLowerCase(), this.state.filterContent[1]],
        allSongList: allSongsObject.filter(songItem => {
          return songItem.title.toLowerCase().includes(title.toLowerCase());
        })
      });
    }
  };

  // When we press the submit button
  validatePlaylist = () => {
    let output = this.state.selectedSongShadowList.map(song => {
      return "\n" + song.title;
    });

    if (!output[0]) {
      // If we try to export empty list, we dont do anything
      return;
    }

    // remove the first \n
    output[0] = output[0].substring(1);
    alert(output);

    if (this.state.resetChecked) {
      // Reset all song selected
      this.setState({
        selectedSongShadowList: [],
        selectedSongList: [],
        allSongList: this.state.allSongList.map(song => {
          song.selected = false;
          return song;
        })
      });
    }
  };

  //Switch if we reset when exporting
  changeResetChecked = () => {
    this.setState({ resetChecked: !this.state.resetChecked });
  };

  render() {
    return (
      <div className="container">
        {/* Left Part : all songs */}
        <div className="split">
          <SearchBar isSelectedSongList={false} />
          <div className="song-list">
            <SongList isSelectedList={false} />
          </div>
        </div>
        {/* Middle Part : logo, player and valided button */}
        <div className="split">
          <img alt="logo" id="logo" src="../images/logo_queen.png"></img>
          {/* Spotify changed for Deezer because why not (and deezer is french)*/}
          <div className="playing-frame">
            {/* <iframe
              title="Playlist"
              scrolling="no"
              frameBorder="0"
              src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=450&height=500&color=fffb00&layout=dark&size=medium&type=playlist&id=4696861764&app_id=1"
              width="400"
              height="500"
            /> TODO */}
          </div>
          <ValidatePlaylistButton
            validatePlaylist={this.validatePlaylist}
            resetChecked={this.state.resetChecked}
            changeResetChecked={this.changeResetChecked}
          />
        </div>
        {/* Right Part : selected song */}
        <div className="split">
          <SearchBar isSelectedSongList={true} />
          <div className="song-list">
            <SongList isSelectedList={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
