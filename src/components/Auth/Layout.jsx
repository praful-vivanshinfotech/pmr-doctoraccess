import React from "react";
import { Box } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: 10,
        paddingBottom: 2,
        backgroundImage: "url(images/auth-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 500,
          mx: "auto",
          my: 7,
        }}
      >
        <img src="images/logo-dark.svg" alt="" />
      </Box>
      <Box
        sx={{
          boxShadow: 25,
          width: "500px",
          paddingX: 5,
          paddingY: 6,
          borderRadius: 2,
          margin: "10px auto 0 auto",
          backgroundColor: "white",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
