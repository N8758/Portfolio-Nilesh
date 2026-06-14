import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const roles = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'MERN Stack Developer',
  'LLM Integration Engineer',
  'React & Node.js Developer',
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (pause) {
      timeoutRef.current = setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 1800);
      return () => clearTimeout(timeoutRef.current);
    }

    const current = roles[roleIndex];

    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        setPause(true);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 35);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, pause, roleIndex]);

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '55+', label: 'Apps Built' },
    { value: '8', label: 'Engineering Roles' },
    { value: '45+', label: 'ML Models' },
  ];

  const techBadges = [
    'React.js', 'Node.js', 'TypeScript', 'MongoDB',
    'OpenAI API', 'LangChain', 'Python', 'AWS',
    'PostgreSQL', 'Docker', 'GraphQL', 'Redis',
  ];

  return (
    <section className="home-wrapper">
      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="home-inner">
        {/* LEFT */}
        <div className="home-left">
          <div className="eyebrow">
            <span className="dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm<br />
            <span className="name-gradient">Nilesh Pulate</span>
          </h1>

          <div className="typewriter-row">
            <span className="typewriter-text">{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">
            I build production-grade web apps, AI-integrated platforms, and
            intelligent systems — from MERN stacks to RAG pipelines and LLM
            deployments that solve real business problems.
          </p>

          {/* Stats */}
          <div className="stats-row">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-row">
            <a href="/resume.pdf" download className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
            <a href="/projects" className="btn-secondary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Tech badges */}
          <div className="badge-row">
            {techBadges.map((t) => (
              <span className="badge" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <div className="photo-frame">
            <div className="photo-ring ring-outer" />
            <div className="photo-ring ring-inner" />
            <img
              src="/profile.png"
              alt="Nilesh Pulate"
              className="profile-photo"
            />
            {/* Floating cards */}
            <div className="float-card card-top">
              <span className="card-icon">⚡</span>
              <div>
                <div className="card-title">Full Stack</div>
                <div className="card-sub">MERN + TypeScript</div>
              </div>
            </div>
            <div className="float-card card-bottom">
              <span className="card-icon">🤖</span>
              <div>
                <div className="card-title">AI / LLM</div>
                <div className="card-sub">GPT-4 · RAG · LangChain</div>
              </div>
            </div>
            <div className="float-card card-side">
              <span className="card-icon">☁️</span>
              <div>
                <div className="card-title">Cloud</div>
                <div className="card-sub">AWS · Azure · Docker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}