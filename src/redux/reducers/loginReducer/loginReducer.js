const initialState = {
  isLoggedIn: false,
  user: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
