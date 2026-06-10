import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const Leaderboard = () => {
  const contributors = [
    { rank: 1, name: "David Miller", points: 2450, commits: 42, color: "text-gray-900" },
    { rank: 2, name: "Sofia Garcia", points: 2100, commits: 38, color: "text-gray-500" },
    { rank: 3, name: "Kenji Sato", points: 1950, commits: 35, color: "text-gray-400" },
    { rank: 4, name: "Lisa Wong", points: 1800, commits: 31, color: "text-gray-300" },
    { rank: 5, name: "James Bond", points: 1720, commits: 29, color: "text-gray-300" }
  ];

  return (
    <section id="leaderboard" className="py-16 sm:py-20 md:py-24 border-y border-gray-100 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight">
            Leaderboard
          </h2>
          <div className="flex items-center space-x-2 bg-white dark:bg-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 dark:border-white/10">
            <FaTrophy size={14} className="text-black dark:text-white sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs text-black dark:text-white font-bold uppercase tracking-widest">Top Contributors</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-black rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono">Rank</th>
                <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono">Contributor</th>
                <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-right font-mono">Commits</th>
                <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-right font-mono">Points</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 border-b border-gray-100 dark:border-white/10 last:border-0 group">
                  <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                    <div className="flex items-center space-x-2 font-mono">
                      {index < 3 ? <FaMedal size={18} className={`${user.color} sm:w-5 sm:h-5`} /> : <span className="w-[18px] sm:w-[20px]"></span>}
                      <span className="text-black dark:text-white text-base sm:text-lg font-bold">{user.rank}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden border border-gray-200 dark:border-white/10 flex-shrink-0">
                        <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-300 transition-colors text-sm sm:text-base md:text-lg tracking-tight">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-right font-mono text-gray-500 dark:text-gray-400 text-base sm:text-lg">{user.commits}</td>
                  <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-right font-mono font-black text-black dark:text-white text-lg sm:text-xl">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
