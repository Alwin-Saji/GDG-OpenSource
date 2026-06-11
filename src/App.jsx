import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import CustomScrollbar from './components/CustomScrollbar';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import ContributorGuidelines from './pages/ContributorGuidelines';
import MaintainerGuidelines from './pages/MaintainerGuidelines';
import Projects from './pages/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('app-loaded');
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-hidden selection:bg-blue-500/30 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-[0] pointer-events-none opacity-20"
           style={{
             backgroundImage: 'linear-gradient(#300000 1px, transparent 1px), linear-gradient(90deg, #300000 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!isLoading && <CustomScrollbar />}
      <FloatingElements />
      <Navbar />
      
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contributor-guidelines" element={<ContributorGuidelines />} />
          <Route path="/maintainer-guidelines" element={<MaintainerGuidelines />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
