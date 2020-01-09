export const FILTER_SONG = "FILTER_SONG";

export const filterSongsAction = (filterContent, isSelectedList) => ({
  type: FILTER_SONG,
  payload: { filterContent: filterContent.toLowerCase(), isSelectedList }
});
