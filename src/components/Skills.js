import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const categories = [
  {
    id: "languages",
    label: "Programming",
    icon: "💻",
    color: "#38bdf8",
    description: "Core programming languages and development foundations.",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "Java", "C++"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    color: "#a78bfa",
    description: "Building responsive, interactive and user-focused interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Angular",
      "Responsive Design",
      "Component Architecture",
      "Streamlit",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: "⚙️",
    color: "#fbbf24",
    description: "Designing secure APIs, scalable services and application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "Python FastAPI",
      "REST APIs",
      "GraphQL",
      "SQLAlchemy",
      "Pydantic",
      "JWT Authentication",
      "RBAC",
      "MVC Architecture",
    ],
  },
  {
    id: "ai",
    label: "AI / ML & GenAI",
    icon: "🤖",
    color: "#c084fc",
    description: "Developing intelligent applications and reliable AI workflows.",
    skills: [
      "Machine Learning",
      "Generative AI",
      "LLM Integration",
      "OpenAI API",
      "Google Gemini",
      "Groq / Llama 3.1",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Embeddings",
      "ChromaDB",
      "Structured JSON Output",
      "LLM Output Validation",
      "scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "🗄️",
    color: "#34d399",
    description: "Data modeling, persistence, querying and application integration.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Supabase",
      "SQL",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "☁️",
    color: "#fb923c",
    description: "Deploying, automating and maintaining production applications.",
    skills: [
      "AWS EC2",
      "AWS S3",
      "Microsoft Azure",
      "Azure App Service",
      "Docker",
      "GitHub Actions",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Nginx",
      "Vercel",
      "Render",
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    icon: "🧪",
    color: "#f472b6",
    description: "Building maintainable, secure and testable software systems.",
    skills: [
      "Software Architecture",
      "API Design",
      "Authentication & Authorization",
      "Vitest",
      "Supertest",
      "API Testing",
      "Code Review",
      "Git & GitHub",
      "Agile / Scrum",
      "Debugging",
      "Problem Solving",
      "CI/CD",
    ],
  },
  {
    id: "professional",
    label: "Professional Skills",
    icon: "🤝",
    color: "#2dd4bf",
    description: "Collaborating with clients, founders, teams and stakeholders.",
    skills: [
      "Client Communication",
      "Stakeholder Collaboration",
      "Requirements Gathering",
      "Technical Discussion",
      "Founder & Client Coordination",
      "Cross-Functional Teamwork",
      "Technical Documentation",
      "Technical Training & Mentoring",
      "Knowledge Sharing",
      "Team Collaboration",
      "Adaptability",
      "Ownership & Accountability",
      "Analytical Thinking",
      "Time Management",
    ],
  },
];

const highlights = [
  {
    icon: "🚀",
    title: "End-to-End Development",
    description: "From requirements and architecture to development and deployment.",
  },
  {
    icon: "🧠",
    title: "AI-Powered Engineering",
    description: "Integrating intelligent AI capabilities into practical applications.",
  },
  {
    icon: "🤝",
    title: "Client Collaboration",
    description: "Working with clients, founders and teams to deliver solutions.",
  },
  {
    icon: "📈",
    title: "Continuous Learning",
    description: "Exploring technologies and improving engineering practices.",
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const tabRefs = useRef({});

  const activeCategory =
    categories.find((category) => category.id === activeTab) || categories[0];

  // Reveal once. threshold 0 + rootMargin so tall mobile sections never get stuck hidden.
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Keyboard support for the tab list: arrows, Home, End.
  const handleTabKeyDown = (event, index) => {
    const last = categories.length - 1;
    let next = null;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;

    event.preventDefault();
    const nextId = categories[next].id;
    setActiveTab(nextId);
    tabRefs.current[nextId]?.focus();
  };

  // Jump to the skills panel (not the top of the section) from the overview cards.
  const openCategory = (id) => {
    setActiveTab(id);
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const domainCount = String(categories.length).padStart(2, "0");

  return (
    <section
      className="sk-section"
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-title"
    >
      <div className="sk-ambient sk-ambient-one" aria-hidden="true" />
      <div className="sk-ambient sk-ambient-two" aria-hidden="true" />

      <div className="sk-inner">
        {/* Section Heading */}
        <header className="sk-header">
          <span className="sk-eyebrow">
            <span className="sk-eyebrow-dot" aria-hidden="true" />
            MY TECHNICAL EXPERTISE
          </span>

          <h2 className="sk-title" id="skills-title">
            Skills & <span>Technologies</span>
          </h2>

          <p className="sk-subtitle">
            A multidisciplinary engineering skill set spanning software
            development, Python, AI/ML, cloud technologies and professional
            collaboration.
          </p>
        </header>

        {/* Domain Overview */}
        <div className="sk-domain-banner">
          <div className="sk-domain-icon" aria-hidden="true">✦</div>
          <div>
            <h3>One Engineer. Multiple Engineering Domains.</h3>
            <p>
              Building complete software products, intelligent applications
              and reliable systems through technology and collaboration.
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="sk-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((category, index) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                ref={(node) => (tabRefs.current[category.id] = node)}
                type="button"
                role="tab"
                id={`skills-tab-${category.id}`}
                aria-selected={isActive}
                aria-controls="skills-panel"
                tabIndex={isActive ? 0 : -1}
                className={`sk-tab ${isActive ? "sk-tab-active" : ""}`}
                style={{ "--tab-color": category.color }}
                onClick={() => setActiveTab(category.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span className="sk-tab-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skills Panel */}
        <div
          className={`sk-panel ${visible ? "sk-panel-visible" : ""}`}
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`skills-tab-${activeCategory.id}`}
          ref={panelRef}
          key={activeCategory.id}
          style={{ "--category-color": activeCategory.color }}
        >
          <div className="sk-panel-heading">
            <div className="sk-panel-icon" aria-hidden="true">
              {activeCategory.icon}
            </div>

            <div>
              <h3>{activeCategory.label}</h3>
              <p>{activeCategory.description}</p>
            </div>

            <span className="sk-count">
              {activeCategory.skills.length} Skills
            </span>
          </div>

          <ul className="sk-skills-grid">
            {activeCategory.skills.map((skill, index) => (
              <li
                className="sk-skill-card"
                key={skill}
                style={{ "--skill-index": index }}
              >
                <span className="sk-skill-indicator" aria-hidden="true" />
                <span className="sk-skill-name">{skill}</span>
                <span className="sk-skill-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </div>

        {/* All Domains Overview */}
        <div className="sk-overview">
          <div className="sk-overview-heading">
            <div>
              <span className="sk-section-label">EXPLORE MY EXPERTISE</span>
              <h3>Across Every Engineering Domain</h3>
            </div>
            <span className="sk-overview-count">{domainCount} DOMAINS</span>
          </div>

          <div className="sk-overview-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`sk-overview-card ${
                  activeTab === category.id ? "sk-overview-active" : ""
                }`}
                style={{ "--card-color": category.color }}
                aria-pressed={activeTab === category.id}
                onClick={() => openCategory(category.id)}
              >
                <span className="sk-overview-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="sk-overview-info">
                  <strong>{category.label}</strong>
                  <small>{category.skills.length} technologies & skills</small>
                </span>
                <span className="sk-overview-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Professional Strengths */}
        <div className="sk-strengths">
          <div className="sk-strengths-heading">
            <span className="sk-section-label">BEYOND THE CODE</span>
            <h3>How I Work & Collaborate</h3>
            <p>
              Technical ability combined with communication, ownership
              and a collaborative engineering mindset.
            </p>
          </div>

          <div className="sk-strengths-grid">
            {highlights.map((item) => (
              <article className="sk-strength-card" key={item.title}>
                <span className="sk-strength-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Evidence-Based Achievement */}
        <div className="sk-footer-stat">
          <div className="sk-stat-icon" aria-hidden="true">🎓</div>
          <div>
            <strong>50+ Learners Trained</strong>
            <p>
              Experience sharing technical knowledge in machine learning,
              LLM fundamentals and agentic AI workflows.
            </p>
          </div>
          <span className="sk-stat-tag">TECHNICAL MENTORING</span>
        </div>
      </div>
    </section>
  );
}