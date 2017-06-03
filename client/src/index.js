import React from 'react';
import ReactDOM from 'react-dom';
import App from './App02';
import { HashRouter } from 'react-router-dom';
var AWS = require('aws-sdk');


ReactDOM.render(
  <HashRouter>
  <App />
  </HashRouter>,
  document.getElementById('root')
);
