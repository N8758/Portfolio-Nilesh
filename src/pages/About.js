import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-container">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        I'm <strong>Nilesh Pulate</strong>, a highly motivated Full Stack Developer skilled in the MERN stack,
        Python, and AI/ML. I love transforming complex challenges into simple, beautiful, and intuitive solutions.
      </p>

      <h3 className="sub-heading">Certifications & Courses</h3>
      <ul className="certifications">
        <li>NPTEL: Data Analytics with Python</li>
        <li>Web Development with Python – Innovations Hub</li>
        <li>Java – Great Learning</li>
        <li>AWS – Alison / Simplilearn</li>
        <li>JavaScript Algorithms – freeCodeCamp</li>
        <li>Ruby, C, C++ – Techneorbit</li>
      </ul>

      <h3 className="sub-heading">Self Introduction Video</h3>
      <div className="video-wrapper">
        <video className="intro-video" controls>
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
