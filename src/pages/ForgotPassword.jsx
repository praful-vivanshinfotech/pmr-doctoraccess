import AuthLayout from "@/components/Layout/AuthLayout";
import { CstButton, CstInput, RouterLink } from "@/components/Form";
import { Box, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [linkSent, setLinkSent] = useState(false);

  const schema = yup.object({
    email: yup
      .string()
      .email("Entered email is not valid")
      .required("Please enter valid email address"),
  });
  const forgotPasswordForm = useForm({ resolver: yupResolver(schema) });

  const submitLogin = (value) => {
    console.log(value);
    setLinkSent(true);
  };

  return (
    <AuthLayout>
      {!linkSent ? (
        <form onSubmit={forgotPasswordForm.handleSubmit(submitLogin)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <RouterLink to="/">
              <img
                src="/images/back-arrow.svg"
                alt=""
                style={{
                  display: "block",
                }}
              />
            </RouterLink>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "500",
                letterSpacing: "-0.03em",
                pl: 2,
              }}
            >
              Reset password
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Enter your email below to receive instructions on how to reset your
            password.
          </Typography>
          <CstInput
            label="Email address"
            name="email"
            form={forgotPasswordForm}
          ></CstInput>
          <Box mt={2}>
            <CstButton
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
              size="large"
            >
              Send password reset link
            </CstButton>
          </Box>
        </form>
      ) : (
        <>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "500",
              letterSpacing: "-0.03em",
              marginBottom: 3,
            }}
          >
            Password link sent
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We've sent you a link to reset your password. Please check your
            inbox and junk folder for the password reset email.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box mt={2}>
                <CstButton
                  component={Link}
                  to="/"
                  variant="contained"
                  disableElevation
                  fullWidth
                  size="large"
                >
                  Back to sign in
                </CstButton>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
