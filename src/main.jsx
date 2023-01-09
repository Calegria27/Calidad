import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './Router/AppRouter';
import { AuthProvider } from './Auth/context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
