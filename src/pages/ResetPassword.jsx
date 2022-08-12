import AuthLayout from "@/components/Layout/AuthLayout";
import { CstButton, CstInput, RouterLink } from "@/components/Form";
import { Box, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const schema = yup.object({
    password: yup.string().required("Please enter password"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  });
  const newPasswordForm = useForm({ resolver: yupResolver(schema) });

  const submitNewPassword = (value) => {
    console.log(value);
    setPasswordUpdated(true);
  };
  return (
    <AuthLayout>
      {!passwordUpdated ? (
        <form onSubmit={newPasswordForm.handleSubmit(submitNewPassword)}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "500",
              letterSpacing: "-0.03em",
              marginBottom: 3,
            }}
          >
            Set new password
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We'll ask you to sign in again after you save your changes.
          </Typography>
          <CstInput
            label="New password"
            name="password"
            type="password"
            form={newPasswordForm}
          ></CstInput>
          <CstInput
            label="Re-enter new password"
            name="rePassword"
            type="password"
            form={newPasswordForm}
          ></CstInput>
          <Box mt={2}>
            <CstButton
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
              size="large"
            >
              Update password
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
            Password updated
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Please sign in to continue.
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
                  Continue to sign in
                </CstButton>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </AuthLayout>
  );
};

export default ResetPassword;
