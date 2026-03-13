import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#022c22] text-white pt-24 pb-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight">MIGONGO</h3>
            <p className="text-emerald-100/60 text-base leading-relaxed mb-8 max-w-sm text-center lg:text-left">
              Dedicated to transformative leadership in Bahati and across Kenya. Join our journey toward a more prosperous and inclusive future.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Twitter, href: 'https://twitter.com/HonMigongo', label: 'Twitter' },
                { icon: Facebook, href: 'https://facebook.com/HonMigongo', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/honmigongo', label: 'Instagram' },
                { icon: Youtube, href: 'https://www.youtube.com/@HonMigongo', label: 'YouTube' },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-100/60 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase mb-6 lg:mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About Kelvin</Link></li>
              <li><Link to="/achievements" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Achievements</Link></li>
              <li><Link to="/vision" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Vision & Policy</Link></li>
              <li><Link to="/blog" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> News & Media</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase mb-6 lg:mb-8">Get Involved</h4>
            <ul className="space-y-4">
              <li><Link to="/volunteer" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Volunteer</Link></li>
              <li><Link to="/donate" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Donate</Link></li>
              <li><Link to="/contact" className="text-emerald-100/60 hover:text-white transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Office</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 col-span-1">
            <h4 className="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase mb-6 lg:mb-8">Campaign Office</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-emerald-100/60 text-sm leading-relaxed">
                  National Campaign HQ<br />
                  Westlands Office Park, Suite 402<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <a href="mailto:info@kelvinmigongo.com" className="text-emerald-100/60 hover:text-white transition-colors text-sm">info@kelvinmigongo.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <a href="tel:+254700000000" className="text-emerald-100/60 hover:text-white transition-colors text-sm">+254 700 000 000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-xs text-emerald-100/30 uppercase tracking-widest font-bold">
              &copy; {new Date().getFullYear()} Kelvin Migongo Campaign. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[10px] text-emerald-500/50 uppercase tracking-[0.3em] font-black border border-emerald-500/20 px-3 py-1 rounded">
              Paid for by Friends of Kelvin Migongo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;