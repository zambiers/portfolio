import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './assets/components/Layout';

// My files
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Ubuntu from './pages/ubuntu';
import Minutes from './pages/5Minutes';
import Oil from './pages/Oil';
import Escapeza from './pages/Escapeza';
import Gnome from './pages/Gnome';
// import TuneJam from './pages/Tunejam';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Ubuntu" element={<Ubuntu />} />
          <Route path="/Minutes" element={<Minutes />} />
          <Route path="/Oil" element={<Oil />} />
          <Route path="/Escapeza" element={<Escapeza />} />
          <Route path="/Gnome" element={<Gnome />} />
          {/* <Route path="/TuneJam" element={<TuneJam />} /> */}
          <Route path="/Contacts" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
