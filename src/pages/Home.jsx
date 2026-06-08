import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Workflow from '../sections/Workflow';
import Maintainers from '../sections/Maintainers';
import Leaderboard from '../sections/Leaderboard';
import Faq from '../sections/Faq';

import GuidelinesLinks from '../sections/GuidelinesLinks';

const Home = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Workflow />
      <Maintainers />
      <Leaderboard />
      <Faq />
      <GuidelinesLinks />
    </main>
  );
};

export default Home;
