import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"; //redux-thunk ช่วยให้เราสามารถเข้าถึง dispatch ได้
// import {createLogger} from 'redux-logger'
import reducer from "../Reducers/Assemble";

// const loggerMiddleware = createLogger()

export default function configureStore() {
  // return createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
  return createStore(reducer, applyMiddleware(thunkMiddleware));
}
