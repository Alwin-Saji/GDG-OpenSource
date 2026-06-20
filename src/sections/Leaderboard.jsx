import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMD_jNTNp4Y2yGt6ZjgOsfYuOHYzNdxDvBtzjm_ykI1MW8eK5y4roqfVyhLnUjZaCRmLJVxhiFEPHw/pub?gid=1523785745&single=true&output=csv";

const Leaderboard = () => {
  const [contributors, setContributors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeaderboard = async () => {
    const cachedData = sessionStorage.getItem('leaderboardData');
    const cacheTime = sessionStorage.getItem('leaderboardCacheTime');
    
    // Use cache if it exists and is less than 5 minutes old
    if (cachedData && cacheTime) {
      const now = new Date().getTime();
      if (now - parseInt(cacheTime, 10) < 5 * 60 * 1000) {
        setContributors(JSON.parse(cachedData).slice(0, 5));
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(true);
    try {
      const response = await fetch(CSV_URL);
      const text = await response.text();

      // Split text by new lines
      const rows = text.split('\n').map(row => row.trim()).filter(row => row);

      // Parse CSV, skipping the header row
      const parsedData = rows.slice(1).map((row) => {
        const columns = row.split(',');
        return {
          name: columns[0] ? columns[0].trim() : '',
          points: parseInt(columns[1], 10) || 0
        };
      }).filter(user => user.name && user.name !== 'Unknown');

      // Sort by points descending and assign rank
      parsedData.sort((a, b) => b.points - a.points);
      
      const top30 = parsedData.slice(0, 30);
      top30.forEach((user, index) => {
        user.rank = index + 1;
      });

      setContributors(top30.slice(0, 5));
      
      // Save full 30 to cache
      sessionStorage.setItem('leaderboardData', JSON.stringify(top30));
      sessionStorage.setItem('leaderboardCacheTime', new Date().getTime().toString());
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <section id="leaderboard" className="py-16 sm:py-20 md:py-24 relative z-10 selection:bg-[#E8D98A] selection:text-[#300000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-doto mb-4">
            Leaderboard
          </h2>
          <p className="text-sm sm:text-lg text-[#E8D98A]/80 font-mono">
            Top 5 Open Source Contributors
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="animate-pulse">
            <div className="flex flex-col">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center px-2 sm:px-4 py-4 sm:py-5 border-b border-white/10">
                  <div className="w-16 sm:w-24">
                    <div className="h-5 sm:h-6 bg-white/10 rounded w-6 sm:w-8"></div>
                  </div>
                  <div className="flex-1 flex items-center space-x-4 sm:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 shrink-0"></div>
                    <div className="h-4 sm:h-5 bg-white/10 rounded w-28 sm:w-48"></div>
                  </div>
                  <div className="w-20 sm:w-32 flex justify-end">
                    <div className="h-4 sm:h-5 bg-white/10 rounded w-12 sm:w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Header Row */}
            <div className="flex items-center font-bold px-2 sm:px-4 pb-4 border-b border-white/20 text-xs sm:text-sm font-mono text-[#E8D98A]/50 uppercase tracking-widest mb-2">
              <div className="w-12 sm:w-24">Rank</div>
              <div className="flex-1 flex items-center space-x-3 sm:space-x-6 min-w-0">
                <div className="w-8 sm:w-12"></div>
                <span>Contributor</span>
              </div>
              <div className="w-16 sm:w-32 text-right">Points</div>
            </div>

            {/* List Section */}
            <div className="flex flex-col">
              {contributors.length > 0 ? (
                contributors.map((user, index) => (
                  <motion.a
                    key={user.rank}
                    href={`https://github.com/${user.name.replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      opacity: { duration: 0.4, delay: index * 0.05 },
                    }}
                    className="group flex items-center px-2 sm:px-4 py-4 sm:py-5 border-b border-white/10 sm:hover:bg-white/[0.04] transition-colors duration-300 cursor-pointer"
                  >
                    {/* Rank */}
                    <div className="w-12 sm:w-24 font-cody font-semibold sm:font-medium group-hover:font-semibold text-base sm:text-xl text-white sm:text-white/80 group-hover:text-white transition-colors">
                      {String(user.rank).padStart(2, '0')}
                    </div>

                    {/* Contributor Info */}
                    <div className="flex-1 flex items-center space-x-3 sm:space-x-6 min-w-0">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white/5 opacity-100 sm:opacity-70 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
                        <img
                          src={`https://github.com/${user.name.replace(/\s+/g, '-')}.png`}
                          alt={user.name}
                          className="w-full h-full object-cover mix-blend-normal sm:mix-blend-luminosity group-hover:mix-blend-normal bg-white/5"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://api.dicebear.com/10.x/glyphs/svg?seed=${user.name}`;
                          }}
                        />
                      </div>
                      <span className="text-white sm:text-white/80 font-medium text-sm sm:text-lg group-hover:text-white transition-colors tracking-wide truncate">
                        {user.name}
                      </span>
                    </div>

                    {/* Points */}
                    <div className="w-16 sm:w-32 text-right font-doto text-[#E8D98A] sm:text-white/80 group-hover:text-[#E8D98A] font-bold text-sm sm:text-lg transition-colors">
                      {user.points}
                    </div>
                  </motion.a>
                ))
              ) : (
                <div className="py-12 text-center text-white/50 font-mono text-sm">
                  No contributors data available at the moment.
                </div>
              )}
            </div>

            {/* View Full Leaderboard Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 flex justify-center"
            >
              <Link 
                to="/leaderboard"
                onClick={() => window.scrollTo(0, 0)}
                className="px-8 py-3 bg-[#E8D98A] text-[#5A0F15] hover:bg-[#5A0F15] hover:text-[#E8D98A] border border-[#3f080d] rounded-full font-medium transition-colors"
              >
                View Full Leaderboard
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Leaderboard;

