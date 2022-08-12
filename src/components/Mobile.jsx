import React from "react";
import { Box, Link } from "@mui/material";

const Mobile = () => {
  return (
    <>
      <Box
        sx={{
          mx: 3,
          my: 6,
          textAlign: "center",
        }}
      >
        <Link href="/">
          <img src="images/logo-full.svg" alt="" />
        </Link>

        <Box
          sx={{
            mt: 7,
          }}
        >
          <img src="images/alert-icon.svg" alt="" />
        </Box>
        <Box
          sx={{
            fontWeight: 500,
            fontSize: 32,
            my: 3,
          }}
        >
          Oops! You need to be on a computer.
        </Box>
        <Box
          sx={{
            fontWeight: 400,
            fontSize: 18,
            my: 3,
          }}
        >
          Access Doctor only works on a desktop. Please move to a computer or
          laptop to use our platform.
        </Box>
      </Box>
      <Box
        sx={{
          color: "gray300",
          fontWeight: 400,
          fontSize: 18,
          mt: 15,
          mb: 3,
          mx: 3,
          textAlign: "center",
        }}
      >
        © Access Doctor 2022. All rights reserved.
      </Box>
    </>
  );
};

export default Mobile;
