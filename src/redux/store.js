import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import loginReducer from "./reducers/loginReducer/loginReducer";

const reducers = combineReducers({
  // Add Reducers here
  loginReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));
