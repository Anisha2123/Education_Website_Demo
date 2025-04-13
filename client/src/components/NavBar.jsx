

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Apply', path: '/apply' },
  ];

  return (
<nav className="navbar">
  <div className="navbar-container">
    {/* Left: Logo */}
    <div className="navbar-logo">
      Pratibha<span>Skills</span>
    </div>

    {/* Center: Nav links for desktop */}
    <div className="navbar-links">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          onClick={() => setOpen(false)}
          className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </div>

    {/* Right: Toggle for mobile */}
    <div className="navbar-toggle-wrapper">
      <button onClick={() => setOpen(!open)} className="mobile-toggle">
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
    </div>
  </div>

  {/* Mobile dropdown */}
  <div className={`mobile-menu ${open ? 'show' : ''}`}>
    {navLinks.map((link, index) => (
      <Link
        key={index}
        to={link.path}
        onClick={() => setOpen(false)}
        className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
      >
        {link.name}
      </Link>
    ))}
  </div>
</nav>


  );
};

export default Navbar;

