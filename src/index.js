import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: orange[200],
      main: "#FB8C00",
      dark: "#EF6C00",
      contrastText: "rgb(0,0,0)"
    }
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
