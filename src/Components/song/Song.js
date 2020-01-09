import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { selectSongAction } from "../../actions/selectSongAction";
import { resetFiltersAction } from "../../actions/resetFiltersAction";

class Song extends React.Component {
  render() {
    return (
      <div className="song-row" style={this.props.style}>
        <Button
          fullWidth={true}
          type="button"
          id="song"
          checked={this.props.song.selected} // allow check box match selected, in case of a selected = true when launching
          onClick={() => this.props.selectSong(this.props.song)}
        >
          {this.props.song.title}
        </Button>
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
  style: PropTypes.object.isRequired
};

//Redux
const mapStateToProps = (state, ownprops) => {
  let style = {}; //must be here or style is only render on load => don't change
  if (ownprops.song.selected && !ownprops.isSelectedList) {
    style =
      ownprops.song.id % 2 === 1
        ? { backgroundColor: "lightblue" }
        : { backgroundColor: "#f3eba5" };
  }
  return {
    song: ownprops.song,
    isSelectedList: ownprops.isSelectedList,
    style
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectSong: id => {
      dispatch(selectSongAction(id));
      dispatch(resetFiltersAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
