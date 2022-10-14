import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; //
import { UserProvider } from './contexts/UserContext';
import { LocationProvider } from './contexts/LocationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <LocationProvider>
            <App />
          </LocationProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

