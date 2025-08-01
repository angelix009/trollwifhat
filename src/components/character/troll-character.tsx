'use client';

import React from 'react';
import { TrollCharacter } from '@/types/character';

interface TrollCharacterProps {
  character: TrollCharacter;
  size?: number;
  className?: string;
}

export const TrollCharacterComponent: React.FC<TrollCharacterProps> = ({
  character,
  size = 400,
  className = '',
}) => {
  const { face, hat, background } = character;

  // Generate background based on character settings
  const getBackgroundElement = () => {
    if (background.type === 'solid') {
      return (
        <rect
          width="100%"
          height="100%"
          fill={background.colors[0] || '#87CEEB'}
        />
      );
    }
    
    if (background.type === 'gradient') {
      const gradientId = `gradient-${character.id}`;
      return (
        <>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={background.colors[0] || '#87CEEB'} />
              <stop offset="100%" stopColor={background.colors[1] || '#FFB6C1'} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </>
      );
    }

    return <rect width="100%" height="100%" fill="#87CEEB" />;
  };

  // Generate troll face based on expression
  const getTrollFace = () => {
    const centerX = size / 2;
    const centerY = size / 2;
    const faceRadius = size * 0.35;

    return (
      <g>
        {/* Face */}
        <circle
          cx={centerX}
          cy={centerY}
          r={faceRadius}
          fill={face.skinColor}
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Eyes */}
        {getEyes(centerX, centerY - 30, face.eyeStyle, face.eyeColor)}
        
        {/* Nose */}
        <ellipse
          cx={centerX}
          cy={centerY - 10}
          rx="8"
          ry="12"
          fill={face.skinColor}
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Mouth */}
        {getMouth(centerX, centerY + 30, face.mouthStyle)}
      </g>
    );
  };

  // Generate eyes based on style
  const getEyes = (x: number, y: number, style: string, color: string) => {
    const eyeWidth = 25;
    const eyeHeight = 20;
    const eyeSpacing = 40;

    switch (style) {
      case 'sunglasses':
        return (
          <g>
            {/* Sunglasses frames */}
            <rect
              x={x - eyeSpacing - 15}
              y={y - 10}
              width={30}
              height={20}
              fill="#000"
              rx="10"
            />
            <rect
              x={x + eyeSpacing - 15}
              y={y - 10}
              width={30}
              height={20}
              fill="#000"
              rx="10"
            />
            {/* Bridge */}
            <rect
              x={x - 10}
              y={y - 5}
              width={20}
              height={3}
              fill="#000"
            />
          </g>
        );
      
      case 'laser':
        return (
          <g>
            {/* Laser eyes */}
            <ellipse cx={x - eyeSpacing} cy={y} rx={eyeWidth/2} ry={eyeHeight/2} fill="#FF0000" />
            <ellipse cx={x + eyeSpacing} cy={y} rx={eyeWidth/2} ry={eyeHeight/2} fill="#FF0000" />
            {/* Laser beams */}
            <rect x={x - eyeSpacing - 10} y={y - 2} width={-50} height={4} fill="#FF6666" opacity="0.8" />
            <rect x={x + eyeSpacing + 10} y={y - 2} width={50} height={4} fill="#FF6666" opacity="0.8" />
          </g>
        );
      
      case 'heart':
        return (
          <g>
            {/* Heart-shaped eyes */}
            <path
              d={`M ${x - eyeSpacing} ${y + 5} C ${x - eyeSpacing - 10} ${y - 5}, ${x - eyeSpacing - 20} ${y + 5}, ${x - eyeSpacing} ${y + 15} C ${x - eyeSpacing + 20} ${y + 5}, ${x - eyeSpacing + 10} ${y - 5}, ${x - eyeSpacing} ${y + 5} Z`}
              fill="#FF69B4"
            />
            <path
              d={`M ${x + eyeSpacing} ${y + 5} C ${x + eyeSpacing - 10} ${y - 5}, ${x + eyeSpacing - 20} ${y + 5}, ${x + eyeSpacing} ${y + 15} C ${x + eyeSpacing + 20} ${y + 5}, ${x + eyeSpacing + 10} ${y - 5}, ${x + eyeSpacing} ${y + 5} Z`}
              fill="#FF69B4"
            />
          </g>
        );
      
      default:
        return (
          <g>
            {/* Normal eyes */}
            <ellipse cx={x - eyeSpacing} cy={y} rx={eyeWidth/2} ry={eyeHeight/2} fill="white" stroke="#000" strokeWidth="2" />
            <ellipse cx={x + eyeSpacing} cy={y} rx={eyeWidth/2} ry={eyeHeight/2} fill="white" stroke="#000" strokeWidth="2" />
            {/* Pupils */}
            <circle cx={x - eyeSpacing} cy={y} r="8" fill={color} />
            <circle cx={x + eyeSpacing} cy={y} r="8" fill={color} />
          </g>
        );
    }
  };

  // Generate mouth based on style
  const getMouth = (x: number, y: number, style: string) => {
    switch (style) {
      case 'wide':
        return (
          <path
            d={`M ${x - 60} ${y} Q ${x} ${y + 40} ${x + 60} ${y}`}
            fill="none"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      
      case 'smug':
        return (
          <path
            d={`M ${x - 30} ${y} Q ${x + 10} ${y - 10} ${x + 50} ${y + 5}`}
            fill="none"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      
      case 'o-face':
        return (
          <ellipse
            cx={x}
            cy={y}
            rx="20"
            ry="25"
            fill="#000"
          />
        );
      
      case 'tongue':
        return (
          <g>
            <path
              d={`M ${x - 40} ${y} Q ${x} ${y + 30} ${x + 40} ${y}`}
              fill="none"
              stroke="#000"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Tongue */}
            <ellipse
              cx={x}
              cy={y + 15}
              rx="15"
              ry="10"
              fill="#FF69B4"
              stroke="#000"
              strokeWidth="2"
            />
          </g>
        );
      
      default:
        return (
          <path
            d={`M ${x - 40} ${y} Q ${x} ${y + 30} ${x + 40} ${y}`}
            fill="none"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
    }
  };

  // Generate hat based on type
  const getHat = () => {
    if (hat.type === 'none') return null;

    const centerX = size / 2;
    const centerY = size / 2;
    const faceRadius = size * 0.35;
    const hatY = centerY - faceRadius - 20;

    switch (hat.type) {
      case 'beanie':
        return (
          <g>
            <ellipse
              cx={centerX}
              cy={hatY}
              rx={faceRadius + 10}
              ry="40"
              fill={hat.color}
              stroke="#000"
              strokeWidth="2"
            />
            {/* Beanie fold */}
            <ellipse
              cx={centerX}
              cy={hatY + 20}
              rx={faceRadius}
              ry="15"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
          </g>
        );
      
      case 'wizard':
        return (
          <g>
            {/* Wizard hat */}
            <path
              d={`M ${centerX} ${hatY - 80} L ${centerX - 50} ${hatY + 20} L ${centerX + 50} ${hatY + 20} Z`}
              fill={hat.color}
              stroke="#000"
              strokeWidth="2"
            />
            {/* Star */}
            <text
              x={centerX - 15}
              y={hatY - 40}
              fontSize="30"
              fill="#FFD700"
            >
              ★
            </text>
          </g>
        );
      
      case 'crown':
        return (
          <g>
            {/* Crown base */}
            <rect
              x={centerX - faceRadius}
              y={hatY}
              width={faceRadius * 2}
              height="25"
              fill={hat.color}
              stroke="#000"
              strokeWidth="2"
            />
            {/* Crown spikes */}
            <path
              d={`M ${centerX - faceRadius} ${hatY} L ${centerX - 30} ${hatY - 20} L ${centerX - 15} ${hatY} L ${centerX} ${hatY - 30} L ${centerX + 15} ${hatY} L ${centerX + 30} ${hatY - 20} L ${centerX + faceRadius} ${hatY}`}
              fill={hat.color}
              stroke="#000"
              strokeWidth="2"
            />
            {/* Jewels */}
            <circle cx={centerX} cy={hatY + 12} r="5" fill="#FF0000" />
          </g>
        );
      
      default:
        return (
          <ellipse
            cx={centerX}
            cy={hatY}
            rx={faceRadius}
            ry="30"
            fill={hat.color}
            stroke="#000"
            strokeWidth="2"
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
        className="troll-character-svg border-2 border-gray-300 rounded-lg shadow-lg"
      >
        {getBackgroundElement()}
        {getTrollFace()}
        {getHat()}
      </svg>
    </div>
  );
};