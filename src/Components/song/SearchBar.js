import React from "react";
import PropTypes from "prop-types";

export const SearchBar = props => {
  const onChange = e => {
    props.filterList(e.target.value, props.isSelectedSongList);
  };

  return (
    <form className="search-bar">
      <input
        type="text"
        name="searchBar"
        placeholder="Filter by Song Name"
        value={props.filterContent}
        onChange={onChange}
        className="input"
        onKeyPress={e => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
    </form>
  );
};

// PropsTypes
SearchBar.propTypes = {
  filterContent: PropTypes.string.isRequired,
  isSelectedSongList: PropTypes.bool.isRequired,
  filterList: PropTypes.func.isRequired
};
