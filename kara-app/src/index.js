import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

const isDev = process.env.NODE_ENV === 'development';
const AppWrapper = isDev ? React.StrictMode : React.Fragment;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppWrapper>
    <Router>
      <App />
    </Router>
  </AppWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
