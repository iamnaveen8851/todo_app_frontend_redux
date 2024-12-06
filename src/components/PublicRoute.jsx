import { Route, Routes } from "react-router";
import Login from "./Login";
import SignUp from "./SignUp";
import Todo from "./Todo";

function PublicRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default PublicRoute;
