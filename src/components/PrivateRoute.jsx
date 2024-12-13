import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
