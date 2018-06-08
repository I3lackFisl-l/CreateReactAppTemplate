import * as actionTypes from "../Constants/ActionTypes";

const initialState = {
  mapFunction: null,
  onExtentChangeFunction: null,
  mapFunctionParams: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAP_COMMAND:
      return {
        ...state,
        mapFunction: action.mapFunction,
        mapFunctionParams: action.mapFunctionParams
      };
    case actionTypes.BIND_EVT_EXTENT_CHANGE:
      return {
        ...state,
        onExtentChangeFunction: action.onExtentChangeFunction
      };
    default:
      return state;
  }
};
