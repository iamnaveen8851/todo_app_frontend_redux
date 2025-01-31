import { axiosInstance } from "../../../utils/axiosInstance";
import { LOGIN_SUCCESS } from "./loginActionItem";

const getLoginData = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const handleLogin = (formState, navigate) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(
        import.meta.env.VITE_LOGIN,
        formState
      );
      const {
        data: { user },
        status,
      } = res;
      // console.log("Login Res----> ", user, status);

      if (status === 200) {
        dispatch(getLoginData(user));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
