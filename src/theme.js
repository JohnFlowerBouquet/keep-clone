import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#FB8C00",
      default: "#FB8C00"
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTooltip: {
      popper: {
        marginBottom: "-10px"
      }
    }
  }
});
