import React, { Component } from "react";
import PropTypes from "prop-types";

export class Validate_Playlist_Button extends Component {
  static propTypes = {
    validatePlaylist: PropTypes.func.isRequired
  };

  state = {
    resetChecked: false
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.props.validatePlaylist.bind(
            this,
            this.state.resetChecked
          )}
        >
          Validate Playlist
        </button>
        <br />
        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.resetChecked}
            onChange={() =>
              this.setState({ resetChecked: !this.state.resetChecked })
            }
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default Validate_Playlist_Button;
