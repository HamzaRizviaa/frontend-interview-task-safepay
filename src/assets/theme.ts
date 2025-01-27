//Material UI theme for the application

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#193A8C", //Safepay blue
      light: "#00cf83", //Safepay green
      dark: "#162f52", //blue black
    },
    secondary: {
      main: "#0467d0", //Mid Blue
      light: "#1ebbfd", //Light Blue
      darker: "#ffa700", //orange
      lighter: "#ffdf50", //yellow
      dark: "#ebf6ff", //Safepay Gray
    },
    tertiary: {
      main: "#C2ECE8", //Green
      light: "#6A9ADB", //Blue
      dark: "#F1DCBB", //orange
      lighter: "#F9F2D6", //yellow
    },
    error: {
      main: "#ff355a", //red
      light: "#ff355ac7",
    },
  },

  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),

    h1: {
      fontWeight: "bold",
    },
  },
});

export default theme;
