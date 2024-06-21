import './App.css'
import Bugs from './pages/Bugs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fish from './pages/Fish';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home'
import SeaCreatures from './pages/SeaCreatures';
import Fossils from './pages/Fossils';

function App() {

  return (
    <Router>
    <div className='d-flex'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/sea-creatures" element={<SeaCreatures />} />
        <Route path="/fossils" element={<Fossils />} />

      </Routes>
    </div>
  </Router>
  )
}

export default App
