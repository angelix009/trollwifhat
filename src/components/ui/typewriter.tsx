'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  phrases, 
  className = "", 
  speed = 100, 
  pauseDuration = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing
      const timer = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, speed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

export default Typewriter;