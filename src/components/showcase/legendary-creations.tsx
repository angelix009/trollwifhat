'use client';

import React from 'react';

const LegendaryCreations: React.FC = () => {
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
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-32 md:h-32">
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
            <div className="pic absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 px-2 md:px-3 py-1 rounded-full">
                <span className="text-black font-bold text-xs md:text-sm">View</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LegendaryCreations;