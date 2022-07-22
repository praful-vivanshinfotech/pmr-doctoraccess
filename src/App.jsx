import React, { lazy } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "@/theme";
const LoginComp = lazy(() => import("@/pages/Login"));
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LoginComp />}></Route>
          <Route path="/about" element={<>About us page</>}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
