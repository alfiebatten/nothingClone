import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Nav from './components/Nav';
import Landing from './components/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Landing />
  </React.StrictMode>
);
