import React, { Component } from "react";
import PropTypes from "prop-types";

export class Song extends Component {
  getStyle = selected => {
    return selected && !this.props.isAllSongList
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
  song: PropTypes.object.isRequired
};

export default Song;
