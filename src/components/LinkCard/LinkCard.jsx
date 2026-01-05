import React, { useState } from 'react';

/**
 * LinkCard Component - Individual link item with glassmorphism and hover effects
 * @param {string} title - Link title
 * @param {string} url - Destination URL
 * @param {string} icon - Icon file name
 * @param {string} description - Link description
 * @param {number} gradientTheme - Current gradient theme index
 * @param {number} animationDelay - Stagger animation delay
 */
const LinkCard = ({ title, url, icon, description, gradientTheme, animationDelay }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle link click - opens in new tab
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="glass rounded-2xl p-6 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Card content container */}
      <div className="flex items-center space-x-4">
        {/* Icon container with animated background */}
        <div className="relative">
          <div className={`w-12 h-12 rounded-xl glass-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isHovered ? 'animate-pulse' : ''}`}>
            <img 
              src={`/icons/${icon}`} 
              alt={`${title} icon`}
              className="w-6 h-6 filter brightness-0 invert"
            />
          </div>
          
          {/* Animated glow effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping"></div>
          )}
        </div>
        
        {/* Text content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-lg group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-white/60 text-sm mt-1 group-hover:text-white/80 transition-colors">
              {description}
            </p>
          )}
        </div>
        
        {/* Animated arrow indicator */}
        <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Subtle border glow on hover */}
      <div className={`absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/30 transition-colors duration-300 pointer-events-none`}></div>
    </div>
  );
};

export default LinkCard;