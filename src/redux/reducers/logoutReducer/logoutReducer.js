import { LOGOUT } from "../../actions/logout/logoutActionItem";

const initialState = {
  isLoggedIn: true,
  res: null,
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        res: action.payload,
      };
    default:
      return state;
  }
};
