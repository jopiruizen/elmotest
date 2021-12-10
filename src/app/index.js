import React from 'react';
import { Provider } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import AppRouter from './appRouter';
import store from '../store';

function App() {
  return (
    <Provider
      envStore={store.envStore}
    >
        <MuiThemeProvider theme={theme}>
            <AppRouter />
        </MuiThemeProvider>
    </Provider>    
  );
}

export default App;
