import React from 'react';

/**
 * Button Component - Reusable button with glassmorphism styling
 * @param {React.ReactNode} children - Button content
 * @param {Function} onClick - Click handler
 * @param {string} variant - Button style variant (primary, secondary, ghost)
 * @param {string} size - Button size (sm, md, lg)
 * @param {boolean} disabled - Disabled state
 * @param {string} className - Additional CSS classes
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = ''
}) => {
  // Base classes for all buttons
  const baseClasses = 'rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95';
  
  // Variant-specific styling
  const variantClasses = {
    primary: 'glass text-white hover:bg-white/20 border border-white/30',
    secondary: 'glass-dark text-white hover:bg-black/30 border border-white/20',
    ghost: 'text-white hover:bg-white/10 border border-transparent hover:border-white/20'
  };
  
  // Size-specific styling
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  // Disabled state styling
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100' 
    : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;