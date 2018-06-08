import React, { Component } from "react";
import EsriLoaderReact from "esri-loader-react";
import * as MapConstants from "./MapConstants";
import "./map.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MapManager extends Component {
  constructor(props) {
    super(props);
    this.view = null;
  }

  createMap = ({
    loadedModules: [Map, SceneView, watchUtils],
    containerNode
  }) => {
    let view = new SceneView({
      container: containerNode,
      map: new Map({ basemap: "dark-gray" }),
      zoom: 15,
      center: [100.52807, 13.729486]
    });
    this.view = view;

    // // init event extent change
    watchUtils.whenTrue(view, "stationary", () => {
      if (view.center && view.extent) {
        const params = {
          extent: view.extent,
          centerX: view.center.x,
          centerY: view.center.y
        };
        const { mapRdc } = this.props;
        // listener event only one event
        if (mapRdc.onExtentChangeFunction != null) {
          mapRdc.onExtentChangeFunction(params);
        }
      }
    });
  };

  createMapModuleAndFunction = mapCommand => {
    let modules = [];
    let mapFunction = null;
    switch (mapCommand) {
      case MapConstants.CREATE_MAP:
        modules = ["esri/Map", "esri/views/SceneView"];
        mapFunction = this.createMap;
        break;
      case MapConstants.DRAW_POINT_AND_ZOOM:
        this.drawAndZoomPoint();
        break;
      default:
        modules = [];
        mapFunction = "not found";
        break;
    }

    return { modules, mapFunction };
  };

  render() {
    const { mapRdc } = this.props;
    if (mapRdc.mapFunction != null) {
      mapRdc.mapFunction(this.view, mapRdc.mapFunctionParams);
    }

    return (
      <div>
        <EsriLoaderReact
          options={options}
          modulesToLoad={[
            "esri/Map",
            "esri/views/SceneView",
            "esri/core/watchUtils"
          ]}
          onReady={this.createMap}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mapRdc: state.map
});

MapManager.propTypes = {
  mapRdc: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(MapManager);

const options = {
  url: "https://js.arcgis.com/4.7/"
};
