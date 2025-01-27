import { styled } from "@mui/system";
import BoxMUI from "@mui/material/Box";

export const Box = styled(BoxMUI)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "30vw",
  background: `
  linear-gradient(
    85deg,
    #e0f7ff 0%,
    white 100%
  )
`,
  borderRadius: "16px",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
}));

export const BoxFormHeader = styled(BoxMUI)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  alignItems: "center",
  width: "100%",
});

export const ButtonWrapper = styled(BoxMUI)({
  margin: "10px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MessageLabel = styled("p")({
  margin: "20px 0",
  fontSize: "18px",
  color: "#333",
  textAlign: "center",
  fontWeight: "bold",
});
