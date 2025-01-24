//Input styles for input fields

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useInputStyles = makeStyles<Theme>((theme) => ({
  textFieldInput: {
    color: `${theme.palette.primary.dark} !important`,
    border: `1px solid ${theme.palette.primary.dark}`,
    paddingLeft: "1rem !important",
    fontSize: "1.4rem !important",
    lineHeight: "1.6 !important",
    backgroundColor: theme.palette.secondary.dark,

    "& svg": {
      fontSize: "2.5rem",
    },

    "& > input": {
      height: "2.94rem" || "auto",
      padding: 0,
    },
  },
}));
