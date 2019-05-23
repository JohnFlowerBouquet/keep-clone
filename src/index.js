import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
