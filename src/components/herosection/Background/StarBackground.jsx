// StarBackground.jsx  
import React from 'react';
import './StarBackground.css';

const getRandomStyle = () => {
  const top = Math.floor(Math.random() * 100);     // 0–100%
  const left = Math.floor(Math.random() * 100);    // 0–100%
  const delay = Math.random() * 5;                 // 0–5s
  const size = Math.random() * 2 + 1;              // 1–3px
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s, ${delay}s`, // Both twinkle and drift animation delay
  };
};

const StarBackground = () => {
  return (
    <div className="night">
      {[...Array(150)].map((_, i) => (
        <div className="star" key={i} style={getRandomStyle()}></div>
      ))}
    </div>
  );
};

export default StarBackground;
