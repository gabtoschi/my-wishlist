import React from 'react';
import ReactDOM from 'react-dom';

import RouteWrapper from './routes/RouteWrapper';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteWrapper />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
