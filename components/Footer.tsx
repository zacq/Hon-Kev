import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-campaign-secondary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">NYORO</h3>
            <p className="text-gray-400 text-sm">
              Building a Prosperous Kiharu.<br />
              Securing Kenya’s Future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/NdindiNyoro" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="https://facebook.com/NdindiNyoro" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="https://instagram.com/ndindinyoro" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/@Ndindinyoro1" className="text-gray-400 hover:text-white"><Youtube className="h-5 w-5" /></a>
              <a href="https://tiktok.com/@ndindinyoro" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.53.02C13.84 0 15.14.01 16.44 0a6.52 6.52 0 0 0 .54 3.12 6.55 6.55 0 0 0 3.15 3.16v4.02a10.45 10.45 0 0 1-3.23-1.25c-.01 3.51-.01 7.02-.01 10.53a8.17 8.17 0 0 1-4.8 7.6 8.24 8.24 0 0 1-8.54-1.2 8.17 8.17 0 0 1-3.51-6.63 8.18 8.18 0 0 1 7.2-8.15V11a4.17 4.17 0 0 0-3.08 4.04 4.19 4.19 0 0 0 4.19 4.18 4.2 4.2 0 0 0 4.21-4.18c0-4-.01-8-.01-12a10.15 10.15 0 0 1 3.42-3.04V.02Z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Ndindi</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-white text-sm">The Kiharu Model</Link></li>
              <li><Link to="/vision" className="text-gray-400 hover:text-white text-sm">Legislative Work</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm">News & Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/volunteer" className="text-gray-400 hover:text-white text-sm">Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white text-sm">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Office</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2" /> info@ndindinyoro.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" /> +254 700 000 000
              </li>
              <li className="text-gray-400 text-sm mt-2">
                Kiharu Constituency Office<br />Murang'a, Kenya
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ndindi Nyoro Campaign. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            Paid for by Friends of Ndindi Nyoro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;