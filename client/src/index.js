import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
  <Nav />
  </HashRouter>,
  document.getElementById('root')
);
