import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/pages/App/App';
import  { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from "./serviceWorker";

// CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/style.css';
// import './ace-master/assets/css/bootstrap.min.css';
// import './ace-master/assets/font-awesome/4.5.0/css/font-awesome.min.css';
// import './ace-master/assets/css/fonts.googleapis.com.css';
// import './ace-master/assets/css/ace.min.css';
// import './ace-master/assets/css/ace-skins.min.css';
// import './ace-master/assets/css/ace-rtl.min.css';
// import './ace-master/';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
