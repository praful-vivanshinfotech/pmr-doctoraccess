import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./Pages";
import theme from "@/theme";
import "@/assets/css/main.css";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
