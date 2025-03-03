import { styled } from "@mui/system";
import CardMUI from "@mui/material/Card";

export const Card = styled(CardMUI)(({ theme }) => ({
  width: "275px",
  maxHeight: "100%",
  boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
  backgroundColor: theme.palette.tertiary.main,
  borderRadius: "16px",
  padding: "16px",
  textTransform: "uppercase",

  p: {
    color: theme.palette.primary.main,
    fontSize: "18px",

    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
  },

  h1: {
    color: theme.palette.primary.dark,
    fontSize: "35px",

    [theme.breakpoints.down("xl")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
    },
  },

  span: {
    fontWeight: "bold",
    fontSize: "16px",

    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
    },
  },

  "& .MuiCardContent-root": {
    padding: 0,
  },

  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
}));

export const SubHeading = styled("p")({
  fontSize: "20px",
  fontWeight: "bold",
});

export const LogoWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
