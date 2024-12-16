const intitialState = {
  isSignedUp: false,
  user: null,
  message: null,
};

const signupReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isSignedUp: true,
        user: action.payload.user,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default signupReducer;
