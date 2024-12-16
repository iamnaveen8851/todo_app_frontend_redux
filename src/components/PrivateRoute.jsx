import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.loginReducer);
  const { isSignedUp } = useSelector((state) => state.signupReducer);
  return isLoggedIn || isSignedUp ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
