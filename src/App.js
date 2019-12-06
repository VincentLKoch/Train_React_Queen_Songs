import React from "react";

// Components :
import SongList from "./Components/song/SongList";
import Header from "./Components/layout/Header";
import { SearchBar } from "./Components/song/SearchBar";

import { allSongs } from "./songs";
import "./App.css";

/* Import list of all songs, convert as object with id and selected boolean */
const allSongsObject = [];
for (let it = 0; it < allSongs.length; it++) {
  allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allSongList: allSongsObject,
      selectedSongList: []
    };
    this.selectedSongShadowList = [];
    /*
      this.selectedSongList = this.state.selectedSongList if there is no filter
      it stock the complete list of selected song we then filter from it
    */
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

  /* add or remove song in selected list */
  handleSongInSelectedList = song => {
    if (!song.selected) {
      console.log("Add Song");
      //Adding :
      this.selectedSongShadowList = [...this.selectedSongShadowList, song];
      this.setState({
        selectedSongList: [...this.selectedSongShadowList]
      });
    } else {
      console.log("Remove Song");
      //filter it out
      this.setState({
        selectedSongList: [
          ...this.state.selectedSongList.filter(
            songItem => songItem.id !== song.id
          )
        ]
      });
      //update selectedSongList
      this.selectedSongShadowList = this.selectedSongShadowList.filter(
        songItem => songItem.id !== song.id
      );
    }
  };

  // filterList with search bar input:
  filterList = (title, isSelectedSongList) => {
    console.log("IN filterList");
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
            {/* Middle Part : logo, player and valided button */}
            {/* TODO Add queen logo */}
            {/* I suggest to launch it during the correction to have a good time ! :) */}
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
            {/* TODO add submit button alert */}
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
