import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, Mail, User, Phone } from 'lucide-react';
import { airtableService } from '../services/airtableService';
import Button from './Button';
import GlassCard from './GlassCard';

interface NewsletterFormProps {
  className?: string;
  variant?: 'default' | 'premium';
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = "", variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'success' | 'submitting' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setSubStatus('submitting');
    try {
      const response = await airtableService.addSupporter({
        fullName,
        email,
        phone,
        county: 'Nakuru',
        constituency: 'Bahati'
      });
      
      if (response) {
        setSubStatus('success');
        setEmail('');
        setFullName('');
        setPhone('');
      } else {
        setSubStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubStatus('error');
    }
  };

  const isPremium = variant === 'premium';

  return (
    <GlassCard className={`${isPremium ? 'p-10 lg:p-14 bg-zinc-900/50' : 'p-8 lg:p-12'} border border-white/10 shadow-3xl relative overflow-hidden ${className}`}>
      {/* Decorative gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${isPremium ? 'bg-emerald-400/20' : 'bg-emerald-500/10'} rounded-full blur-3xl -mr-16 -mt-16`} />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-3xl -ml-12 -mb-12" />
      
      {subStatus === 'success' ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12 relative z-10"
        >
          <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle className="text-emerald-400 w-12 h-12" />
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4">You're on board!</h3>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-sm mx-auto">Welcome to the movement. Your registration is complete and we've initialized your supporter profile.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="fullName" className="block text-[10px] font-black text-zinc-500 mb-3 uppercase tracking-[0.2em]">Official Name</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 transition-colors group-focus-within:text-emerald-400" />
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Kelvin Migongo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-bold tracking-tight"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-[10px] font-black text-zinc-500 mb-3 uppercase tracking-[0.2em]">Contact Email</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 transition-colors group-focus-within:text-emerald-400" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="contact@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-bold tracking-tight"
                />
              </div>
            </div>

            {isPremium && (
              <div className="relative">
                <label htmlFor="phone" className="block text-[10px] font-black text-zinc-500 mb-3 uppercase tracking-[0.2em]">Phone Identity</label>
                <div className="relative group">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 transition-colors group-focus-within:text-emerald-400" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-bold tracking-tight"
                  />
                </div>
              </div>
            )}
          </div>
          
          <Button
            type="submit"
            isLoading={subStatus === 'submitting'}
            className={`w-full py-5 text-lg font-black tracking-widest uppercase shadow-xl ${isPremium ? 'shadow-emerald-900/40' : 'shadow-emerald-900/10'}`}
          >
            {subStatus === 'submitting' ? 'Transmitting...' : isPremium ? 'Initialize Support' : 'Secure My Spot'}
          </Button>
          
          <div className="flex items-center justify-center gap-3 text-zinc-600 text-xs font-bold uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Encrypted Registration Pulse</span>
          </div>
          
          {subStatus === 'error' && (
            <p className="text-red-400 text-center text-[10px] font-black uppercase tracking-widest">Transmission Failure. Check Link.</p>
          )}
        </form>
      )}
    </GlassCard>
  );
};

export default NewsletterForm;
