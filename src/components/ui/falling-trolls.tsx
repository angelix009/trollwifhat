'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TrollConfig {
  id: number;
  left: string;
  delay: string;
  duration: string;
  rotateDelay: string;
  rotateDuration: string;
  size: number;
}

const FallingTrolls: React.FC = () => {
  const [trolls, setTrolls] = useState<TrollConfig[]>([]);

  useEffect(() => {
    // Generate stable random values on client side only
    const configs: TrollConfig[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${(i * 8.33) + (Math.random() * 10)}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      rotateDelay: `${Math.random() * 2}s`,
      rotateDuration: `${2 + Math.random() * 3}s`,
      size: 16 + Math.floor(Math.random() * 20),
    }));
    
    setTrolls(configs);
  }, []);

  if (trolls.length === 0) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {trolls.map((troll) => (
        <div
          key={troll.id}
          className="absolute bg-white rounded-full p-2 shadow-lg border border-gray-200 animate-fall"
          style={{
            left: troll.left,
            animationDelay: troll.delay,
            animationDuration: troll.duration,
          }}
        >
          <div
            className="animate-rotate"
            style={{
              animationDelay: troll.rotateDelay,
              animationDuration: troll.rotateDuration,
            }}
          >
            <Image 
              src="/assets/logo.png" 
              alt="" 
              width={troll.size} 
              height={troll.size}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallingTrolls;