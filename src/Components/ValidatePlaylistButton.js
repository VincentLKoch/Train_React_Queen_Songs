import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { checkResetPlaylistAction } from "../actions/checkResetPlaylistAction";
import { validatePlaylistAction } from "../actions/validatePlaylistAction";

class ValidatePlaylistButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          id="validate"
          type="button"
          onClick={() => this.props.validatePlaylist(this.props.isResetChecked)}
        >
          Validate Playlist
        </Button>
        <br />
        <label className="switch">
          <input
            type="checkbox"
            checked={this.props.isResetChecked}
            onChange={this.props.changeResetChecked}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

// PropsTypes
ValidatePlaylistButton.propTypes = {
  isResetChecked: PropTypes.bool.isRequired, // is it checked ?
  changeResetChecked: PropTypes.func.isRequired, //function to call when we click
  validatePlaylist: PropTypes.func.isRequired // onClick function call
};

const mapStateToProps = state => {
  return {
    isResetChecked: state.validatePlaylist.isResetChecked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeResetChecked: () => {
      dispatch(checkResetPlaylistAction());
    },
    validatePlaylist: reset => {
      dispatch(validatePlaylistAction(reset));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidatePlaylistButton);
