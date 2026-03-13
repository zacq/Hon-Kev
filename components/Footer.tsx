import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ background: 'linear-gradient(135deg, #008000, #006400)' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />
      {/* Ambient blobs */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-black/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                <span className="text-white font-black text-sm">KM</span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white tracking-tight">MIGONGO</h3>
            </div>
            <p className="text-green-100/70 text-sm leading-relaxed mb-7 max-w-xs text-center lg:text-left">
              Dedicated to transformative leadership in Bahati and across Kenya. Join our journey toward a more prosperous and inclusive future.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Twitter, href: 'https://twitter.com/HonMigongo', label: 'Twitter' },
                { icon: Facebook, href: 'https://facebook.com/HonMigongo', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/honmigongo', label: 'Instagram' },
                { icon: Youtube, href: 'https://www.youtube.com/@HonMigongo', label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-green-100/70 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-green-300/80 tracking-[0.22em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Kelvin', to: '/about' },
                { label: 'Achievements', to: '/achievements' },
                { label: 'Vision & Policy', to: '/vision' },
                { label: 'News & Media', to: '/blog' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-green-100/65 hover:text-white text-sm transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-green-300/80 tracking-[0.22em] uppercase mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { label: 'Volunteer', to: '/volunteer' },
                { label: 'Donate', to: '/donate' },
                { label: 'Contact Office', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-green-100/65 hover:text-white text-sm transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black text-green-300/80 tracking-[0.22em] uppercase mb-6">Campaign Office</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-300 shrink-0 mt-0.5" />
                <span className="text-green-100/65 text-sm leading-relaxed">
                  National Campaign HQ<br />
                  Westlands Office Park, Suite 402<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-300 shrink-0" />
                <a href="mailto:info@kelvinmigongo.com" className="text-green-100/65 hover:text-white text-sm transition-colors">info@kelvinmigongo.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-300 shrink-0" />
                <a href="tel:+254700000000" className="text-green-100/65 hover:text-white text-sm transition-colors">+254 700 000 000</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-[11px] text-green-100/40 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Kelvin Migongo Campaign. All rights reserved.
          </p>
          <span className="text-[10px] text-green-200/50 uppercase tracking-[0.28em] font-black border border-green-300/20 px-3 py-1 rounded">
            Paid for by Friends of Kelvin Migongo
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
