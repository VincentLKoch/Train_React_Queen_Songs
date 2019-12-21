import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export const ValidatePlaylistButton = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        id="validate"
        type="button"
        onClick={props.validatePlaylist}
      >
        Validate Playlist
      </Button>
      <br />
      <label className="switch">
        <input
          type="checkbox"
          checked={props.resetChecked}
          onChange={props.changeResetChecked}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

// PropsTypes
ValidatePlaylistButton.propTypes = {
  validatePlaylist: PropTypes.func.isRequired, // onClick function call
  resetChecked: PropTypes.bool.isRequired, // is it checked ?
  changeResetChecked: PropTypes.func.isRequired //function to call when we click
};
