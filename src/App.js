import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import RateUsFloating from './components/RateUsFloating';
import Rate from './pages/Rate';

function App() {
  return (
    <Router>
      <RateUsFloating />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App; 