import createMuiTheme, {
  ThemeOptions
} from '@material-ui/core/styles/createMuiTheme';

export default function appTheme(options: ThemeOptions) {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#FB8C00'
      }
    },
    overrides: {
      MuiTooltip: {
        popper: {
          marginBottom: '-10px'
        }
      }
    },
    ...options
  });
}
