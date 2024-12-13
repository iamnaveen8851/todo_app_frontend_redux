import { Route, Routes } from "react-router";
import Login from "./Login";
import SignUp from "./SignUp";
import Todo from "./Todo";
import PrivateRoute from "./PrivateRoute";

function PublicRoute() {
  return (
    <>
      <Routes>
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default PublicRoute;
