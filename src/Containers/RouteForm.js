import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./css/Route.css";
import * as actionMap from "../Actions/Map/ActionMap";
import { bindActionCreators } from "redux";

export class RouteForm extends Component {
  static propTypes = {};

  enableClickMap = () => {
    const { actionMap } = this.props;
    actionMap.ActionClickMap();
  };

  render() {
    const { clickMapParam } = this.props.mapEvt;
    return (
      <div>
        <div className="row">
          <input type="text" />
        </div>
        <div className="row">
          <input type="text" />
        </div>
        <div className="row">
          <button>Route</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mapEvt: state.mapEvt
});

const mapDispatchToProps = dispatch => ({
  actionMap: bindActionCreators(actionMap, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);
