'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface Creation {
  trollface: string;
  hat: string;
  background: string;
  name: string;
}

// Modal Component
const ImageModal: React.FC<{ creation: Creation; onClose: () => void }> = ({ creation, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" onClick={onClose}>
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-white" />
        </button>
        
        <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-square relative">
            {/* Background */}
            <img 
              src={creation.background} 
              alt="Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Troll Face positioned at bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[55%] h-[55%]">
              <img 
                src={creation.trollface} 
                alt="Troll Face" 
                className="w-full h-full object-contain"
              />
              
              {/* Hat overlay */}
              <img 
                src={creation.hat} 
                alt="Hat" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            
            {/* Creation name overlay */}
            <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg text-xl font-bold">
              {creation.name}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const LegendaryCreations: React.FC = () => {
  const [selectedCreation, setSelectedCreation] = useState<Creation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const creations = [
    { trollface: '/assets/trollfaces/Green.png', hat: '/assets/hats/Crown.png', background: '/assets/backgrounds/Minecraft.png', name: 'Crypto King' },
    { trollface: '/assets/trollfaces/Blue.png', hat: '/assets/hats/BlackBeanie.png', background: '/assets/backgrounds/Solana.png', name: 'Solana Chad' },
    { trollface: '/assets/trollfaces/Red.png', hat: '/assets/hats/Nerd.png', background: '/assets/backgrounds/WaffleHouse.png', name: 'Waffle Warrior' },
    { trollface: '/assets/trollfaces/Black.png', hat: '/assets/hats/Durag.png', background: '/assets/backgrounds/Dark.png', name: 'Shadow Troll' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 legendary-creation-container rounded-lg p-2 md:p-4">
      {creations.map((creation, index) => (
        <div key={index} className="group relative legendary-creation-card rounded-lg p-1 md:p-2">
          <div className="aspect-square w-full border-2 md:border-4 border-black rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-all group-hover:-translate-y-1 md:group-hover:-translate-y-2 relative">
            {/* Background */}
            <img 
              src={creation.background} 
              alt="Background" 
              className="absolute inset-0 w-full h-full object-cover pic"
            />
            
            {/* Troll Face positioned at bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <img 
                src={creation.trollface} 
                alt="Troll Face" 
                className="w-full h-full object-contain pic"
              />
              
              {/* Hat overlay */}
              <img 
                src={creation.hat} 
                alt="Hat" 
                className="absolute inset-0 w-full h-full object-contain pic"
              />
            </div>
            
            {/* Creation name overlay */}
            <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-black bg-opacity-70 text-white px-1 md:px-2 py-0.5 md:py-1 rounded text-xs font-bold">
              {creation.name}
            </div>
            
            {/* Hover overlay */}
            <div 
              className="pic absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center cursor-pointer"
              onClick={() => {
                setSelectedCreation(creation);
                setIsModalOpen(true);
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 px-2 md:px-3 py-1 rounded-full pointer-events-none">
                <span className="text-black font-bold text-xs md:text-sm">View</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Modal for large image view */}
      {mounted && isModalOpen && selectedCreation && (
        <ImageModal 
          creation={selectedCreation} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCreation(null);
          }}
        />
      )}
    </div>
  );
};

export default LegendaryCreations;