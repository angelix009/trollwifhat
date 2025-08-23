'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import TokenPrice from '@/components/token/token-price';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/creator', label: 'Creator', id: 'creator' },
    { href: '/gallery', label: 'Gallery', id: 'gallery' },
    { href: '/about', label: 'About', id: 'about' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b-2 border-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src="/assets/logo.png" alt="TrollWifHat" width={32} height={32} />
            <div className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors font-meme">
              TrollWifHat
            </div>
          </Link>

          {/* Center - Navigation Links & Token Price */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={clsx(
                    'px-3 py-2 text-sm font-medium transition-colors relative',
                    pathname === item.href
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-gray-300'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Token Price */}
            <div className="border-l-2 border-gray-200 pl-6">
              <TokenPrice 
                contractAddress="jFm77hFoxhKacdtjRxg533gupJxAJ4xqffjtzbyTRoL"
                className="text-sm"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-black hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {/* Token Price on Mobile */}
            <div className="px-3 py-2 border-b border-gray-100">
              <TokenPrice 
                contractAddress="jFm77hFoxhKacdtjRxg533gupJxAJ4xqffjtzbyTRoL"
                className="text-sm justify-center"
              />
            </div>
            
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className={clsx(
                  'block px-3 py-2 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-black bg-gray-50 border-l-4 border-black'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;