"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'; // Import your store configuration
import LoadingSpinner from '../main-components/LoadingSpinner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner/>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
