import React, { lazy } from "react";
import { Route, Routes } from "react-router";

const LoginComp = lazy(() => import("@/pages/Login"));
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComp />}></Route>
      <Route path="/about" element={<>About us page</>}></Route>
    </Routes>
  );
};

export default Pages;
