import { ADD_TODO } from "../../actions/todos/addTodo/addTodoActionItem";


const initialState = {
  message: null,
};

export const addTodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,

        message: payload,
      };

    default:
      return state;
  }
};
