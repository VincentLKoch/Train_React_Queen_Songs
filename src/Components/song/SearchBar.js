import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    //TODO change title to props input, onchange is a props function to change then make this component stateless
    title: ""
  };

  onChange = e => {
    this.setState({ title: e.target.value });
    this.props.filterList(e.target.value, this.props.isSelectedSongList);
  };

  render() {
    return (
      <form className="searchBar">
        <input
          type="text"
          name="searchBar"
          placeholder="Filter by Song Name"
          value={this.state.title}
          onChange={this.onChange}
          className="input"
        />
      </form>
    );
  }
}

// PropsTypes
SearchBar.propTypes = {
  isSelectedSongList: PropTypes.bool.isRequired,
  filterList: PropTypes.func.isRequired
};

export default SearchBar;
