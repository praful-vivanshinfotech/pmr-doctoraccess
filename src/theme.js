import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2AB3C8",
    },
    error: {
      main: "#ED4337",
    },
    gray100: "#F6F8FA",
    gray200: "#EBEBEB",
    gray300: "#868490",
    gray900: "#031C3A",
  },
  typography: {
    h1: {
      fontSize: "40px",
    },
  },
});
theme.shadows.push("0px 0px 50px rgba(0, 0, 0, 0.08)");
export default theme;
