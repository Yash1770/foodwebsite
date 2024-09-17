import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { CartProvider } from './CartContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-55pu1n44ddvfpx4r.us.auth0.com"
    clientId="NxXRl87VfzSt8NS1vZmCApMtdnlzSz0J"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >   <CartProvider>
  <App />
</CartProvider>
    </Auth0Provider>,
);
