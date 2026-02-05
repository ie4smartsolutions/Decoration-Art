import React from 'react';

const Logo = ({ className = "w-full h-auto" }: { className?: string }) => {
  return (
    <img 
      src="https://drive.google.com/thumbnail?id=1T6rmffToqB6CTZd-lRUBDACqvMMrucd5&sz=w1000" 
      alt="Decoration Art Logo" 
      className={`object-contain max-h-28 md:max-h-40 ${className}`}
      loading="eager"
    />
  );
};

export default Logo;