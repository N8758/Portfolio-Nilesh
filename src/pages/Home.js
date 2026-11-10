import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "MERN Stack Developer",
  "LLM Integration Engineer",
  "React & Node.js Developer",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "60+", label: "Apps Built" },
  { value: "8", label: "Engineering Roles" },
  { value: "45+", label: "ML Models" },
];

const techBadges = [
  "React.js", "Node.js", "TypeScript", "MongoDB",
  "OpenAI API", "LangChain", "Python", "AWS",
  "PostgreSQL", "Docker", "GraphQL", "Redis",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
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

  return (
    <section className="hm-section" id="home">
      {/* Background */}
      <div className="hm-blob hm-blob-1" aria-hidden="true" />
      <div className="hm-blob hm-blob-2" aria-hidden="true" />
      <div className="hm-blob hm-blob-3" aria-hidden="true" />

      <div className="hm-inner">
        {/* LEFT */}
        <div className="hm-left">
          <div className="hm-eyebrow">
            <span className="hm-eyebrow-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h1 className="hm-name">
            Hi, I'm<br />
            <span className="hm-name-gradient">Nilesh Pulate</span>
          </h1>

          <div className="hm-type">
            <span className="hm-type-text" aria-label={roles[roleIndex]}>
              {displayed}
            </span>
            <span className="hm-cursor" aria-hidden="true">|</span>
          </div>

          <p className="hm-bio">
            I build production-grade web apps, AI-integrated platforms, and
            intelligent systems — from MERN stacks to RAG pipelines and LLM
            deployments that solve real business problems.
          </p>

          {/* Stats */}
          <div className="hm-stats">
            {stats.map((s) => (
              <div className="hm-stat" key={s.label}>
                <span className="hm-stat-value">{s.value}</span>
                <span className="hm-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hm-cta">
            <a href="/resume.pdf" download className="hm-btn hm-btn-primary">
              <svg className="hm-btn-icon hm-icon-download" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
            <a href="/projects" className="hm-btn hm-btn-secondary">
              View Projects
              <svg className="hm-btn-icon hm-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Tech badges */}
          <div className="hm-badges">
            {techBadges.map((t, i) => (
              <span className="hm-badge" key={t} style={{ "--i": i }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hm-right">
          <div className="hm-photo">
            <div className="hm-ring hm-ring-outer" aria-hidden="true" />
            <div className="hm-ring hm-ring-inner" aria-hidden="true" />
            <img
              src="/profile.png"
              alt="Nilesh Pulate"
              className="hm-photo-img"
              width="320"
              height="320"
              decoding="async"
              fetchpriority="high"
            />

            {/* Floating cards */}
            <div className="hm-float hm-float-top">
              <span className="hm-float-icon" aria-hidden="true">⚡</span>
              <div>
                <div className="hm-float-title">Full Stack</div>
                <div className="hm-float-sub">MERN + TypeScript</div>
              </div>
            </div>
            <div className="hm-float hm-float-bottom">
              <span className="hm-float-icon" aria-hidden="true">🤖</span>
              <div>
                <div className="hm-float-title">AI / LLM</div>
                <div className="hm-float-sub">GPT-4 · RAG · LangChain</div>
              </div>
            </div>
            <div className="hm-float hm-float-side">
              <span className="hm-float-icon" aria-hidden="true">☁️</span>
              <div>
                <div className="hm-float-title">Cloud</div>
                <div className="hm-float-sub">AWS · Azure · Docker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}