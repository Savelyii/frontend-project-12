import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';

import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import store from './slices/index.js';
import App from './components/App.jsx';
import SocketProvider from './contexts/SocketProvider.jsx';

import resources from './locales/index.js';

const init = async (socket) => {
  const i18n = i18next.createInstance();

  const rollbarConfig = {
    accessToken: process.env.REACT_APP_ROLLBAR,
    environment: 'production',
  };

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
    });

  const vdom = (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <SocketProvider socket={socket}>
            <I18nextProvider i18n={i18n}>
              <App />
            </I18nextProvider>
          </SocketProvider>
        </StoreProvider>
      </ErrorBoundary>
    </RollbarProvider>
  );

  return vdom;
};

export default init;
