'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'glow' | 'troll';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  padding = 'md',
}) => {
  const baseClasses = [
    'rounded-2xl transition-all duration-300',
    'border border-transparent',
  ].join(' ');

  const variants = {
    default: [
      'bg-white shadow-lg',
      hover && 'hover:shadow-xl hover:-translate-y-1',
    ].filter(Boolean).join(' '),
    
    glass: [
      'bg-white/10 backdrop-blur-md border-white/20',
      'shadow-xl',
      hover && 'hover:bg-white/15 hover:shadow-2xl hover:-translate-y-1',
    ].filter(Boolean).join(' '),
    
    glow: [
      'bg-gradient-to-br from-white via-white to-green-50/50',
      'shadow-xl shadow-green-500/10',
      'border-green-200/50',
      hover && 'hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1',
    ].filter(Boolean).join(' '),
    
    troll: [
      'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      'border-green-500/20 shadow-xl shadow-green-500/10',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/5 before:to-transparent',
      hover && 'hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1 hover:border-green-500/30',
    ].filter(Boolean).join(' '),
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        baseClasses,
        variants[variant],
        paddings[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;