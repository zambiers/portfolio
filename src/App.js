import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './assets/components/Layout';

// My files
import Home from './pages/home';
import Contact from './pages/contact';
import Ubuntu from './pages/ubuntu';
import Minutes from './pages/5Minutes';
import Oil from './pages/Oil';
import Aster from './pages/Aster';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Ubuntu" element={<Ubuntu />} />
          <Route path="/Minutes" element={<Minutes />} />
          <Route path="/Oil" element={<Oil />} />
          <Route path="/Aster" element={<Aster />} /> 
          <Route path="/Contacts" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
