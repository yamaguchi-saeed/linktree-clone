import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import LinkCard from './components/LinkCard/LinkCard';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Footer from './components/Footer/Footer';
import { linksData, socialLinks, profileData } from './data/links';

function App() {
  // State to manage current gradient theme
  const [gradientTheme, setGradientTheme] = useState(0);
  
  // Array of gradient themes for color cycling
  const gradientThemes = ['gradient-bg-1', 'gradient-bg-2', 'gradient-bg-3'];
  
  // Auto-cycle through gradient themes every 20 seconds (slower transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientTheme((prev) => (prev + 1) % gradientThemes.length);
    }, 10000); // Changed from 10 seconds to 20 seconds for slower change
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${gradientThemes[gradientTheme]} relative overflow-x-hidden`}>
      {/* Removed white/black background particles to eliminate bright spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600 to-yellow-600 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600 to-red-800 opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-red-800 to-yellow-700 opacity-10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Header section */}
        <Header />
        
        {/* Profile section with avatar and bio */}
        <div className="text-center mb-8">
          <Avatar 
            src={profileData.avatar}
            alt={profileData.name}
            size="xl"
          />
          <h1 className="text-3xl font-bold text-white mb-2 text-responsive gradient-text">
            {profileData.name}
          </h1>
          <p className="text-white/80 text-lg mb-4">
            {profileData.bio}
          </p>
          <p className="text-white/60 text-sm">
            {profileData.description}
          </p>
        </div>
        
        {/* Social media icons */}
        <SocialIcons socialLinks={socialLinks} />
        
        {/* Main links section */}
        <div className="space-y-4 mb-8">
          {linksData.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
              description={link.description}
              gradientTheme={gradientTheme}
              animationDelay={index * 100}
            />
          ))}
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;