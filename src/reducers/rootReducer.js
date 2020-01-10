import { combineReducers } from "redux";
import songList from "./songReducer";
import filterSongs from "./filterReducer";
import validatePlaylist from "./resetButtonReducer";

export default combineReducers({
  songList,
  filterSongs,
  validatePlaylist
});
