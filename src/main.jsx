/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/main.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 13th 2023, 1:26:10 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { CssBaseline } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingComponent from './components/shared/Loading/LoadingComponent';
import { persistor, store } from './features/store/store';
import './index.css';
import ThemeProviderWrapper from './theme.config/ThemeProviderWrapper';

const App = lazy(() => import('./App.jsx'));

const toastOptions = {
  position: 'bottom-right',
  autoClose: 2000,
  // autoClose: false,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
      <Provider store={store}>
        <ThemeProviderWrapper>
          <CssBaseline />
          <PersistGate loading={<LoadingComponent />} persistor={persistor}>
            <BrowserRouter>
              <Suspense fallback={<LoadingComponent />}>
                {/* <Suspense fallback={""}> */}
                <App />
                <ToastContainer {...toastOptions} />
              </Suspense>
            </BrowserRouter>
          </PersistGate>
        </ThemeProviderWrapper>
      </Provider>
    {/* </React.StrictMode> */}
  </>,
);
