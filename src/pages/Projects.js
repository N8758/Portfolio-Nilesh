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
            link: "https://pdf-malware-detection-2.onrender.com/",
          },
          {
            title: "Salon Appointment System",
            stack: "MERN Stack",
            description:
              "Booking system with user authentication, appointment scheduling, and real-time updates.",
            link: "https://salon-1s6c.vercel.app/",
          },
          {
            title: "Recipe Finder",
            stack: "Full Stack",
            description:
              "Web platform to search recipes by ingredients and dietary preferences. Fast UI and responsive.",
            link: "https://finder-recipe.vercel.app/",
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
            link: "https://whather-dolist.vercel.app/",
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
            link: "https://final-landing-page-mu.vercel.app/",
          },
          {
            title: "Solar AI Assistant",
            stack: "AI",
            description:
              "Smart assistant for solar panel-related queries using AI tech.",
            link: "  https://solar-ai-assistant-8xf6d9kgr9xemel4p8adz9.streamlit.app/",
          },
           {
    title: "Order Management System",
    stack: "Full Stack (MERN)",
    description:
      "A scalable order management platform that allows users to manage orders, track deliveries, and monitor transactions with efficient backend API handling.",
    link: "https://order-management-system-144b.vercel.app/"
  },
  {
    title: "Wellness AI Health Assistant",
    stack: "AI / Streamlit",
    description:
      "A wellness tracking application that helps users monitor health conditions, lifestyle habits, and mental well-being with AI-based suggestions.",
    link: "https://wellness-jxraaywccr6wmrtrgsmlqg.streamlit.app"
  },
  {
    title: "Quote of the Day App",
    stack: "React.js / API Integration",
    description:
      "A motivational quote generator that fetches real-time quotes using APIs with search functionality and responsive UI design.",
    link: "https://quote-of-day-j54e.vercel.app"
  },
   {
    title: "React Xperience Hub",
    stack: "React.js",
    description:
      "An interactive learning hub showcasing React components, UI experiments, and modern frontend development practices.",
    link: "https://react-xperience-hub-ktms.vercel.app"
  },

  {
    title: "Delivery Label Generator",
    stack: "Full Stack / Automation",
    description:
      "A delivery label automation system that generates shipping labels dynamically, improving logistics efficiency and reducing manual errors.",
    link: "https://delivery-label-app-1-cl5h.onrender.com"
  },
  {
    title: "E-Commerce Shopping Platform",
    stack: "Full Stack MERN",
    description:
      "A modern e-commerce platform with product browsing, authentication, cart management, and secure payment workflow integration.",
    link: "https://ecommerce-project-eight-murex.vercel.app/"
  },

  {
    title: "RendShop Shopify Store",
    stack: "Shopify / E-Commerce",
    description:
      "A fully customized Shopify-based e-commerce store with product catalog management and optimized user shopping experience.",
    link: "https://rend-shop.myshopify.com/"
  },
  {
    title: "Secure Password Generator",
    stack: "React.js / Security Tools",
    description:
      "A password generation tool that creates highly secure and customizable passwords to improve user cybersecurity practices.",
    link: "https://password-kappa-gules.vercel.app/"
  },

  {
    title: "Application Form Portal",
    stack: "Frontend + Backend Integration",
    description:
      "A responsive application form system with validation, structured data submission, and user-friendly interface design.",
    link: "https://applicatonform.vercel.app/"
  },
  {
    title: "APJ Abdul Kalam Tribute Website",
    stack: "HTML / CSS / JavaScript",
    description:
      "A tribute website dedicated to Dr. APJ Abdul Kalam showcasing biography, achievements, and inspirational contributions.",
    link: "https://apj-abdul-kalam-tribute-website.vercel.app/"
  }

          
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
