import { Box, styled } from "@mui/material";

interface InputLabelProps {
  error?: boolean;
}

export const RadioFieldContainer = styled(Box)(() => ({
  marginBottom: "1rem",
}));

export const LabelContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const InputLabel = styled("span", {
  shouldForwardProp: (prop) => prop !== "error",
})<InputLabelProps>(({ error, theme }) => ({
  position: "relative",
  display: "inline-block",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: error ? theme.palette.error.main : theme.palette.primary.dark,
}));
