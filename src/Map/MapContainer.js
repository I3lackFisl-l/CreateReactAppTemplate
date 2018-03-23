import React, { Component } from "react";
import { loadModules } from "esri-loader";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ActionMap from "../Actions/Map/ActionMap";
import "./css/Map.css";

const options = {
  url: "https://js.arcgis.com/4.6/"
};

const lineSymbol = {
  symbolLayers: [
    {
      type: "path", // autocasts as new PathSymbol3DLayer()
      size: 20, // width of the tube in meters
      material: { color: [0, 243, 255] }
    }
  ]
};

class MapContainer extends Component {
  componentDidMount() {
    const { mapActions } = this.props;
    loadModules(
      [
        "esri/Map",
        "esri/views/SceneView",
        "esri/geometry/Point",
        "esri/layers/GraphicsLayer",
        "esri/core/watchUtils",
        "dojo/domReady!"
      ],
      options
    )
      .then(([Map, SceneView, Point, GraphicsLayer, watchUtils]) => {
        // create map with the given options at a DOM node w/ id 'mapNode'
        const map = new Map({
          basemap: "dark-gray"
        });
        const view = new SceneView({
          container: this.mapNode,
          map: map,
          zoom: 4
        });

        this.view = view;
        this.map = map;

        // new graphic layer
        const routeLayer = new GraphicsLayer({
          id: "routeGP"
        });
        map.add(routeLayer);

        // set center map
        const initPnt = new Point({
          longitude: 100.52807,
          latitude: 13.729486
        });

        this.zoomToPoint(initPnt);

        // // init event extent change
        watchUtils.whenTrue(view, "stationary", () => {
          if (view.center && view.extent) {
            const params = {
              extent: view.extent,
              centerX: view.center.x,
              centerY: view.center.y
            };

            mapActions.ActionExtentChange(params);
          }
        });

        // init event click map
        view.on("click", evt => {
          mapActions.ActionClickMap(evt);
        });
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
  }

  zoomToPoint(lat, long, level = 14) {
    this.view.goTo(
      {
        center: [long, lat],
        zoom: level
      },
      {
        speedFactor: 0.75
      }
    );
  }

  drawRoute(routeResult) {
    loadModules(
      ["esri/symbols/LineSymbol3D", "esri/Graphic", "esri/geometry/Polyline"],
      options
    ).then(([LineSymbol3D, Graphic, Polyline]) => {
      const symbol = new LineSymbol3D(lineSymbol);

      const line = new Polyline({
        paths: routeResult.route
      });

      const graphic = new Graphic({
        geometry: line,
        symbol: symbol
      });

      this.view.graphics.add(graphic);

      this.zoomToPoint(line.extent.center.y, line.extent.center.x, 16);
    });
  }

  render() {
    return (
      <div
        ref={node => {
          this.mapNode = node;
        }}
        className="map"
      />
    );
  }
}

const mapStateToProps = state => ({
  map: state.map
});

const mapDispatchToProps = dispatch => ({
  mapActions: bindActionCreators(ActionMap, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
