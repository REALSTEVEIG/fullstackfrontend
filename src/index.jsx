import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import App from './App.jsx';
import Login from './components/login.jsx';
import AllPosts from './components/allPosts.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-posts" element={<AllPosts />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
