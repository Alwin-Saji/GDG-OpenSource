import React from 'react';

const CHAR_MAP_SEASON = {
  'S': [
    "01111",
    "11000",
    "11110",
    "01111",
    "00011",
    "11110"
  ],
  'E': [
    "11111",
    "11000",
    "11110",
    "11000",
    "11000",
    "11111"
  ],
  'A': [
    "01100",
    "10011",
    "10011",
    "11111",
    "10011",
    "10011"
  ],
  'O': [
    "00110",
    "11011",
    "11001",
    "11001",
    "11001",
    "00110"
  ],
  'N': [
    "10001",
    "11001",
    "11101",
    "10111",
    "10011",
    "10001"
  ],
  'F': [
    "11110",
    "11000",
    "11110",
    "11000",
    "11000",
    "11000"
  ],
  ' ': [
    "000",
    "000",
    "000",
    "000",
    "000",
    "000",
    "000"
  ]
};

const CHAR_MAP_CODE = {
  'C': [
    "01110",
    "11001",
    "11000",
    "11000",
    "11001",
    "01110"
  ],
  'O':  [
    "00110",
    "11011",
    "11001",
    "11001",
    "11001",
    "00110"
  ],
  'D': [
    "11110",
    "11011",
    "11001",
    "11001",
    "11001",
    "11110"
  ],
  'E': [
    "11111",
    "11000",
    "11110",
    "11000",
    "11000",
    "11111"
  ],
  ' ': [
    "000",
    "000",
    "000",
    "000",
    "000",
    "000",
    "000"
  ]
};

const DotText = ({ 
  text, 
  color = '#FFFFFF', 
  dotRadius = 6,
  variant = 'season'
}) => {
  // Gap is 15% of dot diameter
  const gap = dotRadius * 2 * 0.15;
  const letters = text.toUpperCase().split('');
  const CHAR_MAP = variant === 'code' ? CHAR_MAP_CODE : CHAR_MAP_SEASON;
  
  // Calculate total width and bounds
  let currentX = 0;
  const dots = [];
  
  letters.forEach((char) => {
    const grid = CHAR_MAP[char] || CHAR_MAP[' '];
    const width = grid[0].length;
    const height = grid.length;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (grid[y][x] === '1') {
          dots.push({
            cx: currentX + x * (dotRadius * 2 + gap) + dotRadius,
            cy: y * (dotRadius * 2 + gap) + dotRadius
          });
        }
      }
    }
    
    // Move X forward for the next letter, plus letter spacing (approx 1.5 dot widths)
    currentX += width * (dotRadius * 2 + gap) + (dotRadius * 3);
  });

  const totalWidth = currentX - (dotRadius * 3); // Remove trailing space
  const totalHeight = 7 * (dotRadius * 2 + gap) - gap + (dotRadius * 2);

  return (
    <div className="flex justify-center items-center w-full" style={{ filter: 'drop-shadow(4px 4px 0px #300000)' }}>
      <svg 
        viewBox={`0 0 ${totalWidth} ${totalHeight}`} 
        className="max-w-full h-auto"
        style={{ overflow: 'visible' }}
      >
        {dots.map((dot, i) => (
          <circle 
            key={i} 
            cx={dot.cx} 
            cy={dot.cy} 
            r={dotRadius} 
            fill={color} 
            className="transition-all duration-300 hover:scale-150 hover:-translate-y-1"
            style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
          />
        ))}
      </svg>
    </div>
  );
};

export default DotText;
