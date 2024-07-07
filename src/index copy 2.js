import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

// Make sure the element with id 'root' exists in your HTML
const container = document.getElementById('root');
const root = createRoot(container); // Use createRoot from react-dom/client

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
