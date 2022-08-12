import { Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const InputError = ({ errorMessage }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      py={1}
      sx={{
        color: "error.main",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      <InfoOutlinedIcon
        sx={{
          mr: "4px",
        }}
      ></InfoOutlinedIcon>
      {errorMessage}
    </Box>
  );
};
