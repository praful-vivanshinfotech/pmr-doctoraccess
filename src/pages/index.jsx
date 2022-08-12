import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginComp = lazy(() => import("./Login"));
const TFAComp = lazy(() => import("./TFA"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <LoginComp />
            </Suspense>
          }
        ></Route>
        <Route
          path="/tfa"
          element={
            <Suspense fallback={<></>}>
              <TFAComp />
            </Suspense>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<></>}>
              <ForgotPassword />
            </Suspense>
          }
        ></Route>
        <Route
          path="/reset-password"
          element={
            <Suspense fallback={<></>}>
              <ResetPassword />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
