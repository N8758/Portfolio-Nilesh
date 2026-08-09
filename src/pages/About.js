import React from 'react';
import './About.css';

const certs = [
  { title: "Data Analytics with Python", org: "NPTEL", icon: "📊" },
  { title: "Web Development with Python", org: "Innovations Hub", icon: "🌐" },
  { title: "Java Programming", org: "Great Learning", icon: "☕" },
  { title: "AWS Fundamentals", org: "Alison / Simplilearn", icon: "☁️" },
  { title: "JavaScript Algorithms & DS", org: "freeCodeCamp", icon: "⚡" },
  { title: "Ruby, C, C++", org: "Techneorbit", icon: "💻" },
];

const highlights = [
  { icon: "🚀", value: "55+", label: "Apps Built" },
  { icon: "🤖", value: "45+", label: "ML Models" },
  { icon: "🏢", value: "8",   label: "Eng. Roles" },
  { icon: "📅", value: "2+",  label: "Years Exp." },
];

const traits = [
  { icon: "⚡", title: "Full Stack", desc: "End-to-end MERN apps from DB schema to deployed UI." },
  { icon: "🤖", title: "AI / LLM",  desc: "GPT-4, RAG pipelines, LangChain & agentic workflows." },
  { icon: "☁️", title: "Cloud",      desc: "AWS, Azure, Docker & CI/CD for zero-downtime deploys." },
];

export default function About() {
  return (
    <section className="ab-section" id="about">
      <div className="ab-blob ab-blob-1" />
      <div className="ab-blob ab-blob-2" />

      <div className="ab-inner">

        {/* ── Header ── */}
        <div className="ab-header">
          <p className="ab-eyebrow">Who I Am</p>
          <h2 className="ab-title">
            About <span className="ab-title-accent">Me</span>
          </h2>
        </div>

        {/* ── Top grid: bio + traits ── */}
        <div className="ab-top">
          {/* Bio card */}
          <div className="ab-bio-card">
            <div className="ab-avatar">NP</div>
            <div className="ab-bio-text">
              <h3 className="ab-name">Nilesh Pulate</h3>
              <p className="ab-role-line">Full Stack & AI/ML Engineer · Pune, India</p>
              <p className="ab-bio">
                I'm a results-driven Full Stack Developer with <strong>3+years</strong> of
                hands-on experience building production-grade MERN applications, LLM-integrated
                platforms, and intelligent ML systems. I love turning complex challenges into
                clean, scalable, and impactful solutions — from backend APIs to RAG pipelines.
              </p>
              <p className="ab-bio">
                With <strong>60+ apps shipped</strong> and <strong>45+ ML models built</strong>,
                I thrive in fast-paced environments where engineering meets real business impact.
              </p>

              {/* Social row */}
              <div className="ab-socials">
                <a href="https://github.com/N8758" target="_blank" rel="noopener noreferrer" className="ab-social-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="mailto:nileshpulate87@gmail.com" className="ab-social-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email
                </a>
                <a href="/resume.pdf" download className="ab-social-btn ab-social-btn--gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Trait cards */}
          <div className="ab-traits">
            {traits.map((t, i) => (
              <div className="ab-trait" key={i}>
                <span className="ab-trait-icon">{t.icon}</span>
                <div>
                  <div className="ab-trait-title">{t.title}</div>
                  <div className="ab-trait-desc">{t.desc}</div>
                </div>
              </div>
            ))}

            {/* Quick stats */}
            <div className="ab-mini-stats">
              {highlights.map((h, i) => (
                <div className="ab-mini-stat" key={i}>
                  <span className="ab-mini-icon">{h.icon}</span>
                  <span className="ab-mini-val">{h.value}</span>
                  <span className="ab-mini-label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Certifications ── */}
        <div className="ab-certs-wrap">
          <h3 className="ab-section-sub">
            <span className="ab-sub-line" />
            Certifications & Courses
            <span className="ab-sub-line" />
          </h3>
          <div className="ab-certs">
            {certs.map((c, i) => (
              <div className="ab-cert" key={i}>
                <span className="ab-cert-icon">{c.icon}</span>
                <div>
                  <div className="ab-cert-title">{c.title}</div>
                  <div className="ab-cert-org">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Intro Video ── */}
        <div className="ab-video-wrap">
          <h3 className="ab-section-sub">
            <span className="ab-sub-line" />
            Self Introduction
            <span className="ab-sub-line" />
          </h3>
          <div className="ab-video-frame">
            <div className="ab-video-glow" />
            <video className="ab-video" controls>
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}