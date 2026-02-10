import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome, FaUser, FaProjectDiagram, FaBookOpen, FaBriefcase,
 FaBars, FaTimes
} from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
  <>
    <header className="navbar">
      <div className="left">
        <Link to="/" onClick={closeMenu}>
          <img src="/Nileshlogo.png" alt="Logo" className="logo-img" />
        </Link>
      </div>

      <div className={`right ${open ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}><FaHome /></Link>
        <Link to="/about" onClick={closeMenu}><FaUser /></Link>
        <Link to="/projects" onClick={closeMenu}><FaProjectDiagram /></Link>
        <Link to="/experience" onClick={closeMenu}><FaBriefcase /></Link>
        <Link to="/skills" onClick={closeMenu}><FaBookOpen /></Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </header>

    {open && <div className="nav-overlay" onClick={closeMenu}></div>}
  </>
);
}
