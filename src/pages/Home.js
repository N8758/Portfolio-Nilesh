import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-left">
        <h1>
          Hi, I'm <span className="highlight">Nilesh Pulate</span>
        </h1>
        <p className="sub-title">
          Full Stack Developer | AI/ML Enthusiast | MERN Stack | Python | React.js
        </p>
        <p className="bio">
          I'm passionate about building scalable web apps, creating machine learning solutions,
          and constantly learning new technologies to improve user experience and performance.
        </p>
        <div className="home-buttons">
          <a href="/resume.pdf" download className="btn">Download Resume</a>
          <a href="Projects" className="btn secondary">View Projects</a>
        </div>
      </div>

      <div className="home-right">
        <img src="/profile.png" alt="Nilesh Pulate" className="profile-img" />
      </div>
    </section>
  );
}
