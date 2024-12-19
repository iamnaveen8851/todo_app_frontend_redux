import { GrAction } from "react-icons/gr";
import { TODO_DATA_FETCHED } from "../../../actions/todos/getTodo/getTodoActionItem";

const inititalState = {
  data: [],
  message: null,
};

export const getTodoReducer = (state = inititalState, action) => {
  switch (action.type) {
    case TODO_DATA_FETCHED:
      return {
        ...state,
        data: action.payload.data,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
