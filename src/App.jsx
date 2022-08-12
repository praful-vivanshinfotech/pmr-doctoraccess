import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Pages from "@/pages";
import Mobile from "./components/Mobile";

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const updateWidth = () => setDesktop(window.innerWidth > 1024);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <ThemeProvider theme={theme}>
      {isDesktop ? <Pages /> : <Mobile />}
    </ThemeProvider>
  );
};

export default App;
