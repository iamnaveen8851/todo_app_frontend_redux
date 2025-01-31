
import { TODO_DATA_FETCHED } from "../../../actions/todos/getTodo/getTodoActionItem";

export const initialState = {
  data: [],
  message: null,
};

export const getTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_DATA_FETCHED:
      return {
        ...state,
        data: action.payload.data,
        message: action.payload.message,
        username: action.payload.username,
      };

    default:
      return state;
  }
};
