import { CstButton, InputError } from "@/components/Form";
import AuthLayout from "@/components/Layout/AuthLayout";
import theme from "@/theme";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { alpha } from "@mui/material/styles";
import { isNullable } from "@/helper/isNullable";
import Countdown from "@/components/Countdown";

const TFA = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const countDownEnded = () => {
    setShowTimer(false);
  };

  const resendCode = () => {
    setShowTimer(true);
  };

  const submitOtp = () => {
    if (otp.length < 4) {
      setError("Please enter otp");
    } else {
      setError("");
    }
    if (isNullable(error)) {
      console.log(otp);
    }
  };

  return (
    <AuthLayout>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          2-step verification
        </Typography>
        <Typography variant="p">
          We've sent a verification code to the number associated with this
          account.
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1" mb={2} fontWeight={500}>
          Enter 4 digit code
        </Typography>
        <Box
          sx={{
            width: 275,
            mx: "auto",
          }}
        >
          <OtpInput
            containerStyle={{
              justifyContent: "center",
            }}
            inputStyle={{
              border: `1px solid ${
                isNullable(error)
                  ? theme.palette.gray200
                  : theme.palette.error.main
              }`,
              width: "56px",
              height: "56px",
              margin: "0 8px",
              fontSize: "16px",
              borderRadius: 8,
            }}
            focusStyle={{
              outline: "none",
              boxShadow: `${alpha(
                theme.palette.primary.main,
                0.25
              )} 0 0 0 0.2rem`,
              border: `1px solid ${theme.palette.primary.main}`,
            }}
            value={otp}
            onChange={setOtp}
            numInputs={4}
          />
          {!isNullable(error) && <InputError errorMessage={error}></InputError>}
        </Box>
        <Box mt={3}>
          {showTimer ? (
            <>
              Resend code in
              <Typography variant="span" sx={{ pl: 1, fontWeight: 600 }}>
                <Countdown
                  totalTimeInSeconds={60}
                  initialText="00:60"
                  countdownEnded={countDownEnded}
                />
              </Typography>
            </>
          ) : (
            <Button
              variant="text"
              sx={{
                textTransform: "initial",
                fontWeight: 400,
                fontSize: 14,
                textDecoration: "underline",
              }}
              onClick={resendCode}
            >
              Resend code
            </Button>
          )}
        </Box>

        <Box mt={2}>
          <CstButton
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            size="large"
            onClick={submitOtp}
          >
            Submit
          </CstButton>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default TFA;
