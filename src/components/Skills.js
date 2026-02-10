import React from "react";
import "./Skills.css";

/* -------- LEFT SIDE BAR SKILLS -------- */

const skillBars = [
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React.js", level: 88 },
  { name: "Redux", level: 80 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "Tailwind CSS", level: 82 },
  { name: "Bootstrap", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 83 },
  { name: "RESTful APIs", level: 86 },
  { name: "JWT Authentication", level: 80 },
  { name: "MVC Architecture", level: 82 }
];

/* -------- RIGHT SIDE CIRCLE SKILLS -------- */

const circularSkills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 78 },
  { name: "MongoDB", level: 85 },
  { name: "MySQL", level: 82 },
  { name: "PostgreSQL", level: 80 },
  { name: "TensorFlow", level: 75 },
  { name: "Scikit-Learn", level: 78 },
  { name: "NumPy", level: 85 },
  { name: "Pandas", level: 84 },
  { name: "Matplotlib", level: 80 },
  { name: "NLP", level: 75 },
  { name: "Git & GitHub", level: 92 },
  { name: "Docker", level: 75 },
  { name: "AWS (EC2 / S3)", level: 72 },
  { name: "Power BI", level: 82 },
  { name: "Google Colab", level: 88 },
  { name: "Streamlit", level: 78 },
  { name: "Shopify", level: 70 },
  { name: "Render / Vercel", level: 85 },
  { name: "Netlify", level: 85 },
  { name: "DSA", level: 80 },
  { name: "OOP", level: 85 },
  { name: "Agile Development", level: 78 },
  { name: "Clean Code", level: 82 },
  { name: "Version Control", level: 90 }
];

export default function Skills() {
  return (
    <section className="skills-section">

      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        {/* LEFT BAR SKILLS */}
        <div className="skill-bars">
          {skillBars.map((skill, index) => (
            <div className="bar" key={index}>

              <div className="bar-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT CIRCLE SKILLS */}
        <div className="skill-circles">
          {circularSkills.map((skill, index) => {

            const radius = 48;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (skill.level / 100) * circumference;

            return (
              <div className="circle-card" key={index}>

                <svg width="120" height="120">

                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    className="circle-bg"
                  />

                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    className="circle-progress"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />

                </svg>

                <div className="circle-text">
                  <span className="circle-name">{skill.name}</span>
                  <span className="circle-percent">{skill.level}%</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
