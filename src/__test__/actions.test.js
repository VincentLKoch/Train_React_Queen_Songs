import * as checkResetPlaylist from "../actions/checkResetPlaylistAction";
import * as filterSongs from "../actions/filterSongsAction";
import * as resetFilters from "../actions/resetFiltersAction";
import * as selectSong from "../actions/selectSongAction";
import * as validatePlaylist from "../actions/validatePlaylistAction";

describe("Actions Test", () => {
  //No input actions :
  it.each([
    [
      "CHANGE_RESET_PLAYLIST",
      checkResetPlaylist.CHANGE_RESET_PLAYLIST,
      checkResetPlaylist.checkResetPlaylistAction
    ],
    [
      "RESET_FILTERS",
      resetFilters.RESET_FILTERS,
      resetFilters.resetFiltersAction
    ]
  ])("Testing %s", (actionName, actionTypeName, actionFunction) => {
    expect(actionName).toBe(actionTypeName);
    expect(actionFunction()).toEqual({
      type: actionTypeName
    });
  }); //end actions without input

  //No actions with input :
  it.each([
    [
      "FILTER_SONG",
      filterSongs.FILTER_SONG,
      filterSongs.filterSongsAction,
      "Dummy Input",
      true,
      { filterContent: "dummy input", isSelectedList: true }
    ],
    [
      "SELECT_SONG",
      selectSong.SELECT_SONG,
      selectSong.selectSongAction,
      { dummy: "Dummy Input", id: 42 },
      null,
      { dummy: "Dummy Input", id: 42 }
    ],
    [
      "VALIDATE_PLAYLIST",
      validatePlaylist.VALIDATE_PLAYLIST,
      validatePlaylist.validatePlaylistAction,
      true,
      null,
      true
    ]
  ])(
    "Testing %s",
    (actionName, actionTypeName, actionFunction, input1, input2, payload) => {
      expect(actionName).toBe(actionTypeName);

      expect(actionFunction(input1, input2)).toEqual({
        type: actionTypeName,
        payload: payload
      });
    }
  ); //end actions with input
});
