import { loadModules } from "esri-loader";

export const drawAndZoomPoint = (view, params) => {
  drawPoint(view, params);
  zoomToPoint(view, params);
};

export const zoomToPoint = (view, params) => {
  const { long, lat, level = 17 } = params;
  view.goTo(
    {
      target: [long, lat],
      zoom: level
    },
    {
      speedFactor: 0.75
    }
  );
};

export const drawPoint = (view, params) => {
  loadModules(["esri/geometry/Point", "esri/Graphic"]).then(
    ([Point, Graphic]) => {
      const { long, lat } = params;
      const pnt = new Point({
        longitude: long,
        latitude: lat
      });

      const symbol = {
        type: "point-3d", // autocasts as new PointSymbol3D()
        symbolLayers: [
          {
            type: "object", // autocasts as new ObjectSymbol3DLayer()
            width: 10, // diameter of the object from east to west in meters
            height: 50, // height of the object in meters
            depth: 10, // diameter of the object from north to south in meters
            resource: { primitive: "cylinder" },
            material: { color: "red" }
          }
        ]
      };

      const graphic = new Graphic({ geometry: pnt, symbol: symbol });

      view.graphics.add(graphic);
    }
  );
};
