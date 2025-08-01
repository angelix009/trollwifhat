import Image from 'next/image';
import Link from 'next/link';
import { ASSETS, getAssetPath } from '@/lib/assets';

export default function GalleryPage() {
  // Featured combinations - some popular/funny combinations
  const featuredCombos = [
    {
      id: 1,
      name: 'Classic Troll King',
      trollface: 'black',
      hat: 'crown',
      background: 'white',
      description: 'The original troll with royal treatment'
    },
    {
      id: 2,
      name: 'Crypto Bro',
      trollface: 'green',
      hat: 'nerd',
      background: 'solana',
      description: 'When the bags are pumping'
    },
    {
      id: 3,
      name: 'Gamer Troll',
      trollface: 'blue',
      hat: 'black-beanie',
      background: 'minecraft',
      description: 'Ready to grief some noobs'
    },
    {
      id: 4,
      name: 'Uncle Sam Troll',
      trollface: 'white',
      hat: 'uncle-sam',
      background: '47th-desk',
      description: 'We want YOU... to get trolled'
    },
    {
      id: 5,
      name: 'Stoned Philosopher',
      trollface: 'yellow',
      hat: 'stoned',
      background: 'woods',
      description: 'Deep thoughts, bro'
    },
    {
      id: 6,
      name: 'Waffle House Warrior',
      trollface: 'brown',
      hat: 'durag',
      background: 'waffle-house',
      description: 'Late night mischief'
    },
    {
      id: 7,
      name: 'Mythical Troll',
      trollface: 'purp',
      hat: 'crown',
      background: 'mythical',
      description: 'Legendary troll energy'
    },
    {
      id: 8,
      name: 'Runescape Veteran',
      trollface: 'green',
      hat: 'black-hat',
      background: 'runescape',
      description: 'Buying gf 10k'
    },
  ];

  const renderTrollCombo = (combo: typeof featuredCombos[0]) => {
    const trollface = ASSETS.trollfaces.find(t => t.id === combo.trollface);
    const hat = ASSETS.hats.find(h => h.id === combo.hat);
    const background = ASSETS.backgrounds.find(b => b.id === combo.background);

    if (!trollface || !background) return null;

    return (
      <div key={combo.id} className="bg-white border-2 border-gray-200 hover:border-black transition-colors">
        <div className="relative aspect-square bg-gray-50">
          {/* Background */}
          <Image
            src={getAssetPath('backgrounds', background.file) || ''}
            alt={background.name}
            fill
            className="object-cover"
          />
          
          {/* Troll Face positioned at bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <Image
                src={getAssetPath('trollfaces', trollface.file)}
                alt={trollface.name}
                fill
                className="object-contain"
              />
              
              {/* Hat overlay */}
              {hat && hat.file && (
                <Image
                  src={getAssetPath('hats', hat.file)}
                  alt={hat.name}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-black mb-1">{combo.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{combo.description}</p>
          <div className="text-xs text-gray-500 space-y-1">
            <div>Face: {trollface.name}</div>
            <div>Hat: {hat?.name || 'None'}</div>
            <div>BG: {background.name}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Troll Gallery</h1>
          <p className="text-lg text-gray-600 mb-6">
            Check out these legendary troll face combinations
          </p>
          <Link
            href="/creator"
            className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Create Your Own
          </Link>
        </div>

        {/* Featured Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Featured Combinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCombos.map(renderTrollCombo)}
          </div>
        </section>

        {/* Asset Categories */}
        <section className="space-y-12">
          {/* Troll Faces */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">All Troll Faces</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {ASSETS.trollfaces.map((face) => (
                <div key={face.id} className="aspect-square border-2 border-gray-200 hover:border-black transition-colors group">
                  <div className="relative w-full h-full">
                    <Image
                      src={getAssetPath('trollfaces', face.file)}
                      alt={face.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {face.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hats */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">All Hats & Accessories</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {ASSETS.hats.filter(hat => hat.file).map((hat) => (
                <div key={hat.id} className="aspect-square border-2 border-gray-200 hover:border-black transition-colors group relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={getAssetPath('hats', hat.file!) || ''}
                      alt={hat.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {hat.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backgrounds Preview */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Background Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {ASSETS.backgrounds.slice(0, 18).map((bg) => (
                <div key={bg.id} className="aspect-square border-2 border-gray-200 hover:border-black transition-colors group relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={getAssetPath('backgrounds', bg.file) || ''}
                      alt={bg.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {bg.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <span className="text-gray-600">
                ...and {ASSETS.backgrounds.length - 18} more backgrounds in the creator!
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 py-12 bg-gray-50 -mx-4 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Create?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Mix and match from hundreds of combinations to create your perfect troll
            </p>
            <Link
              href="/creator"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Creating Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}