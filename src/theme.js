import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

export default createMuiTheme({
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
