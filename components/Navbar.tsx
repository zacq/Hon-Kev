import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Kelvin', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Vision & Policy', path: '/vision' },
    { name: 'News & Media', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-navbar-light py-2 shadow-sm' : 'bg-white/70 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-dcp-green flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-xs">KM</span>
              </div>
              <div>
                <span className="font-serif text-xl font-black text-dcp-dark leading-none">MIGONGO</span>
                <span className="block text-[9px] font-bold tracking-[0.18em] uppercase text-dcp-muted leading-none mt-0.5 hidden md:block">
                  Bahati Representative
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition-all relative group ${
                    isActive(link.path)
                      ? 'text-dcp-green'
                      : 'text-dcp-sub hover:text-dcp-green'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dcp-green rounded-full"
                    />
                  )}
                  {!isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dcp-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 }}
            >
              <Link to="/donate">
                <Button variant="primary" size="sm" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" /> Donate
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-dcp-sub hover:bg-dcp-bg transition-colors"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-dcp-green/10 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive(link.path)
                      ? 'bg-dcp-green text-white shadow-sm'
                      : 'text-dcp-sub hover:bg-dcp-bg hover:text-dcp-green'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 px-2">
                <Link to="/donate" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full">Donate Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
