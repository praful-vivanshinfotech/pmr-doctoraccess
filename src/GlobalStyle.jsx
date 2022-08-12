import { GlobalStyles } from "@mui/styled-engine";
import React from "react";
import theme from "./theme";

const GlobalStyle = () => {
  return (
    <GlobalStyles
      styles={{
        body: {
          color: theme.palette.gray900,
        },
      }}
    />
  );
};

export default GlobalStyle;
