import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">M2 Info Squad</Link>
      <Link to="/about" className="nav-link">About Me</Link>
    </nav>
  );
};

export default Navbar;
