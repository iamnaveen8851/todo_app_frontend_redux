import { DELETE_TODO } from "../../../actions/todos/deleteTodo/deleteTodoActionItem";

const initialState = {
  deletedData: {},
  deletedRes: null,
};

export const deleteTodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_TODO:
      return {
        ...state,
        deletedData: { ...payload.deletedTodo },
        deletedRes: payload.message,
      };
    default:
      return state;
  }
};
