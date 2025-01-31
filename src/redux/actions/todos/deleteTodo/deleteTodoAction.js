import { axiosInstance } from "../../../../utils/axiosInstance";
import { DELETE_TODO } from "./deleteTodoActionItem";

const deleteTodoData = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};

export const handleDeleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.delete(
        `${import.meta.env.VITE_DELETE_TODO}/${id}`
      );

      console.log("Delete Todo Response ----->", res);
      dispatch(deleteTodoData(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};
