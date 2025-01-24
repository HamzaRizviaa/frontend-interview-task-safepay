//Globally used styled components

import { styled } from "@mui/system";
import ButtonMUI from "@mui/material/Button";
import { Logo2Black } from "../assets/svg-icons";
interface PageProps {
  page?: "home" | "lookup";
}

interface ButtonProps {
  page?: "header" | "home" | "homeDelete";
  size?: "large" | "small";
}

export const InputWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "page",
})<PageProps>(({ page, theme }) => ({
  margin: "50px 0px",
  padding: "50px",
  height: "auto",
  backgroundColor:
    page === "home"
      ? theme.palette.tertiary.light
      : theme.palette.tertiary.main,
}));

export const FlexLayoutWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "page",
})<PageProps>(({ page, theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px 0px",
  padding: "25px",
  backgroundColor:
    page === "home"
      ? theme.palette.tertiary.light
      : theme.palette.tertiary.dark,
}));

export const Button = styled(ButtonMUI, {
  shouldForwardProp: (prop) => prop !== "page" && prop !== "size",
})<ButtonProps>(({ theme, size, page }) => ({
  backgroundColor:
    page === "home"
      ? theme.palette.primary.main
      : page === "homeDelete"
      ? theme.palette.error.light
      : theme.palette.tertiary.main,
  margin: "0px 20px",
  fontWeight: "bold",
  textTransform: page === "header" ? "capitalize" : "uppercase",
  fontSize: size === "large" ? "1.4rem" : "1rem",
  color:
    page === "home" || page === "homeDelete"
      ? theme.palette.secondary.dark
      : theme.palette.primary.main,
  padding: size === "large" ? "10px 20px" : "6px 22px",

  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor:
      page === "home"
        ? theme.palette.secondary.main
        : page === "homeDelete"
        ? theme.palette.error.main
        : theme.palette.primary.light,
  },
}));

export const Logo2 = styled(Logo2Black)({
  height: "40px",
  width: "40px",
  cursor: "pointer",

  " &:hover": {
    transform: "rotate(360deg)",
    transition: "all 0.7s cubic-bezier(0.86, 0, 0.07, 1)",
  },
});
