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
  const base = 'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-2xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    /* Solid green CTA */
    primary: 'bg-dcp-green text-white hover:bg-dcp-dark shadow-md shadow-green-200 active:scale-95',
    /* White with green border */
    secondary: 'bg-white text-dcp-green border-2 border-dcp-green hover:bg-dcp-bg active:scale-95',
    /* Transparent with green text */
    ghost: 'text-dcp-green hover:bg-dcp-bg active:scale-95',
    /* Outlined */
    outline: 'border-2 border-dcp-green/40 text-dcp-green hover:bg-dcp-bg hover:border-dcp-green active:scale-95 backdrop-blur-md',
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
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processing
        </>
      ) : children}
    </motion.button>
  );
};

export default Button;
