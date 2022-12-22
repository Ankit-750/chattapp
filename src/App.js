import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import history from './Utilities/history';
import PrivateRoute from './Utilities/private-route';
import Home from './Home/Home';
import Chat from './Chat/Chat';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#58a5f0',
            main: '#2F3336',
            dark: '#a80a0a',
        },
        secondary: {
            light: '#a80a0a',
            main: '#a80a0a',
            dark: '#a80a0a',
            contrastText: '#a80a0a',
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                <Router history={history}>
                    <Route path="/" exact component={Home} />
                    <PrivateRoute path="/chat" component={Chat} />
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
