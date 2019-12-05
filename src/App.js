import React from "react";

// Components :
import SongList from "./Components/SongList";
import Header from "./Components/layout/Header";
import { SearchBar } from "./Components/SearchBar";

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
    this.selectedSongList = [
      {
        id: 3,
        title: "A Human Body",
        selected: true
      }
    ];
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
          song.selected = !song.selected; /* update song in selected list (add or remove) */
          this.handleSongInSelectedList(song);
        }
        return song;
      })
    });
  };

  /* add or remove song in selected list */
  handleSongInSelectedList = song => {
    if (song.selected) {
      //add it
      this.setState({
        selectedSongList: [...this.state.selectedSongList, song].sort()
      });
      this.selectedSongList = [...this.selectedSongList, song].sort();
    } else {
      //filter it out
      this.setState({
        selectedSongList: [
          ...this.state.selectedSongList.filter(
            songItem => songItem.id !== song.id
          )
        ]
      });
      this.selectedSongList = this.selectedSongList.filter(
        songItem => songItem.id !== song.id
      );
    }
  };

  // filterList with search bar input:
  filterList = (title, isSelectedSongList) => {
    /* if the search bar is for filtering the selected song list or the other */
    if (isSelectedSongList) {
      this.setState({
        selectedSongList: this.selectedSongList.filter(songItem => {
          return songItem.title.toUpperCase().includes(title.toUpperCase());
        })
      });
    } else {
      this.setState({
        allSongList: allSongsObject.filter(songItem => {
          return songItem.title.toUpperCase().includes(title.toUpperCase());
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
            {/* Left Part */}
            <SearchBar
              isSelectedSongList={false}
              filterList={this.filterList}
            />
            <div className="song-list">
              <SongList
                isAllSongList={false}
                songlist={this.state.allSongList}
                selectSong={this.selectSong}
              />
            </div>
          </div>
          <div className="split">
            {/* Middle Part */}
            {/* TODO Add queen logo */}
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
          {/* Right Part */}
          <div className="split">
            <SearchBar isSelectedSongList={true} filterList={this.filterList} />
            <div className="song-list">
              <SongList
                isAllSongList={true}
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
