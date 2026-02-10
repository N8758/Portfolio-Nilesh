import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {[
          {
            title: "PDF Malware Detection",
            stack: "Python, Scikit-learn, Random Forest",
            description:
              "Designed a machine learning model to detect malicious PDF files. Included feature extraction and dataset refinement.",
            link: "https://github.com/N8758/PDF-MALWARE-DETECTION",
          },
          {
            title: "Salon Appointment System",
            stack: "MERN Stack",
            description:
              "Booking system with user authentication, appointment scheduling, and real-time updates.",
            link: "https://github.com/N8758/salon-appointment-booking-system",
          },
          {
            title: "Recipe Finder",
            stack: "Full Stack",
            description:
              "Web platform to search recipes by ingredients and dietary preferences. Fast UI and responsive.",
            link: "https://github.com/N8758/Finder-Recipe",
          },
          {
            title: "Email Marketing Flowchart Assistant",
            stack: "Python, Pandas, Matplotlib",
            description:
              "Created a visual assistant to optimize email campaigns using ML and workflow analysis.",
            link: "https://github.com/N8758/Email-Marketing-Flowchart",
          },
          {
            title: "Weather App",
            stack: "Full Stack",
            description:
              "Real-time weather data using OpenWeather API + local storage to-do list.",
            link: "https://github.com/N8758/WhatherDolist",
          },
          {
            title: "AI Finance Assistant",
            stack: "ML for Budget Analysis",
            description:
              "AI-powered budget advisor that helps analyze and plan finances smartly.",
            link: "https://github.com/N8758/financial-planning",
          },
          {
            title: "Freelancer Landing Page",
            stack: "Frontend",
            description:
              "Responsive landing page with sleek UI for freelancers.",
            link: "https://github.com/N8758/freelancer-landing-page-",
          },
          {
            title: "Solar AI Assistant",
            stack: "AI",
            description:
              "Smart assistant for solar panel-related queries using AI tech.",
            link: "https://github.com/N8758/solar-ai-assistant",
          },
        ].map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Stack:</strong> {project.stack}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </div>
        ))}
      </div>
      {/* ✅ COLAB SECTION */}
      <div className="colab-section">
        <h3>AI / ML Demo Projects</h3>

        <p>
          Developed <strong>45+ AI/ML demo notebooks</strong> including NLP models,
          prediction systems, and automation workflows.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1gxNGe8WPideh06nem08D9TJY50_irOb-"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Google Colab Projects
        </a>
      </div>
      
      
<div className="github-highlight">
  <h3>🚀 GitHub Project</h3>

  <p>
    Built <strong>55+ Full Stack & AI projects</strong> including production apps,
    automation tools, and machine learning systems.
  </p>

  <a
    href="https://github.com/N8758"
    target="_blank"
    rel="noopener noreferrer"
  >
    Explore GitHub Repository
  </a>
</div>

    </section>
  );
  
}
