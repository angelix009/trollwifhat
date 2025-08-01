'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ASSETS, getAssetPath } from '@/lib/assets';
import { TrollCharacter } from '@/types/character';
import { downloadImage, generateFilename } from '@/lib/export-utils';

interface CleanTrollCreatorProps {
  character: TrollCharacter;
  onUpdate: (updates: Partial<TrollCharacter>) => void;
}

const CleanTrollCreator: React.FC<CleanTrollCreatorProps> = ({ character, onUpdate }) => {
  const [activeTab, setActiveTab] = useState<'face' | 'hat' | 'background'>('face');
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleTrollFaceChange = (faceId: string) => {
    const trollFace = ASSETS.trollfaces.find(face => face.id === faceId);
    if (trollFace) {
      onUpdate({
        face: {
          ...character.face,
          expression: faceId as typeof character.face.expression,
          skinColor: faceId
        }
      });
    }
  };

  const handleHatChange = (hatId: string) => {
    const hat = ASSETS.hats.find(h => h.id === hatId);
    if (hat) {
      onUpdate({
        hat: {
          ...character.hat,
          type: hatId as typeof character.hat.type,
          color: '#000000'
        }
      });
    }
  };

  const handleBackgroundChange = (bgId: string) => {
    const background = ASSETS.backgrounds.find(bg => bg.id === bgId);
    if (background) {
      onUpdate({
        background: {
          type: 'pattern',
          colors: [bgId],
          pattern: bgId
        }
      });
    }
  };

  const handleExport = async (format: 'png' | 'jpg' = 'png') => {
    setIsExporting(true);
    try {
      // Create a canvas to capture the preview
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) throw new Error('Could not get canvas context');
      
      canvas.width = 512;
      canvas.height = 512;
      
      const currentTrollFace = ASSETS.trollfaces.find(face => face.id === character.face.skinColor) || ASSETS.trollfaces[0];
      const currentHat = ASSETS.hats.find(hat => hat.id === character.hat.type);
      const currentBackground = ASSETS.backgrounds.find(bg => bg.id === character.background.pattern) || ASSETS.backgrounds[0];
      
      // Load and draw background
      if (currentBackground.file) {
        const bgImg = document.createElement('img');
        bgImg.crossOrigin = 'anonymous';
        
        await new Promise((resolve, reject) => {
          bgImg.onload = resolve;
          bgImg.onerror = reject;
          bgImg.src = getAssetPath('backgrounds', currentBackground.file);
        });
        
        ctx.drawImage(bgImg, 0, 0, 512, 512);
      } else {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 512, 512);
      }
      
      // Load and draw troll face
      const trollImg = document.createElement('img');
      trollImg.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        trollImg.onload = resolve;
        trollImg.onerror = reject;
        trollImg.src = getAssetPath('trollfaces', currentTrollFace.file);
      });
      
      const trollSize = 460;
      const trollX = (512 - trollSize) / 2;
      const trollY = 512 - trollSize; // Position at absolute bottom
      ctx.drawImage(trollImg, trollX, trollY, trollSize, trollSize);
      
      // Load and draw hat if exists
      if (currentHat && currentHat.file) {
        const hatImg = document.createElement('img');
        hatImg.crossOrigin = 'anonymous';
        
        await new Promise((resolve, reject) => {
          hatImg.onload = resolve;
          hatImg.onerror = reject;
          hatImg.src = getAssetPath('hats', currentHat.file);
        });
        
        ctx.drawImage(hatImg, trollX, trollY, trollSize, trollSize);
      }
      
      // Convert to data URL and download
      const mimeType = `image/${format}`;
      const dataURL = canvas.toDataURL(mimeType, 0.9);
      const filename = generateFilename(character, format);
      
      downloadImage(dataURL, filename);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const tabs = [
    { id: 'face', label: 'Troll Face', count: ASSETS.trollfaces.length },
    { id: 'hat', label: 'Hats & Accessories', count: ASSETS.hats.length },
    { id: 'background', label: 'Backgrounds', count: ASSETS.backgrounds.length },
  ];

  const renderPreview = () => {
    const currentTrollFace = ASSETS.trollfaces.find(face => face.id === character.face.skinColor) || ASSETS.trollfaces[0];
    const currentHat = ASSETS.hats.find(hat => hat.id === character.hat.type);
    const currentBackground = ASSETS.backgrounds.find(bg => bg.id === character.background.pattern) || ASSETS.backgrounds[0];

    return (
      <div ref={previewRef} className="relative w-80 h-80 bg-white border-2 border-black shadow-lg overflow-hidden">
        {/* Background - sized to container */}
        {currentBackground.file && (
          <Image
            src={getAssetPath('backgrounds', currentBackground.file) || ''}
            alt={currentBackground.name}
            fill
            className="object-cover absolute inset-0"
            priority
          />
        )}
        
        {/* Troll Face - positioned at absolute bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="relative w-72 h-72">
            <Image
              src={getAssetPath('trollfaces', currentTrollFace.file)}
              alt={currentTrollFace.name}
              fill
              className="object-contain z-10"
              priority
            />
            
            {/* Hat overlay - sized relative to troll face */}
            {currentHat && currentHat.file && (
              <div className="absolute inset-0 z-20">
                <Image
                  src={getAssetPath('hats', currentHat.file)}
                  alt={currentHat.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAssetGrid = (assets: { id: string; name: string; file: string | null }[], onSelect: (id: string) => void, currentId: string) => {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 max-h-96 overflow-y-auto">
        {assets.map((asset) => (
          <button
            key={asset.id}
            onClick={() => onSelect(asset.id)}
            className={`relative aspect-square border-2 transition-all hover:scale-105 ${
              currentId === asset.id
                ? 'border-black bg-gray-100'
                : 'border-gray-300 hover:border-gray-500'
            }`}
            title={asset.name}
          >
            {asset.file ? (
              <Image
                src={getAssetPath(
                  activeTab === 'face' ? 'trollfaces' : 
                  activeTab === 'hat' ? 'hats' : 'backgrounds',
                  asset.file
                )}
                alt={asset.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                None
              </div>
            )}
          </button>
        ))}
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'face':
        return renderAssetGrid(
          ASSETS.trollfaces,
          handleTrollFaceChange,
          character.face.skinColor
        );
      
      case 'hat':
        return renderAssetGrid(
          ASSETS.hats,
          handleHatChange,
          character.hat.type
        );
      
      case 'background':
        return renderAssetGrid(
          ASSETS.backgrounds,
          handleBackgroundChange,
          character.background.pattern || 'white'
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Preview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Preview</h2>
          <div className="flex justify-center">
            {renderPreview()}
          </div>
          
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Face: {ASSETS.trollfaces.find(f => f.id === character.face.skinColor)?.name}
              </p>
              <p className="text-sm text-gray-600">
                Hat: {ASSETS.hats.find(h => h.id === character.hat.type)?.name || 'None'}
              </p>
              <p className="text-sm text-gray-600">
                Background: {ASSETS.backgrounds.find(b => b.id === character.background.pattern)?.name}
              </p>
            </div>
            
            {/* Export Buttons */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => handleExport('png')}
                disabled={isExporting}
                className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50 border-2 border-black"
              >
                {isExporting ? 'Exporting...' : '📸 Export PNG'}
              </button>
              <button
                onClick={() => handleExport('jpg')}
                disabled={isExporting}
                className="px-4 py-2 border-2 border-black text-black text-sm font-medium hover:bg-black hover:text-white disabled:opacity-50"
              >
                {isExporting ? 'Exporting...' : '🖼️ Export JPG'}
              </button>
            </div>
          </div>
        </div>

        {/* Customization Panel */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black">Customize</h2>
          
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'face' | 'hat' | 'background')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanTrollCreator;