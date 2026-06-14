import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Laundrix – Laundry Management",
    stack: ["React.js", "Node.js", "PostgreSQL", "JWT"],
    description: "Production-ready multi-role SaaS (Admin, Owner, Staff, Customer) with full booking lifecycle, RBAC, WhatsApp API notifications & GST invoicing.",
    link: "http://neocleanhubs.com/",
    tag: "Full Stack",
    featured: true,
  },
  {
    title: "PDF RAG Chatbot",
    stack: ["Python", "LangChain", "ChromaDB", "Ollama"],
    description: "RAG pipeline — upload a PDF, ask questions. Text extraction → chunking → embeddings → ChromaDB → local LLM (TinyLlama/Llama3). 85–90% accuracy.",
    link: "https://github.com/N8758",
    tag: "AI / LLM",
    featured: true,
  },
  {
    title: "AI Resume Builder",
    stack: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
    description: "GPT-4 powered resume generator producing tailored, role-specific resumes with JWT auth and full MERN backend deployed on Render.",
    link: "https://github.com/N8758",
    tag: "AI / LLM",
    featured: true,
  },


  {
    title: "NeoParlour – Salon Appointment Booking System ",
    stack: ["React" , "TypeScript" , "Node.js" ,  " Express" , "MongoDB " , "JWT" , "REST API"],
    description: "Built a production-ready salon booking platform with secure authentication and appointment management.",
    link: "https://www.neoparlour.com/",
    tag: "Full Stack",
    featured: true,
  },


  {
    title: "PDF Malware Detection",
    stack: ["Python", "scikit-learn", "Random Forest", "Streamlit"],
    description: "ML classifier using 15+ PDF metadata features. Real-time upload & instant malicious/safe prediction with confidence score.",
    link: "https://pdf-malware-detection-2.onrender.com/",
    tag: "ML",
    featured: true,
  },
  {
    title: "Ingreedy – Recipe Finder",
    stack: ["React.js", "TypeScript", "Supabase", "OpenAI API"],
    description: "Full-stack recipe search with smart ingredient-based filtering, Supabase Realtime favourites sync, and AI-powered suggestions.",
    link: "https://finder-recipe.vercel.app/",
    tag: "Full Stack",
  },
  {
    title: "Solar AI Assistant",
    stack: ["Python", "Streamlit", "LLM Integration"],
    description: "AI-powered domain assistant with LLM integration for real-time solar energy Q&A and contextual response generation.",
    link: "https://solar-ai-assistant-8xf6d9kgr9xemel4p8adz9.streamlit.app/",
    tag: "AI / LLM",
  },
  {
    title: "Order Management System",
    stack: ["React.js", "Node.js", "MongoDB", "Express"],
    description: "Scalable order management platform with order tracking, delivery monitoring, and efficient backend API handling.",
    link: "https://order-management-system-144b.vercel.app/",
    tag: "Full Stack",
  },
  {
    title: "Wellness AI Health Assistant",
    stack: ["Python", "Streamlit", "AI"],
    description: "Wellness tracker for health conditions, lifestyle habits, and mental well-being with AI-based personalised suggestions.",
    link: "https://wellness-jxraaywccr6wmrtrgsmlqg.streamlit.app",
    tag: "AI / LLM",
  },
  {
    title: "E-Commerce Shopping Platform",
    stack: ["React.js", "Node.js", "MongoDB", "Express"],
    description: "Modern e-commerce platform with product browsing, cart management, JWT auth, and secure payment workflow integration.",
    link: "https://ecommerce-project-eight-murex.vercel.app/",
    tag: "Full Stack",
  },
  {
    title: "Email Marketing Flowchart",
    stack: ["Python", "Pandas", "Matplotlib"],
    description: "Visual assistant to optimize email campaigns using ML and automated workflow analysis.",
    link: "https://github.com/N8758/Email-Marketing-Flowchart",
    tag: "ML",
  },
  {
    title: "Delivery Label Generator",
    stack: ["Full Stack", "Automation"],
    description: "Label automation system that generates shipping labels dynamically, reducing manual logistics errors.",
    link: "https://delivery-label-app-1-cl5h.onrender.com",
    tag: "Full Stack",
  },
  {
    title: "AI Finance Assistant",
    stack: ["Python", "ML", "Budget Analysis"],
    description: "AI-powered budget advisor that helps analyse and plan personal finances with smart recommendations.",
    link: "https://github.com/N8758/financial-planning",
    tag: "ML",
  },
  {
    title: "Weather App",
    stack: ["React.js", "OpenWeather API"],
    description: "Real-time weather data with city search, local storage to-do integration, and clean responsive UI.",
    link: "https://whather-dolist.vercel.app/",
    tag: "Frontend",
  },
  {
    title: "Secure Password Generator",
    stack: ["React.js", "Security Tools"],
    description: "Generates highly secure, customisable passwords with strength indicators to improve cybersecurity.",
    link: "https://password-kappa-gules.vercel.app/",
    tag: "Frontend",
  },
  {
    title: "Quote of the Day App",
    stack: ["React.js", "API Integration"],
    description: "Motivational quote generator with real-time API fetch, search functionality, and responsive design.",
    link: "https://quote-of-day-j54e.vercel.app",
    tag: "Frontend",
  },
  {
    title: "React Xperience Hub",
    stack: ["React.js"],
    description: "Interactive learning hub showcasing React components, UI experiments, and modern frontend practices.",
    link: "https://react-xperience-hub-ktms.vercel.app",
    tag: "Frontend",
  },
  {
    title: "RendShop Shopify Store",
    stack: ["Shopify", "E-Commerce"],
    description: "Fully customised Shopify store with product catalog management and optimised shopping experience.",
    link: "https://rend-shop.myshopify.com/",
    tag: "Frontend",
  },
  {
    title: "APJ Abdul Kalam Tribute",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Tribute website dedicated to Dr. APJ Abdul Kalam — biography, achievements, and inspiring contributions.",
    link: "https://apj-abdul-kalam-tribute-website.vercel.app/",
    tag: "Frontend",
  },
];

const filters = ["All", "Full Stack", "AI / LLM", "ML", "Frontend"];

const tagColors = {
  "Full Stack": "#00bfff",
  "AI / LLM":  "#a78bfa",
  "ML":         "#34d399",
  "Frontend":   "#ffd700",
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.tag === active);

  return (
    <section className="proj-section" id="projects">
      {/* Blobs */}
      <div className="proj-blob proj-blob-1" />
      <div className="proj-blob proj-blob-2" />

      <div className="proj-inner">
        {/* Heading */}
        <div className="proj-header">
          <p className="proj-eyebrow">What I've Built</p>
          <h2 className="proj-title">
            Featured <span className="proj-title-accent">Projects</span>
          </h2>
          <p className="proj-subtitle">
            55+ apps across Full Stack, AI/ML, and Cloud — here are the highlights.
          </p>
        </div>

        {/* Filter pills */}
        <div className="proj-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`proj-pill ${active === f ? "proj-pill--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {filtered.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`proj-card ${p.featured ? "proj-card--featured" : ""}`}
              style={{ "--tag-color": tagColors[p.tag] || "#00bfff" }}
            >
              {p.featured && <div className="proj-featured-bar" />}

              <div className="proj-card-top">
                <span
                  className="proj-tag"
                  style={{ color: tagColors[p.tag], borderColor: tagColors[p.tag] }}
                >
                  {p.tag}
                </span>
                <svg className="proj-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>

              <h3 className="proj-card-title">{p.title}</h3>
              <p className="proj-card-desc">{p.description}</p>

              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span className="proj-stack-pill" key={s}>{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="proj-cta-row">
          <a
            href="https://github.com/N8758"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-cta proj-cta--gold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub — 55+ Projects
          </a>
          <a
            href="https://drive.google.com/drive/folders/1gxNGe8WPideh06nem08D9TJY50_irOb-"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-cta proj-cta--cyan"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            45+ AI/ML Colab Notebooks
          </a>
        </div>
      </div>
    </section>
  );
}