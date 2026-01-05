import React from 'react';

/**
 * SocialIcons Component - Row of social media icons
 * @param {Array} socialLinks - Array of social media link objects
 */
const SocialIcons = ({ socialLinks }) => {
  return (
    <div className="flex justify-center space-x-6 mb-8">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* Icon container with glassmorphism */}
          <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
            <img 
              src={`/icons/${social.icon}`}
              alt={`${social.name} icon`}
              className="w-5 h-5 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Tooltip on hover */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {social.name}
          </div>
          
          {/* Animated ring effect on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/30 group-hover:animate-ping transition-colors duration-300"></div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;