import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Courses from './pages/Courses';
import Skills from './components/Skills'; // ✅ Ensure it's exported correctly
import Chatbot from './chatbot/Chatbot';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
  <Navbar />

  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </main>

  <Chatbot />
  <Footer />
</div>


    </Router>
  );
}
