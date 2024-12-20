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

      const { data, message } = res.data;
      // console.log("Res---->", data, message);
      dispatch(getTodoData({ data, message }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
