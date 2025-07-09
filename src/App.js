import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './assets/components/Layout';

// My files
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Ubuntu from './pages/ubuntu';
import Minutes from './pages/minutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Ubuntu" element={<Ubuntu />} />
          <Route path="/Minutes" element={<Minutes />} />
          <Route path="/Contacts" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
