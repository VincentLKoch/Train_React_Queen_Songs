import { combineReducers } from "redux";
import songList from "./songReducer";
import filterSongs from "./filterReducer";

export default combineReducers({
  songList,
  filterSongs
});
