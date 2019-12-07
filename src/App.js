import React from "react";

// Components :
import ValidatePlaylistButton from "./Components/Validate_Playlist_Button";
import Header from "./Components/layout/Header";
import SongList from "./Components/song/SongList";
import { SearchBar } from "./Components/song/SearchBar";

import { allSongs } from "./songs";
import "./App.css";

/* Import list of all songs, convert as object with id and selected boolean */
const allSongsObject = [];
for (let it = 0; it < allSongs.length; it++) {
  allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      allSongList: allSongsObject,
      selectedSongList: []
    };
    /*
    this.selectedSongShadowList = this.state.selectedSongList if there is no filter
    it stock the complete list of selected song, we use it to filter selectedSongList
    */
    this.selectedSongShadowList = [];
  }

  //Toggle selectSong song
  selectSong = id => {
    this.setState({
      allSongList: this.state.allSongList.map(song => {
        if (song.id === id) {
          this.handleSongInSelectedList(song);
          song.selected = !song.selected; // song is now selected or unselected
        }
        return song;
      })
    });
  };

  /* add or remove song in selected list
  can be combine with selectSong but it will be a bit ugly */
  handleSongInSelectedList = song => {
    if (!song.selected) {
      // Adding :
      this.selectedSongShadowList = [...this.selectedSongShadowList, song];
      this.setState({
        selectedSongList: [...this.selectedSongShadowList]
      });
    } else {
      // Removing
      this.setState({
        selectedSongList: [
          ...this.state.selectedSongList.filter(
            songItem => songItem.id !== song.id
          )
        ]
      });
      //update selectedSongShadowList
      this.selectedSongShadowList = this.selectedSongShadowList.filter(
        songItem => songItem.id !== song.id
      );
    }
  };

  // filterList with search bar input:
  filterList = (title, isSelectedSongList) => {
    /* if the search bar is for filtering the selected song list or the other */
    if (isSelectedSongList) {
      this.setState({
        selectedSongList: this.selectedSongShadowList.filter(songItem => {
          return songItem.title.toLowerCase().includes(title.toLowerCase());
        })
      });
    } else {
      this.setState({
        allSongList: allSongsObject.filter(songItem => {
          return songItem.title.toLowerCase().includes(title.toLowerCase());
        })
      });
    }
  };

  // When we press the submit button
  validatePlaylist = reset => {
    let output = this.state.selectedSongList.map(song => {
      return "\n" + song.title;
    });
    output[0] = output[0].substring(1); /* remove the first \n */
    alert(output);

    if (reset) {
      // Reset all song selected
      this.selectedSongShadowList = [];

      this.setState({
        selectedSongList: [],
        allSongList: this.state.allSongList.map(song => {
          song.selected = false;
          return song;
        })
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="split">
            {/* Left Part : all songs */}
            <SearchBar
              isSelectedSongList={false}
              filterList={this.filterList}
            />
            <div className="song-list">
              <SongList
                isSelectedList={false}
                songlist={this.state.allSongList}
                selectSong={this.selectSong}
              />
            </div>
          </div>
          <div className="split">
            <img alt="logo" id="logo" src="../images/logo_queen.png"></img>
            {/* Middle Part : logo, player and valided button */}
            {/* I suggest to launch it during the correction to have a good time ! :) */}
            <div className="playing-frame">
              <iframe
                title="Spotify Queen"
                src="https://open.spotify.com/embed/album/6i6folBtxKV28WX3msQ4FE"
                width="300"
                height="380"
                frameBorder="2px"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
              <i>for inspiration purpose</i>
            </div>
              <ValidatePlaylistButton validatePlaylist={this.validatePlaylist} />
          </div>
          {/* Right Part : selected song */}
          <div className="split">
            <SearchBar isSelectedSongList={true} filterList={this.filterList} />
            <div className="song-list">
              <SongList
                isSelectedList={true}
                songlist={this.state.selectedSongList}
                selectSong={this.selectSong}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
