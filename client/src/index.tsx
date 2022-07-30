import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './router/AppRouter';
import { ThemeProvider, theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import { createReduxStore } from './state/createReduxStore';

const store = createReduxStore({}, []);

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
