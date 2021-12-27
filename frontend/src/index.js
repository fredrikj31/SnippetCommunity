import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);