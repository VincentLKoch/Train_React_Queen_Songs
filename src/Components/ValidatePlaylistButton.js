import React, { Component } from "react";
import PropTypes from "prop-types";

class ValidatePlaylistButton extends Component {
  state = {
    resetChecked: false
  };

  render() {
    return (
      <div>
        <button
          id="validate"
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

// PropsTypes
ValidatePlaylistButton.propTypes = {
  validatePlaylist: PropTypes.func.isRequired // onClick function call
};

export default ValidatePlaylistButton;
