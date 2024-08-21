import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './Context/AppContext'; // Ensure this import path is correct

// Create the root element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App wrapped with the AppContextProvider
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);

// Report web vitals (optional, can be removed if not needed)
reportWebVitals();
