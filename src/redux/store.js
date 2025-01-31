import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import loginReducer from "./reducers/loginReducer/loginReducer";
import { logoutReducer } from "./reducers/logoutReducer/logoutReducer";
import signupReducer from "./reducers/signupReducer/signupReducer";
import { getTodoReducer } from "./reducers/todos/getTodoReducer/getTodoReducer";
import { addTodoReducer } from "./reducers/todos/addTodoReducer";
import { deleteTodoReducer } from "./reducers/todos/deleteTodoReducer/deleteTodoReducer";

const reducers = combineReducers({
  // Add Reducers here
  loginReducer,
  logoutReducer,
  signupReducer,
  getTodoReducer,
  addTodoReducer,
  // updateTodoReducer
  deleteTodoReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));
