import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

import './index.css';

const BrowserRouter = createBrowserRouter({
  basename: '/',
  window: window 
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider routes={routes}> 
      </RouterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);