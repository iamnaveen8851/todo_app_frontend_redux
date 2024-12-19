import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import loginReducer from "./reducers/loginReducer/loginReducer";
import { logoutReducer } from "./reducers/logoutReducer/logoutReducer";
import signupReducer from "./reducers/signupReducer/signupReducer";
import { getTodoReducer } from "./reducers/todos/getTodoReducer/getTodoReducer";

const reducers = combineReducers({
  // Add Reducers here
  loginReducer,
  logoutReducer,
  signupReducer,
  getTodoReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));
