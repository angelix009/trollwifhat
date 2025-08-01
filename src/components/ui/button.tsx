'use client';

import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'troll';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseClasses = [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-xl transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform active:scale-95',
  ].join(' ');

  const variants = {
    primary: [
      'bg-gradient-to-r from-green-500 to-green-600',
      'text-white shadow-lg hover:shadow-xl',
      'hover:from-green-600 hover:to-green-700',
      'focus:ring-green-500',
      'hover:shadow-green-500/25',
    ].join(' '),
    
    secondary: [
      'bg-gradient-to-r from-yellow-400 to-yellow-500',
      'text-slate-900 shadow-lg hover:shadow-xl',
      'hover:from-yellow-500 hover:to-yellow-600',
      'focus:ring-yellow-500',
      'hover:shadow-yellow-500/25',
    ].join(' '),
    
    ghost: [
      'bg-white/10 backdrop-blur-sm border border-white/20',
      'text-white hover:bg-white/20',
      'focus:ring-white/50',
    ].join(' '),
    
    destructive: [
      'bg-gradient-to-r from-red-500 to-red-600',
      'text-white shadow-lg hover:shadow-xl',
      'hover:from-red-600 hover:to-red-700',
      'focus:ring-red-500',
      'hover:shadow-red-500/25',
    ].join(' '),
    
    troll: [
      'bg-gradient-to-r from-green-400 via-green-500 to-green-600',
      'text-white shadow-lg hover:shadow-xl',
      'hover:from-green-500 hover:to-green-700',
      'focus:ring-green-500',
      'hover:shadow-green-500/30',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      'before:translate-x-[-100%] hover:before:translate-x-[100%]',
      'before:transition-transform before:duration-700',
    ].join(' '),
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        'hover:scale-105 active:scale-95 transition-transform duration-150',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;