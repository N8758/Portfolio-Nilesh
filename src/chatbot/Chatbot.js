import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import avatar from '../assets/avatar.png'; // Make sure path is correct

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const greetings = [
      "Hey there! 👋 How can I help you learn about Nilesh?",
      "Hello! Want to explore Nilesh’s skills, resume or projects?",
      "Hi! 😊 I'm NileshBot, ask me anything about tech or career.",
    ];
    setMessages([{ text: greetings[Math.floor(Math.random() * greetings.length)], from: "bot" }]);
  }, []);

  const handleToggle = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, from: 'user' };
    const botReply = { text: generateBotReply(input), from: 'bot' };
    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  const generateBotReply = (msg) => {
    const lower = msg.toLowerCase();
    if (["hi", "hello", "hey"].includes(lower)) return "👋 Hi! Ask me about my skills, resume, or GitHub projects.";
    if (lower.includes("name")) return "I'm Nilesh Pulate, Full Stack Developer & AI/ML Enthusiast.";
    if (lower.includes("skills")) return "🔧 React, Node.js, MongoDB, Python, Machine Learning, AWS.";
    if (lower.includes("projects")) return "🚀 I’ve built 40+ projects! Visit: https://github.com/N8758";
    if (lower.includes("github")) return "🔗 GitHub: https://github.com/N8758";
    if (lower.includes("linkedin")) return "🔗 LinkedIn: https://www.linkedin.com/in/nilesh-pulate-885a16237/";
    if (lower.includes("resume")) return "📄 You can find my resume on the Resume section or ping me!";
    return "🤖 I can answer questions about my name, skills, resume, GitHub, LinkedIn or projects.";
  };

  const quickLinks = [
    { label: 'GitHub', url: 'https://github.com/N8758' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nilesh-pulate-885a16237/' },
    // { label: 'Projects', url: '#projects' },
    // { label: 'Contact', url: '#contact' },
  ];

  return (
    <div className="chatbot-wrapper">
      <div className={`chatbot ${open ? 'open' : ''}`}>
        <div className="chatbot-header" onClick={handleToggle}>
          <img src={avatar} alt="Avatar" className="bot-avatar" />
          <span>NileshBot</span>
        </div>
        {open && (
          <div className="chatbot-body">
            <div className="chatbox">
              {messages.map((msg, idx) => (
                <div key={idx} className={`msg ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="quick-options">
              {quickLinks.map((item, idx) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer" key={idx}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
              />
              <button onClick={handleSend}>➤</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
