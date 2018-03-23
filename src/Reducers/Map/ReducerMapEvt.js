import * as actionTypes from "../../Constants/ActionTypes";

const initialState = { clickMapParam: null, extentChangeParam: null };
// {
//     clickMapParam : {
//         mapPoint: Point,
//         x: Number,
//         y: Number,
//         button: Number,
//         type: String,
//         stopPropagation: Function,
//         timestamp: Number,
//         native: Object
//     },
//     extentChangeParam:{
//         extent: Extent,
//         centerX: Number,
//         centerY: Number
//     }
// }
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAP_CLICK:
      return { ...state, clickMapParam: action.params };
    case actionTypes.EXTENT_CHANGE:
      return { ...state, extentChangeParam: action.params };
    default:
      return state;
  }
};
