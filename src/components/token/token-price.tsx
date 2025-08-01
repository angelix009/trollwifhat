'use client';

import React, { useState, useEffect } from 'react';

interface TokenPriceProps {
  contractAddress: string;
  className?: string;
}

const TokenPrice: React.FC<TokenPriceProps> = ({ contractAddress, className = "" }) => {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using DexScreener API for Solana token prices
        const response = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${contractAddress}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch price');
        }
        
        const data = await response.json();
        
        if (data.pairs && data.pairs.length > 0) {
          // Get the most liquid pair (highest volume)
          const mainPair = data.pairs.reduce((prev: any, current: any) => 
            (current.volume?.h24 || 0) > (prev.volume?.h24 || 0) ? current : prev
          );
          
          setMarketCap(parseFloat(mainPair.marketCap || '0'));
          setChange24h(parseFloat(mainPair.priceChange?.h24 || '0'));
        } else {
          throw new Error('No trading pairs found');
        }
      } catch (err) {
        console.error('Failed to fetch token price:', err);
        setError('Price unavailable');
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    
    // Update price every 30 seconds
    const interval = setInterval(fetchPrice, 30000);
    
    return () => clearInterval(interval);
  }, [contractAddress]);

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    } else if (marketCap >= 1e3) {
      return `$${(marketCap / 1e3).toFixed(2)}K`;
    } else {
      return `$${marketCap.toFixed(2)}`;
    }
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
        <span className="text-xs text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error || marketCap === null) {
    return (
      <div className={`flex items-center gap-2 text-gray-500 ${className}`}>
        <span className="text-sm">MC: N/A</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">MC:</span>
        <span className="text-lg font-bold">{formatMarketCap(marketCap)}</span>
      </div>
      
      {change24h !== null && (
        <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
          change24h >= 0 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          <span>{change24h >= 0 ? '↗' : '↘'}</span>
          <span>{formatChange(change24h)}</span>
        </div>
      )}
      
      <div className="flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-500 ml-1">Live</span>
      </div>
    </div>
  );
};

export default TokenPrice;