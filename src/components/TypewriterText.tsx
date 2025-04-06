'use client';

import React from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = "" }) => {
  return (
    <div className="typewriter">
      <h1 className={className}>
        {text}
      </h1>
    </div>
  );
};

export default TypewriterText; 