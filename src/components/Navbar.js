import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaUser, FaProjectDiagram, FaBookOpen, FaBriefcase,
  FaBars, FaTimes
} from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { to: '/',           icon: <FaHome />,          label: 'Home' },
  { to: '/about',      icon: <FaUser />,           label: 'About' },
  { to: '/projects',   icon: <FaProjectDiagram />, label: 'Projects' },
  { to: '/experience', icon: <FaBriefcase />,      label: 'Experience' },
  { to: '/skills',     icon: <FaBookOpen />,       label: 'Skills' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(p => !p);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close on route change
  useEffect(() => { closeMenu(); }, [location]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Nileshlogo.png" alt="Nilesh Pulate" className="nav-logo-img" />
          <span className="nav-logo-text">Nilesh<span className="nav-logo-accent">.</span></span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'nav-link--active' : ''}`}
            >
              <span className="nav-link-icon">{icon}</span>
              <span className="nav-link-label">{label}</span>
              {location.pathname === to && <span className="nav-link-dot" />}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a href="/resume.pdf" download className="nav-cta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Resume
        </a>

        {/* Hamburger */}
        <button className="nav-burger" onClick={toggleMenu} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? 'nav-drawer--open' : ''}`}>
        <div className="nav-drawer-header">
          <span className="nav-drawer-name">Nilesh<span className="nav-logo-accent">.</span></span>
        </div>
        <nav className="nav-drawer-links">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-drawer-link ${location.pathname === to ? 'nav-drawer-link--active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-drawer-icon">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <a href="/resume.pdf" download className="nav-drawer-cta" onClick={closeMenu}>
          Download Resume
        </a>
      </div>

      {/* Overlay */}
      {open && <div className="nav-overlay" onClick={closeMenu} />}
    </>
  );
}