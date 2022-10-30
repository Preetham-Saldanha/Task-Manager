import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TasksState from './Contexts/TasksState';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TasksState>
    <App />
    </TasksState>
    
  </React.StrictMode>
);


