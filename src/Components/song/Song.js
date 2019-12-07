import React, { Component } from "react";
import PropTypes from "prop-types";

export class Song extends Component {
  getStyle = selected => {
    return selected && !this.props.isSelectedList
      ? { backgroundColor: "lightblue" }
      : {};
  };

  render() {
    const { id, title, selected } = this.props.song;

    return (
      <div className="song-row" style={this.getStyle(selected)}>
        <p>
          <input
            type="checkbox"
            className="checkbox"
            checked={selected} // allow check box match selected, in case of a selected = true when launching
            onChange={this.props.selectSong.bind(this, id)}
          />
          &nbsp;
          {title}
        </p>
      </div>
    );
  }
}

// PropsTypes
Song.propTypes = {
  song: PropTypes.shape({
    //shape of Song object
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired,

  isSelectedList: PropTypes.bool.isRequired,
  selectSong: PropTypes.func.isRequired // function to call when song is selected
};

export default Song;
