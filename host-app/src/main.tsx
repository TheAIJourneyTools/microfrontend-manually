import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// expose React and ReactDOM as globals so microfrontends can reuse the host's React
(window as unknown as { React: typeof React }).React = React;
(window as unknown as { ReactDOM: typeof import('react-dom') }).ReactDOM =
  ReactDOM as unknown as typeof import('react-dom');

(window as unknown as { process: { env: { NODE_ENV: string } } }).process = {
  env: { NODE_ENV: 'production' },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
