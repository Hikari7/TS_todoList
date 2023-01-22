import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { pink, red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#a8dadc",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#a8dadc",
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}
