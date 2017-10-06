import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { grey, deepOrange } from 'material-ui/colors/';

const globalTheme = createMuiTheme({
	palette: {
    type: 'dark',
	primary: grey,
    error: deepOrange
	},
});

ReactDOM.render(
    <MuiThemeProvider theme={globalTheme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
