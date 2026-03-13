import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)' } : {}}
      className={`glass-card p-6 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
