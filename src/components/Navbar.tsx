import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">M2 Info Squad</Link>
      <div className="nav-links">
        <Link to="/about" className="nav-link">About Me</Link>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
