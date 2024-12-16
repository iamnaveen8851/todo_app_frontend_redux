import { axiosInstance } from "../../../utils/axiosInstance";
import { SIGNUP_SUCCESS } from "./signupActionItem";

const getSignupData = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

export const handleSignupData = (formState, navigate) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(
        import.meta.env.VITE_SIGNUP,
        formState
      );
      const { data, status } = res;

      if (status === 201) {
        dispatch(getSignupData(data));
        navigate("/todo");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
