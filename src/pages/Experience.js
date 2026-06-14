import React from 'react';
import './Experience.css';

const education = [
  {
    degree: 'B.E. in Information Technology',
    institute: 'Amrutvahini College of Engineering',
    university: 'Savitribai Phule Pune University',
    year: '2021 – 2025',
    grade: 'CGPA: 8.08',
    icon: '🎓',
  },
  {
    degree: 'HSC (12th)',
    institute: 'CSMM, Pathare',
    year: '2021',
    grade: '68%',
    icon: '📘',
  },
  {
    degree: 'SSC (10th)',
    institute: 'PMV, Durgapur',
    year: '2019',
    grade: '72%',
    icon: '📗',
  },
];

const experience = [
  {
    company: 'Highbrow Technosoft Pvt. Ltd.',
    location: 'Pune',
    role: 'Full Stack Developer',
    period: 'Sep 2025 – Present',
    type: 'Full-Time',
    color: '#00bfff',
    desc: 'Delivered production MERN features and AI-integrated apps for live clients, improving feature delivery by 30%.',
  },
  {
    company: 'Technical One',
    location: 'Pune',
    role: 'AI / ML Trainer',
    period: 'Oct 2025 – May 2026',
    type: 'Part-Time',
    color: '#ffd700',
    desc: 'Designed ML curriculum & mentored 50+ learners in Python, OpenAI API, and Streamlit app deployment.',
  },
  {
    company: 'The Developers Arena',
    location: 'Remote',
    role: 'Full Stack Developer',
    period: 'Mar 2025 – Aug 2025',
    type: 'Internship',
    color: '#00bfff',
    desc: 'Built auth flows, REST APIs & modular React/Angular components; integrated Gemini AI features.',
  },
  {
    company: 'YBI Foundation',
    location: 'Delhi',
    role: 'AI / ML Intern',
    period: 'Feb 2025',
    type: 'Internship',
    color: '#a78bfa',
    desc: 'Built 3+ predictive ML models with EDA, feature engineering, and metric-driven optimization.',
  },
  {
    company: 'Technical One',
    location: 'Pune',
    role: 'Full Stack Developer Intern',
    period: 'Jul 2024 – Dec 2024',
    type: 'Internship',
    color: '#00bfff',
    desc: 'Built MERN components with MVC architecture; integrated PostgreSQL & MongoDB, improving response time by 20%.',
  },
  {
    company: 'Techplement',
    location: 'Pune',
    role: 'Full Stack Developer Intern',
    period: 'Nov 2024',
    type: 'Internship',
    color: '#00bfff',
    desc: 'Contributed to feature development, API integrations, and performance improvements in production.',
  },
  {
    company: 'Advanto Software',
    location: 'Pune',
    role: 'ML Intern',
    period: 'Jan 2024 – Feb 2024',
    type: 'Internship',
    color: '#a78bfa',
    desc: 'Trained and optimized ML models through hyperparameter tuning and data analysis.',
  },
  {
    company: 'Sumago Infotech',
    location: 'Nashik',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2024 – Feb 2024',
    type: 'Internship',
    color: '#00bfff',
    desc: 'Contributed to feature development, API integrations, and debugging in an Agile team.',
  },
];

const typeColors = {
  'Full-Time': '#00bfff',
  'Part-Time': '#ffd700',
  Internship: '#a78bfa',
};

export default function Experience() {
  return (
    <section className="exp-section">
      {/* Background blobs – same as Home */}
      <div className="exp-blob exp-blob-1" />
      <div className="exp-blob exp-blob-2" />

      <div className="exp-inner">

        {/* ── EDUCATION ── */}
        <div className="exp-col">
          <div className="exp-col-header">
            <span className="exp-col-icon">🎓</span>
            <h2 className="exp-col-title">Education</h2>
          </div>

          <div className="edu-cards">
            {education.map((e, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-icon">{e.icon}</div>
                <div className="edu-body">
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-institute">{e.institute}</p>
                  {e.university && <p className="edu-uni">{e.university}</p>}
                  <div className="edu-meta">
                    <span className="edu-year">{e.year}</span>
                    <span className="edu-grade">{e.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <div className="exp-col exp-col-wide">
          <div className="exp-col-header">
            <span className="exp-col-icon">💼</span>
            <h2 className="exp-col-title">Experience</h2>
          </div>

          <div className="timeline">
            {experience.map((e, i) => (
              <div className="tl-item" key={i}>
                {/* spine dot */}
                <div
                  className="tl-dot"
                  style={{ background: typeColors[e.type] || '#00bfff' }}
                />
                {i < experience.length - 1 && <div className="tl-line" />}

                <div className="tl-card">
                  <div className="tl-top">
                    <div>
                      <h3 className="tl-company">{e.company}</h3>
                      <span className="tl-loc">📍 {e.location}</span>
                    </div>
                    <span
                      className="tl-badge"
                      style={{
                        color: typeColors[e.type],
                        borderColor: typeColors[e.type],
                      }}
                    >
                      {e.type}
                    </span>
                  </div>

                  <div className="tl-mid">
                    <span className="tl-role">{e.role}</span>
                    <span className="tl-period">{e.period}</span>
                  </div>

                  <p className="tl-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}