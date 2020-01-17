import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, Theme } from '@material-ui/core';
import appTheme from './theme';

const theme: Theme = appTheme({});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
