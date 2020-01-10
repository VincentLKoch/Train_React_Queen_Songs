import React from "react";

// Components
import SongList from "./song/SongList";
import ValidatePlaylistButton from "./ValidatePlaylistButton";
import SearchBar from "./song/SearchBar";

// Others
import { allSongs } from "../songs";

/* Import list of all songs, convert as object with id and selected boolean */
const allSongsObject = [];
for (let it = 0; it < allSongs.length; it++) {
  allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
}

class Home extends React.Component {
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
            {
              <iframe
                title="Playlist"
                scrolling="no"
                frameBorder="0"
                src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=450&height=500&color=fffb00&layout=dark&size=medium&type=playlist&id=4696861764&app_id=1"
                width="400"
                height="500"
              />
            }
          </div>
          <ValidatePlaylistButton />
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
