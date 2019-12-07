import React, { Component } from "react";
import PropTypes from "prop-types";

export class Validate_Playlist_Button extends Component {
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
Validate_Playlist_Button.propTypes = {
  validatePlaylist: PropTypes.func.isRequired // onClick function call
};

export default Validate_Playlist_Button;
