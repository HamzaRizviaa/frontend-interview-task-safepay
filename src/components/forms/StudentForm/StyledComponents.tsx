import { styled } from "@mui/system";
import BoxMUI from "@mui/material/Box";

export const Box = styled(BoxMUI)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "450px",
  backgroundColor: "white",
  borderRadius: "16px",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
});

export const BoxFormHeader = styled(BoxMUI)({
  display: "flex",
  justifyContent: "flex-start",
  gap: "90px",
  alignItems: "center",
  width: "100%",
});

export const ButtonWrapper = styled(BoxMUI)({
  margin: "10px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const FieldBox = styled(BoxMUI)({
  width: "300px",
  margin: "25px auto",
});
