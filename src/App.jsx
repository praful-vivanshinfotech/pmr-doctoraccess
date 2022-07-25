import React, { lazy, useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mobile from "./components/Mobile";
const LoginComp = lazy(() => import("@/pages/Login"));

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateWidth = () => setDesktop(window.innerWidth > 1024);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <>
      {isDesktop ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginComp />}></Route>
            <Route path="/about" element={<>About us page</>}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Mobile />
      )}
    </>
  );
};

export default App;
