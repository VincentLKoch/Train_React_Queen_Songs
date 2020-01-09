import { allSongs } from "../songs";

import { SELECT_SONG } from "../actions/selectSongAction";

const allSongsObject = [];
for (let it = 0; it < allSongs.length; it++) {
  allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
}
const initialState = {
  songsList: allSongsObject,
  selectedSongList: [] //TODO is it needed ?
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
      };
    default:
      return state;
  }
};
