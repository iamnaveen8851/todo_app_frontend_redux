import { axiosInstance } from "../../../../utils/axiosInstance";

import { ADD_TODO } from "./addTodoActionItem";

const addTodoData = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const handleAddTodo = (data) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(import.meta.env.VITE_ADD_TODO, data);
      console.log("ADD TODO RES----> ", res);
      dispatch(addTodoData(res.data.message));
    } catch (error) {
      console.log(error);
    }
  };
};
