'use client';

import React, { useState } from 'react';
import { useCharacterStore } from '@/stores/character-store';
import { HatType } from '@/types/character';
import { Shuffle, Download, Palette, Crown, Eye } from 'lucide-react';
import ExportModal from './export-modal';

const CustomizationPanel: React.FC = () => {
  const { character, updateFace, updateHat, updateBackground, randomizeCharacter } = useCharacterStore();
  const [activeTab, setActiveTab] = useState<'face' | 'hat' | 'background'>('face');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const expressions = ['classic', 'smirk', 'laughing', 'wink', 'evil'];
  const eyeStyles = ['normal', 'sunglasses', 'laser', 'sleepy', 'heart'];
  const mouthStyles = ['classic', 'wide', 'smug', 'o-face', 'tongue'];
  const hatTypes: HatType[] = ['none', 'beanie', 'cap', 'wizard', 'crown', 'cowboy', 'beret'];
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F8B500', '#FF1493', '#32CD32'];

  const tabs = [
    { id: 'face', label: 'Face', icon: Eye },
    { id: 'hat', label: 'Hat', icon: Crown },
    { id: 'background', label: 'Background', icon: Palette },
  ];

  const ColorPicker: React.FC<{
    value: string;
    onChange: (color: string) => void;
    label: string;
  }> = ({ value, onChange, label }) => (
    <div className="space-y-2">
      <label className="text-xs sm:text-sm font-medium text-gray-700">{label}</label>
      <div className="grid grid-cols-5 sm:flex sm:flex-wrap gap-1 sm:gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-all hover:scale-110 ${
              value === color ? 'border-gray-800 scale-110' : 'border-gray-300'
            }`}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );

  const OptionSelector: React.FC<{
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
  }> = ({ options, value, onChange, label }) => (
    <div className="space-y-2">
      <label className="text-xs sm:text-sm font-medium text-gray-700">{label}</label>
      <div className="grid grid-cols-2 gap-1 sm:gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-md border transition-colors capitalize ${
              value === option
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
            }`}
          >
            {option.replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  );

  const renderFaceTab = () => (
    <div className="space-y-6">
      <OptionSelector
        label="Expression"
        options={expressions}
        value={character.face.expression}
        onChange={(expression) => updateFace({ expression: expression as typeof character.face.expression })}
      />
      
      <ColorPicker
        label="Skin Color"
        value={character.face.skinColor}
        onChange={(skinColor) => updateFace({ skinColor })}
      />
      
      <OptionSelector
        label="Eye Style"
        options={eyeStyles}
        value={character.face.eyeStyle}
        onChange={(eyeStyle) => updateFace({ eyeStyle: eyeStyle as typeof character.face.eyeStyle })}
      />
      
      <ColorPicker
        label="Eye Color"
        value={character.face.eyeColor}
        onChange={(eyeColor) => updateFace({ eyeColor })}
      />
      
      <OptionSelector
        label="Mouth Style"
        options={mouthStyles}
        value={character.face.mouthStyle}
        onChange={(mouthStyle) => updateFace({ mouthStyle: mouthStyle as typeof character.face.mouthStyle })}
      />
    </div>
  );

  const renderHatTab = () => (
    <div className="space-y-6">
      <OptionSelector
        label="Hat Type"
        options={hatTypes}
        value={character.hat.type}
        onChange={(type) => updateHat({ type: type as HatType })}
      />
      
      {character.hat.type !== 'none' && (
        <ColorPicker
          label="Hat Color"
          value={character.hat.color}
          onChange={(color) => updateHat({ color })}
        />
      )}
    </div>
  );

  const renderBackgroundTab = () => (
    <div className="space-y-6">
      <ColorPicker
        label="Background Color"
        value={character.background.colors[0] || '#87CEEB'}
        onChange={(color) => updateBackground({ colors: [color] })}
      />
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'face':
        return renderFaceTab();
      case 'hat':
        return renderHatTab();
      case 'background':
        return renderBackgroundTab();
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:w-80">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Customize</h2>
        <button
          onClick={randomizeCharacter}
          className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors text-sm sm:text-base"
        >
          <Shuffle size={16} />
          Random
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'face' | 'hat' | 'background')}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-none justify-center ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {renderTabContent()}
      </div>

      {/* Export Button */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button 
          onClick={() => setIsExportModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium"
        >
          <Download size={16} />
          Export PFP
        </button>
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        character={character}
      />
    </div>
  );
};

export default CustomizationPanel;