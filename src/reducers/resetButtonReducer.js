import { CHANGE_RESET_PLAYLIST } from "../actions/checkResetPlaylistAction";

const initialState = {
  isResetChecked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RESET_PLAYLIST:
      return { ...state, isResetChecked: !state.isResetChecked };
    default:
      return state;
  }
};
