import React from 'react';

/**
 * Avatar Component - Displays user profile picture with glassmorphism effect
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} size - Size variant (sm, md, lg, xl)
 */
const Avatar = ({ src, alt, size = 'lg' }) => {
  // Size mapping for different avatar sizes
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto mb-6 relative group`}>
      {/* Animated ring around avatar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/10 p-1 animate-pulse-slow">
        <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm"></div>
      </div>
      
      {/* Main avatar image */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* Hover effect overlay */}
      <div className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
    </div>
  );
};

export default Avatar;