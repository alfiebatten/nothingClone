import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Landing from './components/Landing';
import Cursor from './components/Cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cursor />
    <Landing />
  </React.StrictMode>
);
