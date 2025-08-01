'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrollCharacter } from '@/types/character';

interface AdvancedTrollFaceProps {
  character: TrollCharacter;
  size?: number;
  className?: string;
  animated?: boolean;
}

export const AdvancedTrollFace: React.FC<AdvancedTrollFaceProps> = ({
  character,
  size = 400,
  className = '',
  animated = true,
}) => {
  const { face, hat, background } = character;
  const centerX = size / 2;
  const centerY = size / 2;
  const faceRadius = size * 0.35;

  const getBackgroundElement = () => {
    if (background.type === 'solid') {
      return (
        <motion.rect
          width="100%"
          height="100%"
          fill={background.colors[0] || '#0f172a'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      );
    }
    
    if (background.type === 'gradient') {
      const gradientId = `advanced-gradient-${character.id}`;
      return (
        <>
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor={background.colors[0] || '#1e293b'} />
              <stop offset="100%" stopColor={background.colors[1] || '#0f172a'} />
            </radialGradient>
            {/* Glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill={`url(#${gradientId})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </>
      );
    }

    return (
      <rect width="100%" height="100%" fill="#0f172a" />
    );
  };

  const getTrollFace = () => {
    return (
      <motion.g
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.2 
        }}
      >
        {/* Face Shadow */}
        <ellipse
          cx={centerX + 5}
          cy={centerY + 5}
          rx={faceRadius + 5}
          ry={faceRadius + 10}
          fill="rgba(0,0,0,0.3)"
          filter="blur(8px)"
        />
        
        {/* Main Face */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={faceRadius}
          fill={face.skinColor}
          stroke="#2d3748"
          strokeWidth="3"
          filter="url(#glow)"
          animate={animated ? {
            filter: [
              "url(#glow)",
              "url(#glow) drop-shadow(0 0 10px rgba(154, 205, 50, 0.5))",
              "url(#glow)"
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Face Highlight */}
        <ellipse
          cx={centerX - 30}
          cy={centerY - 40}
          rx="40"
          ry="60"
          fill="url(#faceHighlight)"
        />
        
        {/* Eyes */}
        {getAdvancedEyes()}
        
        {/* Nose with shadow */}
        <g>
          <ellipse
            cx={centerX + 2}
            cy={centerY - 8}
            rx="10"
            ry="15"
            fill="rgba(0,0,0,0.2)"
          />
          <ellipse
            cx={centerX}
            cy={centerY - 10}
            rx="8"
            ry="12"
            fill={face.skinColor}
            stroke="#2d3748"
            strokeWidth="2"
          />
        </g>
        
        {/* Mouth */}
        {getAdvancedMouth()}
        
        {/* Facial Details */}
        {getFacialDetails()}
      </motion.g>
    );
  };

  const getAdvancedEyes = () => {
    const eyeSpacing = 45;
    const eyeY = centerY - 35;

    switch (face.eyeStyle) {
      case 'laser':
        return (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Laser Eyes */}
            <defs>
              <radialGradient id="laserGradient">
                <stop offset="0%" stopColor="#ff4444" />
                <stop offset="100%" stopColor="#cc0000" />
              </radialGradient>
            </defs>
            
            {[centerX - eyeSpacing, centerX + eyeSpacing].map((x, i) => (
              <g key={i}>
                <motion.circle
                  cx={x}
                  cy={eyeY}
                  r="15"
                  fill="url(#laserGradient)"
                  animate={{
                    r: [15, 18, 15],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {/* Laser beam */}
                <motion.rect
                  x={i === 0 ? x - 80 : x + 15}
                  y={eyeY - 3}
                  width="80"
                  height="6"
                  fill="rgba(255, 68, 68, 0.8)"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    width: [60, 100, 60]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </g>
            ))}
          </motion.g>
        );

      case 'sunglasses':
        return (
          <motion.g
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            {/* Sunglasses frame */}
            <rect
              x={centerX - eyeSpacing - 20}
              y={eyeY - 15}
              width="40"
              height="30"
              rx="15"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
            />
            <rect
              x={centerX + eyeSpacing - 20}
              y={eyeY - 15}
              width="40"
              height="30"
              rx="15"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
            />
            {/* Bridge */}
            <rect
              x={centerX - 15}
              y={eyeY - 3}
              width="30"
              height="4"
              fill="#333"
            />
            {/* Reflection */}
            <ellipse
              cx={centerX - eyeSpacing - 8}
              cy={eyeY - 5}
              rx="8"
              ry="12"
              fill="rgba(255,255,255,0.3)"
            />
            <ellipse
              cx={centerX + eyeSpacing - 8}
              cy={eyeY - 5}
              rx="8"
              ry="12"
              fill="rgba(255,255,255,0.3)"
            />
          </motion.g>
        );

      default:
        return (
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            {[centerX - eyeSpacing, centerX + eyeSpacing].map((x, i) => (
              <g key={i}>
                {/* Eye socket shadow */}
                <ellipse
                  cx={x}
                  cy={eyeY}
                  rx="18"
                  ry="14"
                  fill="rgba(0,0,0,0.1)"
                />
                
                {/* Eye white */}
                <ellipse
                  cx={x}
                  cy={eyeY}
                  rx="15"
                  ry="12"
                  fill="white"
                  stroke="#2d3748"
                  strokeWidth="2"
                />
                
                {/* Iris */}
                <motion.circle
                  cx={x}
                  cy={eyeY}
                  r="8"
                  fill={face.eyeColor}
                  animate={animated ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Pupil */}
                <circle
                  cx={x}
                  cy={eyeY}
                  r="4"
                  fill="#000"
                />
                
                {/* Eye highlight */}
                <circle
                  cx={x - 2}
                  cy={eyeY - 2}
                  r="2"
                  fill="white"
                  opacity="0.8"
                />
              </g>
            ))}
          </motion.g>
        );
    }
  };

  const getAdvancedMouth = () => {
    const mouthY = centerY + 40;
    
    return (
      <motion.g
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        {/* Mouth shadow */}
        <path
          d={`M ${centerX - 42} ${mouthY + 2} Q ${centerX} ${mouthY + 35} ${centerX + 42} ${mouthY + 2}`}
          fill="rgba(0,0,0,0.2)"
        />
        
        {/* Main mouth */}
        <path
          d={`M ${centerX - 40} ${mouthY} Q ${centerX} ${mouthY + 30} ${centerX + 40} ${mouthY}`}
          fill="#8B0000"
          stroke="#2d3748"
          strokeWidth="3"
        />
        
        {/* Teeth */}
        {face.mouthStyle === 'classic' && (
          <g>
            {[-20, -10, 0, 10, 20].map((offset, i) => (
              <rect
                key={i}
                x={centerX + offset - 3}
                y={mouthY + 5}
                width="6"
                height="12"
                fill="white"
                stroke="#ddd"
                strokeWidth="0.5"
              />
            ))}
          </g>
        )}
        
        {/* Tongue for tongue expression */}
        {face.mouthStyle === 'tongue' && (
          <motion.ellipse
            cx={centerX}
            cy={mouthY + 20}
            rx="12"
            ry="8"
            fill="#ff69b4"
            stroke="#2d3748"
            strokeWidth="2"
            animate={{
              ry: [8, 10, 8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.g>
    );
  };

  const getFacialDetails = () => {
    return (
      <g>
        {/* Cheek highlights */}
        <ellipse
          cx={centerX - 60}
          cy={centerY + 10}
          rx="15"
          ry="20"
          fill="rgba(255,255,255,0.1)"
        />
        <ellipse
          cx={centerX + 60}
          cy={centerY + 10}
          rx="15"
          ry="20"
          fill="rgba(255,255,255,0.1)"
        />
        
        {/* Wrinkles for evil expression */}
        {face.expression === 'evil' && (
          <g stroke="#2d3748" strokeWidth="1.5" fill="none" opacity="0.6">
            <path d={`M ${centerX - 70} ${centerY - 20} Q ${centerX - 50} ${centerY - 30} ${centerX - 30} ${centerY - 25}`} />
            <path d={`M ${centerX + 30} ${centerY - 25} Q ${centerX + 50} ${centerY - 30} ${centerX + 70} ${centerY - 20}`} />
          </g>
        )}
      </g>
    );
  };

  const getAdvancedHat = () => {
    if (hat.type === 'none') return null;

    const hatY = centerY - faceRadius - 30;

    switch (hat.type) {
      case 'crown':
        return (
          <motion.g
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            {/* Crown shadow */}
            <path
              d={`M ${centerX - faceRadius - 5} ${hatY + 25} L ${centerX - 35} ${hatY - 25} L ${centerX - 20} ${hatY + 5} L ${centerX} ${hatY - 35} L ${centerX + 20} ${hatY + 5} L ${centerX + 35} ${hatY - 25} L ${centerX + faceRadius + 5} ${hatY + 25} Z`}
              fill="rgba(0,0,0,0.3)"
            />
            
            {/* Crown base */}
            <rect
              x={centerX - faceRadius}
              y={hatY + 10}
              width={faceRadius * 2}
              height="20"
              fill={hat.color}
              stroke="#ffd700"
              strokeWidth="2"
            />
            
            {/* Crown spikes */}
            <path
              d={`M ${centerX - faceRadius} ${hatY + 10} L ${centerX - 30} ${hatY - 20} L ${centerX - 15} ${hatY + 10} L ${centerX} ${hatY - 30} L ${centerX + 15} ${hatY + 10} L ${centerX + 30} ${hatY - 20} L ${centerX + faceRadius} ${hatY + 10}`}
              fill={hat.color}
              stroke="#ffd700"
              strokeWidth="2"
            />
            
            {/* Jewels */}
            <motion.circle
              cx={centerX}
              cy={hatY + 20}
              r="6"
              fill="#ff0000"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Smaller jewels */}
            <circle cx={centerX - 20} cy={hatY + 20} r="3" fill="#00ff00" />
            <circle cx={centerX + 20} cy={hatY + 20} r="3" fill="#0000ff" />
          </motion.g>
        );

      case 'wizard':
        return (
          <motion.g
            initial={{ y: -100, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            {/* Hat shadow */}
            <path
              d={`M ${centerX + 5} ${hatY - 75} L ${centerX - 45} ${hatY + 25} L ${centerX + 55} ${hatY + 25} Z`}
              fill="rgba(0,0,0,0.3)"
            />
            
            {/* Wizard hat */}
            <path
              d={`M ${centerX} ${hatY - 80} L ${centerX - 50} ${hatY + 20} L ${centerX + 50} ${hatY + 20} Z`}
              fill={hat.color}
              stroke="#2d3748"
              strokeWidth="2"
            />
            
            {/* Hat band */}
            <ellipse
              cx={centerX}
              cy={hatY + 15}
              rx="50"
              ry="8"
              fill="#ffd700"
              stroke="#2d3748"
              strokeWidth="1"
            />
            
            {/* Stars */}
            <motion.text
              x={centerX - 10}
              y={hatY - 30}
              fontSize="24"
              fill="#ffd700"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⭐
            </motion.text>
            
            <motion.text
              x={centerX - 25}
              y={hatY - 50}
              fontSize="16"
              fill="#ffd700"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.text>
          </motion.g>
        );

      default:
        return (
          <motion.ellipse
            cx={centerX}
            cy={hatY}
            rx={faceRadius + 5}
            ry="35"
            fill={hat.color}
            stroke="#2d3748"
            strokeWidth="2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          />
        );
    }
  };

  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="troll-character-svg rounded-2xl shadow-2xl"
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(154, 205, 50, 0.3))',
        }}
      >
        <defs>
          {/* Face highlight gradient */}
          <radialGradient id="faceHighlight">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        
        {getBackgroundElement()}
        {getTrollFace()}
        {getAdvancedHat()}
      </svg>
    </div>
  );
};