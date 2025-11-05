import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlayerProfilePage from './components/PlayerProfilePage';
import Navbar from './components/Navbar';
import AboutMePage from './components/AboutMePage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:id" element={<PlayerProfilePage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
