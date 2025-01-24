import { styled } from "@mui/system";
import { SearchIconSVG } from "../../../../assets/svg-icons";

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
