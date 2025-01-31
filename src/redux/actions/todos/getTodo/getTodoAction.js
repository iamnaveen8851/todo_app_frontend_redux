import { axiosInstance } from "../../../../utils/axiosInstance";
import { TODO_DATA_FETCHED } from "./getTodoActionItem";

const getTodoData = (data) => {
  return {
    type: TODO_DATA_FETCHED,
    payload: data,
  };
};

export const handleGetTodo = () => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(import.meta.env.VITE_READ_TODO);
      // console.log("res---?", res);
      const { data, message, username } = res.data;
      // console.log("Res---->", data, message);
      dispatch(getTodoData({ data, message, username }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
