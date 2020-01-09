import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { filterSongsAction } from "../../actions/filterSongsAction";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search-bar">
        <input
          type="text"
          name="searchBar"
          placeholder="Filter by Song Name"
          value={this.props.filterContent}
          onChange={e =>
            this.props.filterList(e.target.value, this.props.isSelectedSongList)
          }
          className="input"
          onKeyPress={e => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
      </form>
    );
  }
}

// PropsTypes
SearchBar.propTypes = {
  filterContent: PropTypes.string.isRequired,
  isSelectedSongList: PropTypes.bool.isRequired,
  filterList: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownprops) => {
  return {
    filterContent: state.filterSongs.filter[+ownprops.isSelectedSongList],
    isSelectedSongList: ownprops.isSelectedSongList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterList: (content, isSelectedList) => {
      dispatch(filterSongsAction(content, isSelectedList));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
