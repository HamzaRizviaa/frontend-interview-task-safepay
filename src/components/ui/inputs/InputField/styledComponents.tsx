import { styled } from "@mui/system";
import { SearchIconSVG } from "../../../../assets/svg-icons";
import { TextField } from "@mui/material";

export const InputFieldContainer = styled("div")(({ theme }) => ({
  marginBottom: "0.5rem",

  "& .MuiFormHelperText-root": {
    color: theme.palette.error.main,
    fontSize: "0.7rem",
    fontWeight: "bold",
    marginLeft: "0",
  },
}));

export const LabelsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

interface InputLabelProps {
  error?: boolean;
}

export const InputLabel = styled("span", {
  shouldForwardProp: (prop) => prop !== "error",
})<InputLabelProps>(({ error, theme }) => ({
  position: "relative",
  display: "inline-block",
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  textTransform: "uppercase",
  color: error ? theme.palette.error.main : theme.palette.primary.dark,
}));

export const RightLabel = styled("span")(({ theme }) => ({
  display: "inline-block",
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: theme.palette.secondary.main,
}));

export const SearchIcon = styled(SearchIconSVG)({
  filter:
    "brightness(0) saturate(100%) invert(18%) sepia(87%) saturate(1200%) hue-rotate(199deg) brightness(104%) contrast(98%)",
  cursor: "pointer",
  marginRight: 10,
  width: "20px",
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: `${theme.palette.primary.dark} !important`,
    border: `1px solid ${theme.palette.primary.dark}`,
    paddingLeft: "1rem !important",
    fontSize: "1.4rem !important",
    lineHeight: "1.6 !important",
    backgroundColor: theme.palette.secondary.dark,

    "& svg": {
      fontSize: "2.5rem",
    },

    "& input": {
      height: "2.94rem",
      padding: 0,
    },
  },
}));
