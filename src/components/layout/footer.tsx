'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-full p-2">
                <Image src="/assets/logo.png" alt="TrollWifHat" width={44} height={44} />
              </div>
              <div>
                <h3 className="text-2xl font-meme text-white">TrollWifHat</h3>
                <p className="text-gray-400 text-sm">The Original PFP Creator</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Create legendary troll face PFPs with authentic meme vibes. 
              From classic trolls to epic hat combinations - express your unique personality.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://dexscreener.com/solana/jFm77hFoxhKacdtjRxg533gupJxAJ4xqffjtzbyTRoL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0B0E11] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a1d21] transition-colors flex items-center gap-2 text-sm border border-gray-700"
              >
                <Image 
                  src="/assets/dexscreener-logo.png" 
                  alt="DexScreener" 
                  width={16} 
                  height={16}
                  className="rounded"
                />
                DexScreener
              </a>
              <a 
                href="https://twitter.com/trollwifhats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm border border-gray-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/trollwifhats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#229ED9] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a7fb5] transition-colors flex items-center gap-2 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-meme text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/creator" className="block text-gray-300 hover:text-white transition-colors">
                PFP Creator
              </Link>
              <Link href="/gallery" className="block text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-meme text-white mb-4">Features</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                14+ Troll Faces
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                34+ Hats & Accessories
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                40+ Epic Backgrounds
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Instant Export
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Web3 Ready
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 TrollWifHat. All rights reserved. Made with 💀 for the meme community.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Contract:</span>
              <code className="bg-gray-800 px-2 py-1 rounded text-xs font-mono">
                JD3b...TRoL
              </code>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;