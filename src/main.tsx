import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from '@styles/Global.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
