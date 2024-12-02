import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Login";
import SignUp from "./SignUp";

function PublicRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default PublicRoute;
