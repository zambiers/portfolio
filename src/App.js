import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './assets/components/Layout';

// My files
import Home from './pages/home';
import AboutMe from './pages/aboutme';
import MyWork from './pages/mywork';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<AboutMe />} />
          <Route path="/page2" element={<MyWork />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
