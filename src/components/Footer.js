import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const navLinks = [
  { to: "/",           label: "Home" },
  { to: "/about",      label: "About" },
  { to: "/projects",   label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills",     label: "Skills" },
];

const socials = [
  { href: "https://github.com/N8758",                                       icon: <FaGithub />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/nilesh-pulate-885a16237/",           icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:nileshpulate87@gmail.com",                                icon: <FaEnvelope />, label: "Email"    },
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-blob ft-blob-1" />
      <div className="ft-blob ft-blob-2" />

      <div className="ft-inner">

        {/* Brand col */}
        <div className="ft-brand">
          <div className="ft-brand-name">
            Nilesh<span className="ft-accent">.</span>
          </div>
          <p className="ft-brand-role">Full Stack Developer · AI/ML Engineer</p>
          <p className="ft-brand-desc">
            Building scalable web apps, LLM-integrated platforms, and intelligent
            systems that solve real business problems.
          </p>
          <div className="ft-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="ft-social"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="ft-col">
          <h4 className="ft-col-title">Quick Links</h4>
          <ul className="ft-nav">
            {navLinks.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="ft-nav-link">
                  <span className="ft-nav-arrow">→</span> {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="ft-col">
          <h4 className="ft-col-title">Get In Touch</h4>
          <ul className="ft-contact">
            <li>
              <FaMapMarkerAlt className="ft-contact-icon" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li>
              <FaPhoneAlt className="ft-contact-icon" />
              <a href="tel:+918767542209" className="ft-contact-link">+91 87675 42209</a>
            </li>
            <li>
              <FaEnvelope className="ft-contact-icon" />
              <a href="mailto:nileshpulate87@gmail.com" className="ft-contact-link">
                nileshpulate87@gmail.com
              </a>
            </li>
          </ul>

          <a href="/resume.pdf" download className="ft-resume-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Resume
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <span>© {new Date().getFullYear()} Nilesh Pulate · All Rights Reserved</span>
        <span className="ft-bottom-made">
          Built with <span className="ft-heart">♥</span> using React.js
        </span>
      </div>
    </footer>
  );
}