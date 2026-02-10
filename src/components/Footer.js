import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* FOOTER MAIN CONTENT */}
      <div className="footer-container">

        <div className="footer-section">
          <h3>Nilesh Pulate</h3>
          <p>Full Stack Developer | AI/ML Enthusiast</p>
          <p>Building scalable applications & AI solutions.</p>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p><FaMapMarkerAlt /> Loni Bk, Maharashtra</p>
          <p><FaPhoneAlt /> +91-8767542209</p>
          <p><FaEnvelope /> nileshpulate87@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="footer-icons">
            <a href="https://github.com/N8758" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nilesh-pulate-885a16237/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:nileshpulate87@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT — ALWAYS LAST */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Nilesh Pulate | All Rights Reserved
      </div>

    </footer>
  );
}
