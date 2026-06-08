import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import Hero from './sections/Hero';
import About from './sections/About';
import Workflow from './sections/Workflow';
import Timeline from './sections/Timeline';
import Maintainers from './sections/Maintainers';
import Leaderboard from './sections/Leaderboard';
import Register from './sections/Register';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-blue-500/30">
      <FloatingElements />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Workflow />
        <Timeline />
        <Maintainers />
        <Leaderboard />
        <Register />
      </main>

      <Footer />
    </div>
  );
}

export default App;

