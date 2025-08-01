'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCharacterStore } from '@/stores/character-store';
import { AdvancedTrollFace } from './advanced-troll-face';
import { useResponsive } from '@/hooks/use-responsive';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { 
  Shuffle, 
  Download, 
  Palette, 
  Crown, 
  Eye, 
  Smile,
  Sparkles,
  Zap,
  Star,
  Settings
} from 'lucide-react';

const ModernCharacterCreator: React.FC = () => {
  const { character, updateFace, updateHat, updateBackground, randomizeCharacter } = useCharacterStore();
  const { isMobile } = useResponsive();
  const [activeTab, setActiveTab] = useState<'face' | 'hat' | 'background'>('face');
  const [isAnimating, setIsAnimating] = useState(false);

  const expressions = [
    { value: 'classic', label: 'Classic', icon: '😈' },
    { value: 'smirk', label: 'Smirk', icon: '😏' },
    { value: 'laughing', label: 'Laughing', icon: '😂' },
    { value: 'wink', label: 'Wink', icon: '😉' },
    { value: 'evil', label: 'Evil', icon: '👹' }
  ];

  const eyeStyles = [
    { value: 'normal', label: 'Normal', icon: '👁️' },
    { value: 'sunglasses', label: 'Cool', icon: '🕶️' },
    { value: 'laser', label: 'Laser', icon: '🔴' },
    { value: 'sleepy', label: 'Sleepy', icon: '😴' },
    { value: 'heart', label: 'Heart', icon: '😍' }
  ];

  const hatTypes = [
    { value: 'none', label: 'None', icon: '🚫' },
    { value: 'beanie', label: 'Beanie', icon: '🧢' },
    { value: 'wizard', label: 'Wizard', icon: '🧙‍♂️' },
    { value: 'crown', label: 'Crown', icon: '👑' },
    { value: 'cowboy', label: 'Cowboy', icon: '🤠' },
    { value: 'beret', label: 'Beret', icon: '🎨' }
  ];

  const colorPalette = [
    { color: '#9ACD32', name: 'Troll Green' },
    { color: '#FF6B6B', name: 'Meme Red' },
    { color: '#4ECDC4', name: 'Cyber Teal' },
    { color: '#45B7D1', name: 'Digital Blue' },
    { color: '#96CEB4', name: 'Matrix Green' },
    { color: '#FFEAA7', name: 'Golden Meme' },
    { color: '#DDA0DD', name: 'Vaporwave' },
    { color: '#98D8C8', name: 'Mint Fresh' },
    { color: '#F8B500', name: 'Doge Orange' },
    { color: '#FF1493', name: 'Hot Pink' }
  ];

  const tabs = [
    { id: 'face', label: 'Face', icon: Eye, gradient: 'from-green-400 to-green-600' },
    { id: 'hat', label: 'Hat', icon: Crown, gradient: 'from-yellow-400 to-orange-500' },
    { id: 'background', label: 'BG', icon: Palette, gradient: 'from-purple-400 to-pink-500' }
  ];

  const handleRandomize = async () => {
    setIsAnimating(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    randomizeCharacter();
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAnimating(false);
  };

  const ColorPicker: React.FC<{
    value: string;
    onChange: (color: string) => void;
    label: string;
  }> = ({ value, onChange, label }) => (
    <motion.div 
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
        <Palette size={16} />
        {label}
      </label>
      <div className="grid grid-cols-5 gap-2">
        {colorPalette.map((colorItem, i) => (
          <motion.button
            key={colorItem.color}
            onClick={() => onChange(colorItem.color)}
            className={`relative w-10 h-10 rounded-xl border-2 transition-all transform ${
              value === colorItem.color 
                ? 'border-slate-800 scale-110 shadow-lg' 
                : 'border-slate-300 hover:scale-105 hover:shadow-md'
            }`}
            style={{ backgroundColor: colorItem.color }}
            title={colorItem.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {value === colorItem.color && (
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const OptionGrid: React.FC<{
    options: { value: string; label: string; icon: string }[];
    value: string;
    onChange: (value: string) => void;
    label: string;
    icon: React.ElementType;
  }> = ({ options, value, onChange, label, icon: Icon }) => (
    <motion.div 
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
        <Icon size={16} />
        {label}
      </label>
      
      <div className="grid grid-cols-2 gap-2">
        {options.map((option, i) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`relative p-3 rounded-xl border-2 transition-all text-left ${
              value === option.value
                ? 'border-green-500 bg-green-50 text-green-700 shadow-lg'
                : 'border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:shadow-md'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{option.icon}</span>
              <span className="text-sm font-medium">{option.label}</span>
            </div>
            
            {value === option.value && (
              <motion.div
                className="absolute top-1 right-1"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Sparkles size={14} className="text-green-500" />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'face':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <OptionGrid
              label="Expression"
              options={expressions}
              value={character.face.expression}
              onChange={(expression) => updateFace({ expression: expression as typeof character.face.expression })}
              icon={Smile}
            />
            
            <ColorPicker
              label="Skin Color"
              value={character.face.skinColor}
              onChange={(skinColor) => updateFace({ skinColor })}
            />
            
            <OptionGrid
              label="Eye Style"
              options={eyeStyles}
              value={character.face.eyeStyle}
              onChange={(eyeStyle) => updateFace({ eyeStyle: eyeStyle as typeof character.face.eyeStyle })}
              icon={Eye}
            />
            
            <ColorPicker
              label="Eye Color"
              value={character.face.eyeColor}
              onChange={(eyeColor) => updateFace({ eyeColor })}
            />
          </motion.div>
        );
      
      case 'hat':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <OptionGrid
              label="Hat Type"
              options={hatTypes}
              value={character.hat.type}
              onChange={(type) => updateHat({ type: type as typeof character.hat.type })}
              icon={Crown}
            />
            
            {character.hat.type !== 'none' && (
              <ColorPicker
                label="Hat Color"
                value={character.hat.color}
                onChange={(color) => updateHat({ color })}
              />
            )}
          </motion.div>
        );
      
      case 'background':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ColorPicker
              label="Background Color"
              value={character.background.colors[0] || '#0f172a'}
              onChange={(color) => updateBackground({ colors: [color] })}
            />
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent mb-4">
            TrollWifHat
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Créez votre troll face unique avec style. Interface ultra-moderne pour les vrais connaisseurs du meme.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 items-start justify-center max-w-7xl mx-auto">
          {/* Character Preview */}
          <motion.div 
            className="w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="troll" className="text-center">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Preview</h3>
                  <motion.div
                    animate={{ rotate: isAnimating ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      variant="troll"
                      size="sm"
                      onClick={handleRandomize}
                      icon={<Shuffle size={16} />}
                      disabled={isAnimating}
                    >
                      Random
                    </Button>
                  </motion.div>
                </div>

                <motion.div 
                  className="flex justify-center"
                  animate={{ 
                    scale: isAnimating ? [1, 0.9, 1.1, 1] : 1,
                    rotate: isAnimating ? [0, -5, 5, 0] : 0
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <AdvancedTrollFace
                    character={character}
                    size={isMobile ? 300 : 400}
                    animated={!isAnimating}
                  />
                </motion.div>

                <div className="bg-slate-800/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-sm text-slate-300 space-y-2">
                    <div className="flex justify-between">
                      <span>Expression:</span>
                      <span className="text-green-400 font-medium capitalize">
                        {character.face.expression}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hat:</span>
                      <span className="text-yellow-400 font-medium capitalize">
                        {character.hat.type === 'none' ? 'No hat' : character.hat.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Eyes:</span>
                      <span className="text-blue-400 font-medium capitalize">
                        {character.face.eyeStyle}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  icon={<Download size={20} />}
                  className="w-full"
                >
                  Export as PFP
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Customization Panel */}
          <motion.div 
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card variant="glass" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Settings size={24} />
                  Customize
                </h2>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400" />
                  <Star size={16} className="text-yellow-400" />
                  <Star size={16} className="text-yellow-400" />
                </div>
              </div>

              {/* Advanced Tabs */}
              <div className="flex gap-1 p-1 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'face' | 'hat' | 'background')}
                      className={`relative flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          className={`absolute inset-0 rounded-lg bg-gradient-to-r ${tab.gradient}`}
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="relative flex items-center gap-2">
                        <Icon size={16} />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: Zap,
              title: "Ultra Performance",
              description: "Rendu SVG optimisé avec animations fluides 60fps",
              gradient: "from-yellow-400 to-orange-500"
            },
            {
              icon: Sparkles,
              title: "Design Premium",
              description: "Interface moderne avec effets visuels avancés",
              gradient: "from-purple-400 to-pink-500"
            },
            {
              icon: Star,
              title: "Export Pro",
              description: "Formats multiples, qualité maximale pour tous usages",
              gradient: "from-green-400 to-blue-500"
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <Card variant="glass" hover className="text-center h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ModernCharacterCreator;