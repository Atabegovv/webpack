import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import './common.css';

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <App />
    </Router>,
);
