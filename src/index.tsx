import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './routes/App';
import ProductListing from './routes/ProductListing/ProductListing';
import WishlistListing from './routes/WishlistListing/WishlistListing';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<ProductListing />} />
          <Route path="lista-de-desejos" element={<WishlistListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
