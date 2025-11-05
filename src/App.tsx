import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import HomePage from './components/HomePage';
import PlayerProfilePage from './components/PlayerProfilePage';
import Navbar from './components/Navbar';
import AboutMePage from './components/AboutMePage';
import './App.css';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/player/:id" element={<PlayerProfilePage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
