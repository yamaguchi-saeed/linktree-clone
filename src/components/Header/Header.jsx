import React from 'react';
import Button from '../Button/Button';

/**
 * Header Component - Top navigation with optional actions
 */
const Header = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out my links!',
        url: window.location.href
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <header className="flex justify-between items-center mb-8">
      {/* Logo/Title */}
      <div className="text-white/80 font-medium">
        Linktree-clone
      </div>
      
      {/* Share button */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={handleShare}
        className="text-white/80 hover:text-white"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        Share
      </Button>
    </header>
  );
};

export default Header;