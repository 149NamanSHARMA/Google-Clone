import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ResultContextProvider } from './contexts/ResultContextProvider';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>
);

reportWebVitals();
