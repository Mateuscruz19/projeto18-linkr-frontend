import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/GlobalStyle";
import AuthProvider from "./contexts/AuthContext.js";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
       <AuthProvider>
         <App />
      </AuthProvider>
  </React.StrictMode>
);