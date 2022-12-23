import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'views/App/App';

const node = document.getElementById('root');

if (node) {
    const root = ReactDOM.createRoot(node);
    root.render(<App />);
}
