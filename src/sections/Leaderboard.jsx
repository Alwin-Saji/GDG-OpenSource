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
    <section id="leaderboard" className="py-24 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            Leaderboard
          </h2>
          <div className="flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full border border-gray-200">
            <FaTrophy size={16} className="text-black" />
            <span className="text-xs text-black font-bold uppercase tracking-widest">Top Contributors</span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Rank</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Contributor</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest text-right font-mono">Commits</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest text-right font-mono">Points</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-0 group">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-2 font-mono">
                      {index < 3 ? <FaMedal size={20} className={user.color} /> : <span className="w-[20px]"></span>}
                      <span className="text-black text-lg font-bold">{user.rank}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                        <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-gray-900 group-hover:text-black transition-colors text-lg tracking-tight">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right font-mono text-gray-500 text-lg">{user.commits}</td>
                  <td className="px-8 py-6 text-right font-mono font-black text-black text-xl">{user.points}</td>
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
