import Layout from "@/components/Auth/Layout";
import { CstButton, CstInput, RouterLink } from "@/components/Form";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const logInForm = useForm({ resolver: yupResolver(schema) });
  console.log(logInForm.formState.errors);
  const submitLogin = (value) => {
    console.log(value);
  };
  return (
    <Layout>
      <form onSubmit={logInForm.handleSubmit(submitLogin)}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Sign in
        </Typography>
        <CstInput
          label="Email address"
          name="email"
          form={logInForm}
        ></CstInput>
        <CstInput label="Password" name="password" form={logInForm}></CstInput>
        <RouterLink
          to="/forgot-password"
          sx={{
            color: "primary.main",
            fontSize: 14,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Forgot Password
        </RouterLink>
        <Box mt={2}>
          <CstButton
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            size="large"
          >
            Submit
          </CstButton>
        </Box>
      </form>
    </Layout>
  );
};

export default Login;
