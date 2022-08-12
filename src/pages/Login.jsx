import AuthLayout from "@/components/Layout/AuthLayout";
import { CstButton, CstInput, RouterLink } from "@/components/Form";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Entered email is not valid")
      .required("Please enter valid email address"),
    password: yup.string().required("Please enter your password"),
  });
  const logInForm = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const submitLogin = (value) => {
    console.log(value);
    navigate("/tfa", { replace: true });
  };
  return (
    <AuthLayout>
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
        <CstInput
          label="Password"
          type="password"
          name="password"
          form={logInForm}
        ></CstInput>
        <RouterLink
          to="/forgot-password"
          sx={{
            color: "primary.dark",
            fontSize: 14,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Forgot your password?
        </RouterLink>
        <Box mt={2}>
          <CstButton
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            size="large"
          >
            Sign in
          </CstButton>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default Login;
