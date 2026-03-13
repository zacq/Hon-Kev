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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-navbar py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className={`font-serif text-2xl font-bold transition-colors ${scrolled ? 'text-emerald-700' : 'text-emerald-50'}`}>MIGONGO</span>
              <span className={`ml-2 text-[10px] font-bold tracking-[0.2em] uppercase hidden md:block border-l-2 border-emerald-500/30 pl-2 transition-colors ${scrolled ? 'text-gray-600' : 'text-emerald-100/80'}`}>
                Bahati Representative
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-all relative group ${
                    isActive(link.path)
                      ? (scrolled ? 'text-emerald-600' : 'text-white')
                      : (scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-emerald-50/90 hover:text-white')
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600"
                    />
                  )}
                  {!isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/donate">
                <Button variant="primary" size="sm" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Donate
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-navbar border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive(link.path)
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Link to="/donate" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Donate Now
                  </Button>
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