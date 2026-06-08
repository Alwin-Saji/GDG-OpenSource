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
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-hidden selection:bg-blue-500/30 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!isLoading && <CustomScrollbar />}
      <FloatingElements />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contributor-guidelines" element={<ContributorGuidelines />} />
        <Route path="/maintainer-guidelines" element={<MaintainerGuidelines />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
