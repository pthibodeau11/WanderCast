import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import appReducer from "./Reducers/appReducer";
import authReducer from "./Reducers/authReducer";
import purchReducer from "./Reducers/purchReducer";
import streamReducer from "./Reducers/streamReducer";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  appReducer,
  authReducer,
  purchReducer,
  streamReducer,
  userReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
