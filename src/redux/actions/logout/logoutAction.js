import { axiosInstance } from "../../../utils/axiosInstance";
import { LOGOUT } from "./logoutActionItem";

const getLogoutData = (data) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};

export const handleLogout = (navigate) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(import.meta.env.VITE_LOGOUT);
      const {data, status} = res
        if(status === 200){
            dispatch(getLogoutData(data));
            navigate("/login");
        }
    } catch (error) {
      console.log(error.message);
    }
  };
};
