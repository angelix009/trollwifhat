'use client';

import React, { useState } from 'react';
import CleanTrollCreator from '@/components/character/clean-troll-creator';
import { TrollCharacter } from '@/types/character';
import { ASSETS } from '@/lib/assets';

const defaultCharacter: TrollCharacter = {
  id: 'creator-' + Date.now(),
  name: 'My Troll',
  face: {
    expression: 'black',
    skinColor: 'black',
    eyeStyle: 'normal',
    eyeColor: '#000000',
    mouthStyle: 'classic',
  },
  hat: {
    type: 'none',
    color: '#000000',
    pattern: 'solid',
    accessories: [],
  },
  accessories: {
    facial: [],
    jewelry: [],
    special: [],
  },
  background: {
    type: 'pattern',
    colors: ['white'],
    pattern: 'white',
  },
};

export default function CreatorPage() {
  const [character, setCharacter] = useState<TrollCharacter>(defaultCharacter);

  const handleUpdate = (updates: Partial<TrollCharacter>) => {
    setCharacter(prev => ({
      ...prev,
      ...updates
    }));
  };

  const handleRandomize = () => {
    const randomTrollFace = ASSETS.trollfaces[Math.floor(Math.random() * ASSETS.trollfaces.length)];
    const randomHat = ASSETS.hats[Math.floor(Math.random() * ASSETS.hats.length)];
    const randomBackground = ASSETS.backgrounds[Math.floor(Math.random() * ASSETS.backgrounds.length)];

    setCharacter(prev => ({
      ...prev,
      id: 'random-' + Date.now(),
      face: {
        ...prev.face,
        expression: randomTrollFace.id as typeof defaultCharacter.face.expression,
        skinColor: randomTrollFace.id,
      },
      hat: {
        ...prev.hat,
        type: randomHat.id as typeof defaultCharacter.hat.type,
      },
      background: {
        ...prev.background,
        pattern: randomBackground.id,
        colors: [randomBackground.id],
      },
    }));
  };


  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">Troll Creator</h1>
          <p className="text-lg text-gray-600 mb-6">
            Create your perfect troll face combination
          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center">
            <button
              onClick={handleRandomize}
              className="bg-gray-800 text-white px-6 py-3 font-medium hover:bg-gray-700 transition-colors"
            >
              🎲 Randomize
            </button>
          </div>
        </div>

        {/* Creator Component */}
        <CleanTrollCreator
          character={character}
          onUpdate={handleUpdate}
        />

        {/* Instructions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="text-lg font-bold text-black mb-3">How to Use</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <strong>1. Choose Your Troll Face</strong>
                <p>Select from classic black & white or colorful variants</p>
              </div>
              <div>
                <strong>2. Add Accessories</strong>
                <p>Pick hats, glasses, and other accessories to personalize</p>
              </div>
              <div>
                <strong>3. Set the Scene</strong>
                <p>Choose from meme-worthy backgrounds and settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}