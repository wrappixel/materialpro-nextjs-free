import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5",
      light: "#e3f1fc",
      dark: "#1e88e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#21c1d6",
      light: "#e1f7f8",
      dark: "#21c1d6",
      contrastText: "#ffffff",
    },
    success: {
      main: "#13deb9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#7460ee",
      light: "#dedaf9",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#fa896b",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ffb22b",  
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
  },
});

export default theme;
