import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-2xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 active:scale-95',
    secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 border border-white/5 active:scale-95',
    outline: 'border-2 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500 active:scale-95 backdrop-blur-md',
    ghost: 'text-zinc-400 hover:text-white hover:bg-white/5 active:scale-95',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm uppercase tracking-widest',
    md: 'px-8 py-3.5 text-base uppercase tracking-widest',
    lg: 'px-10 py-5 text-lg uppercase tracking-[0.2em]',
  };

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { y: -2 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processing
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
