import { axiosInstance } from "../../../../utils/axiosInstance";
import { UPDATE_TODO } from "./updateTodoActionItem";

// Write Update Todo Logic here
const updateTodoData = (data) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};

// find out this one
export const handleUpdateTodo = (id, titleObj) => {
  return async (dispatch) => {
    try {
      await axiosInstance.patch(
        `${import.meta.env.VITE_UPDATE_TODO}/${id}`,
        titleObj
      );

      //   console.log("RES--->", res);
    } catch (error) {
      console.error(error);
    }
  };
};
