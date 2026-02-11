import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience-education-section">
      <div className="section-column">
        <h2 className="section-heading">Education</h2>
        <div className="item-box">
          <h3>B.E. in Information Technology</h3>
          <p>2021–2025 | Amrutvahini College of Engineering, Pune University</p>
          <p>CGPA: 8.08</p>
        </div>
        <div className="item-box">
          <h3>HSC – CSMM, Pathare</h3>
          <p>2021 | 68%</p>
        </div>
        <div className="item-box">
          <h3>SSC – PMV, Durgapur</h3>
          <p>2019 | 72%</p>
        </div>
      </div>

      <div className="section-column">
  <h2 className="section-heading">Experience</h2>

  {/* FULL TIME */}
  <div className="item-box">
    <h3>Highbrow Technosoft Pvt. Ltd</h3>
    <p>Sept 2025 – Present</p>
    <p>Full Stack Developer</p>
    <p>Delivered production MERN features and optimized backend API workflows.</p>
  </div>

  {/* PART TIME */}
  <div className="item-box">
    <h3>Technical One (Part-Time)</h3>
    <p>Oct 2025 – Present</p>
    <p>AI / ML Trainer</p>
    <p>Mentored learners in Python and ML projects with deployment guidance.</p>
  </div>

  {/* INTERNSHIPS */}
  <div className="item-box">
    <h3>The Developers Arena (Remote)</h3>
    <p>Mar 2025 – Aug 2025</p>
    <p>Full Stack Developer</p>
  </div>

  <div className="item-box">
    <h3>Technical One, Pune</h3>
    <p>Jul 2024 – Dec 2024</p>
    <p>Full Stack Developer Intern</p>
  </div>

  <div className="item-box">
    <h3>YBI Foundation, Delhi</h3>
    <p>Feb 2025</p>
    <p>AI / ML Intern</p>
  </div>

  <div className="item-box">
    <h3>Techplement, Pune</h3>
    <p>Nov 2024</p>
    <p>Full Stack Developer Intern</p>
  </div>

  <div className="item-box">
    <h3>Sumago Infotech, Nashik</h3>
    <p>Jan 2024 – Feb 2024</p>
    <p>Full Stack Developer Intern</p>
  </div>

  <div className="item-box">
    <h3>Advanto Software, Pune</h3>
    <p>Jan 2024 – Feb 2024</p>
    <p>ML Intern</p>
  </div>
</div>

    </section>
  );
}
