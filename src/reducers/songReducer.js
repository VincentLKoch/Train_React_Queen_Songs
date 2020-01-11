import { allSongs } from "../songs";

import { SELECT_SONG } from "../actions/selectSongAction";
import { VALIDATE_PLAYLIST } from "../actions/validatePlaylistAction";

const allSongsObject = [];
for (let it = 0; it < allSongs.length; it++) {
  allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
}
const initialState = {
  songsList: allSongsObject,
  selectedSongList: []
  /* We could do without selectedSongList and just filter the songsList,
  It's a choice to do it like this, a bit more memory heavy, a bit less cpu heavy */
};

const newSelectedList = (selectedSongList, song) => {
  if (song.selected) {
    return [...selectedSongList, song].sort((S1, S2) => S1.id - S2.id);
  }
  return selectedSongList.filter(selectedSong => selectedSong.id !== song.id);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        songsList: state.songsList.map(song => {
          if (song.id === action.payload.id) {
            song.selected = !song.selected;
          }
          return song;
        }),
        selectedSongList: newSelectedList(
          state.selectedSongList,
          action.payload
        )
      }; //end case SELECT_SONG:

    case VALIDATE_PLAYLIST:
      let output = state.selectedSongList.map(song => {
        return "\n" + song.title;
      });
      if (output[0]) {
        //dont do empty alert
        output[0] = output[0].substring(1); //remove first \n
        alert(output);
      }

      return {
        ...state,
        songsList: action.payload //reset ?
          ? state.songsList.map(song => {
              song.selected = false;
              return song;
            })
          : state.songsList,
        selectedSongList: action.payload ? [] : state.selectedSongList //reset if need
      }; //end case VALIDATE_PLAYLIST:

    default:
      return state;
  }
};
