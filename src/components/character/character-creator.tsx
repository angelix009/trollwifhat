'use client';

import React from 'react';
import { useCharacterStore } from '@/stores/character-store';
import { TrollCharacterComponent } from './troll-character';
import CustomizationPanel from './customization-panel';
import { useResponsive } from '@/hooks/use-responsive';

const CharacterCreator: React.FC = () => {
  const { character } = useCharacterStore();
  const { windowWidth, isMobile } = useResponsive();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            🧌 TrollWifHat Creator
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Create your unique troll character with custom hats, expressions, and accessories. 
            Perfect for profile pictures, NFTs, and meme collections!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start justify-center">
          {/* Character Preview */}
          <div className="w-full max-w-md xl:max-w-none xl:flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Preview</h3>
              <div className="flex justify-center">
                <TrollCharacterComponent 
                  character={character} 
                  size={isMobile ? Math.min(windowWidth - 80, 300) : 400}
                  className="mx-auto"
                />
              </div>
              
              {/* Character Info */}
              <div className="mt-4 sm:mt-6 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {character.name || 'Unnamed Troll'}
                </h4>
                <div className="text-xs sm:text-sm text-white/70 space-y-1">
                  <p>Expression: {character.face.expression}</p>
                  <p>Hat: {character.hat.type === 'none' ? 'No hat' : character.hat.type}</p>
                  <p>Eyes: {character.face.eyeStyle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="w-full max-w-md xl:max-w-none xl:flex-shrink-0">
            <CustomizationPanel />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Endless Customization</h3>
              <p className="text-white/70">
                Mix and match hundreds of combinations of expressions, hats, colors, and accessories.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Social Ready</h3>
              <p className="text-white/70">
                Export in multiple sizes perfect for Twitter, Discord, Instagram, and more.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">Meme Culture</h3>
              <p className="text-white/70">
                Embrace the troll face meme with modern crypto and internet culture vibes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;