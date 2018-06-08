import * as actionTypes from "../Constants/ActionTypes";

export const bindMapCommand = (mapFunction, params) => ({
  type: actionTypes.MAP_COMMAND,
  mapFunction: mapFunction,
  mapFunctionParams: params
});

export const bindEvtExtentChange = callbackFunction => ({
  type: actionTypes.BIND_EVT_EXTENT_CHANGE,
  onExtentChangeFunction: callbackFunction
});
