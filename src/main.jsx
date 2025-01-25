// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import App.jsx

// Create a root element to render the application
const rootElement = document.getElementById('root');

// Render the app inside the root element
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
