import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { airtableService } from '../services/airtableService';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await airtableService.addInquiry(formData);
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        topic: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase"
          >
            Direct Access
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-white mb-6"
          >
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 italic">Conversation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Whether you have a policy suggestion, a community concern, or want to invite Hon. Kelvin to an event, we're listening.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {[
              { icon: MapPin, title: "Constituency Office", content: "Bahati Town, Nakuru County", detail: "Open: Mon-Fri, 8am - 5pm" },
              { icon: Phone, title: "Phone Support", content: "+254 700 000 000", detail: "Direct line for constituents" },
              { icon: Mail, title: "Email Correspondence", content: "office@kelvinmigongo.com", detail: "24-48h response time" }
            ].map((item, i) => (
              <GlassCard key={i} className="p-8 border-white/5 hover:border-emerald-500/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-zinc-300 font-medium mb-1">{item.content}</p>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{item.detail}</p>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Trust Badges */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3 text-zinc-500">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-medium uppercase tracking-wider">Secure End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-medium uppercase tracking-wider">Priority constituent response</span>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 relative"
          >
            {/* Background glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>

            <GlassCard className="p-10 md:p-12 border-white/5 relative z-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="text-emerald-400 w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-4">Message Transmitted</h2>
                  <p className="text-zinc-400 text-lg mb-8">Your message has been logged in our system. The team will review and respond within 48 hours.</p>
                  <Button onClick={() => setStatus('idle')} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="Kelvin"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest">Last Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Migongo"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="citizen@nakuru.go.ke"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest">Topic of Conversation</label>
                    <div className="relative">
                      <select 
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium appearance-none"
                      >
                        <option className="bg-zinc-900">General Inquiry</option>
                        <option className="bg-zinc-900">Education Policy</option>
                        <option className="bg-zinc-900">Infrastructure Project</option>
                        <option className="bg-zinc-900">Constituent Welfare</option>
                        <option className="bg-zinc-900">Event Invitation</option>
                      </select>
                      <MessageSquare className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest">Your Message</label>
                    <textarea 
                      rows={6} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share your thoughts, suggestions, or concerns..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    isLoading={status === 'submitting'}
                    className="w-full py-5 text-lg shadow-xl shadow-emerald-900/10"
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Send Message Official'}
                  </Button>
                  
                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm font-bold">Failed to send message. Please check your connection and try again.</p>
                  )}
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;