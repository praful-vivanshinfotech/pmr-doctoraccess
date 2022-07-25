import React, { lazy, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "@/theme";
import Mobile from "./components/Device/Mobile";
const LoginComp = lazy(() => import("@/pages/Login"));
const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const updatewidth = () => setDesktop(window.innerWidth > 1024);
  useEffect(() => {
    window.addEventListener("resize", updatewidth);
    return () => window.removeEventListener("resize", updatewidth);
  });
  return (
    <>
      {isDesktop ? (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<LoginComp />}></Route>
              <Route path="/about" element={<>About us page</>}></Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      ) : (
        <Mobile />
      )}
    </>
  );
};

export default App;
