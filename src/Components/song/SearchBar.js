import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ title: e.target.value });
    this.props.filterList(e.target.value, this.props.isSelectedSongList);
  };

  render() {
    return (
      <form className="searchBar">
        {/* flex box */}
        <input
          type="text"
          name="searchBar"
          placeholder="Filter by Song Name"
          value={this.state.title}
          onChange={this.onChange}
          className="input"
        />
        {/* flex:10 */}
      </form>
    );
  }
}

export default SearchBar;
