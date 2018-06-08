import React, { Component } from "react";
import * as MapFunctions from "../Map/MapFunctions";
import * as MapAction from "../Actions/MapAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Footer extends Component {
  onExtentChange = params => {
    console.log("extentChange", params);
  };
  getCurrentLoc = () => {
    const { MapAction } = this.props;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        MapAction.bindMapCommand(MapFunctions.drawAndZoomPoint, {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        });

        MapAction.bindEvtExtentChange(this.onExtentChange);
      });
    } else {
      console.log("current location is not support by this browser");
    }
  };
  render() {
    return (
      <div className="button">
        <button onClick={this.getCurrentLoc}>Get Current Location</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  MapAction: bindActionCreators(MapAction, dispatch)
});

Footer.propTypes = {
  MapAction: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Footer);
