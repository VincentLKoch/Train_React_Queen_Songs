import { FILTER_SONG } from "../actions/filterSongsAction";
import { RESET_FILTERS } from "../actions/resetFiltersAction";

const initialState = {
  filter: ["", ""]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SONG:
      if (action.payload.isSelectedList) {
        return {
          ...state,
          filter: [state.filter[0], action.payload.filterContent]
        };
      } else {
        return {
          ...state,
          filter: [action.payload.filterContent, state.filter[1]]
        };
      }
    case RESET_FILTERS:
      return { ...state, filter: ["", ""] };
    default:
      return state;
  }
};
