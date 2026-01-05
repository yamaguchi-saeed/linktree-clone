import React from 'react';

/**
 * Footer Component - Bottom section with credits and additional info
 */
const Footer = () => {
  return (
    <footer className="text-center text-white/40 text-sm space-y-2">
      <p>© 2025 Made with ❤️</p>
      <p className="text-xs">
        Built with React & Tailwind CSS
      </p>
      
      {/* Optional: Add link to your portfolio */}
      <a 
        href="https://portfolio-1q4i.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block text-white/50 hover:text-white/80 transition-colors duration-300 underline"
      >
        View My Portfolio
      </a>
    </footer>
  );
};

export default Footer;