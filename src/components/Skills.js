import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const categories = [
  {
    label: "Frontend",
    icon: "⚡",
    color: "#00bfff",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "React.js", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 82 },
      { name: "Angular", level: 78 },
      { name: "Next.js", level: 76 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    label: "Backend",
    icon: "🛠️",
    color: "#ffd700",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 76 },
      { name: "JWT / RBAC", level: 82 },
      { name: "WebSockets", level: 74 },
      { name: "MVC Architecture", level: 84 },
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    color: "#34d399",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "Redis", level: 74 },
      { name: "Supabase", level: 78 },
      { name: "ChromaDB", level: 70 },
      { name: "Prisma ORM", level: 76 },
    ],
  },
  {
    label: "AI / ML",
    icon: "🤖",
    color: "#a78bfa",
    skills: [
      { name: "OpenAI GPT-4 API", level: 88 },
      { name: "LangChain", level: 78 },
      { name: "RAG Pipelines", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "scikit-learn", level: 78 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Agentic AI", level: 74 },
      { name: "LLAMA 2", level: 72 },
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁️",
    color: "#f97316",
    skills: [
      { name: "AWS (EC2 / S3)", level: 72 },
      { name: "Azure", level: 70 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions", level: 78 },
      { name: "Azure DevOps", level: 72 },
      { name: "Vercel / Render", level: 88 },
      { name: "Netlify", level: 85 },
    ],
  },
  {
    label: "Tools",
    icon: "🧰",
    color: "#fb7185",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Python", level: 90 },
      { name: "Pandas / NumPy", level: 84 },
      { name: "Streamlit", level: 78 },
      { name: "Power BI", level: 82 },
      { name: "Postman", level: 86 },
      { name: "Google Colab", level: 88 },
    ],
  },
];

function AnimatedBar({ level, color, inView }) {
  return (
    <div className="sk-track">
      <div
        className="sk-fill"
        style={{
          width: inView ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${color}cc, ${color})`,
          boxShadow: inView ? `0 0 10px ${color}66` : "none",
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setInView(false);
    const timer = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cat = categories[activeTab];

  return (
    <section className="sk-section" ref={sectionRef}>
      <div className="sk-blob sk-blob-1" />
      <div className="sk-blob sk-blob-2" />

      <div className="sk-inner">
        {/* Header */}
        <div className="sk-header">
          <p className="sk-eyebrow">What I Work With</p>
          <h2 className="sk-title">
            Technical <span className="sk-title-accent">Skills</span>
          </h2>
          <p className="sk-subtitle">
            2+ years building across the full stack — from React UIs to RAG pipelines.
          </p>
        </div>

        {/* Tab row */}
        <div className="sk-tabs">
          {categories.map((c, i) => (
            <button
              key={i}
              className={`sk-tab ${activeTab === i ? "sk-tab--active" : ""}`}
              style={activeTab === i ? { borderColor: c.color, color: c.color } : {}}
              onClick={() => { setActiveTab(i); setInView(false); }}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="sk-content">
          {/* Left — bar chart */}
          <div className="sk-bars-col">
            <div className="sk-col-label" style={{ color: cat.color }}>
              {cat.icon} {cat.label}
            </div>
            <div className="sk-bars">
              {cat.skills.map((s, i) => (
                <div className="sk-bar-row" key={i}>
                  <div className="sk-bar-meta">
                    <span className="sk-bar-name">{s.name}</span>
                    <span className="sk-bar-pct" style={{ color: cat.color }}>
                      {s.level}%
                    </span>
                  </div>
                  <AnimatedBar level={s.level} color={cat.color} inView={inView} />
                </div>
              ))}
            </div>
          </div>

          {/* Right — overview cards */}
          <div className="sk-overview">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`sk-overview-card ${activeTab === i ? "sk-overview-card--active" : ""}`}
                style={activeTab === i ? { borderColor: c.color, boxShadow: `0 0 20px ${c.color}33` } : {}}
                onClick={() => { setActiveTab(i); setInView(false); }}
              >
                <div className="sk-ov-top">
                  <span className="sk-ov-icon">{c.icon}</span>
                  <span className="sk-ov-label" style={activeTab === i ? { color: c.color } : {}}>
                    {c.label}
                  </span>
                </div>
                <div className="sk-ov-pills">
                  {c.skills.slice(0, 4).map((s, j) => (
                    <span className="sk-ov-pill" key={j}>{s.name}</span>
                  ))}
                  {c.skills.length > 4 && (
                    <span className="sk-ov-more">+{c.skills.length - 4}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="sk-stats">
          {[
            { v: "10+", l: "Languages & Frameworks" },
            { v: "55+", l: "Apps Shipped" },
            { v: "45+", l: "ML Models Built" },
            { v: "8",   l: "Engineering Roles" },
          ].map((s, i) => (
            <div className="sk-stat" key={i}>
              <span className="sk-stat-val">{s.v}</span>
              <span className="sk-stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}