import { combineReducers } from "redux";
import map from "./Map/ReducerMap";
import mapEvt from "./Map/ReducerMapEvt";

const rootReducer = combineReducers({
  map,
  mapEvt
});

export default rootReducer;
