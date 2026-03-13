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

  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-dcp-green/10 border border-dcp-green/20 text-dcp-green text-xs font-bold mb-6 tracking-widest uppercase"
          >
            Direct Access
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-dcp-dark mb-6"
          >
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dcp-green to-dcp-dark italic">Conversation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dcp-muted max-w-2xl mx-auto"
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
              <GlassCard key={i} className="p-8 hover:border-dcp-green/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="bg-dcp-green/10 p-4 rounded-2xl group-hover:bg-dcp-green/20 transition-colors">
                    <item.icon className="h-6 w-6 text-dcp-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dcp-dark mb-1">{item.title}</h3>
                    <p className="text-dcp-sub font-medium mb-1">{item.content}</p>
                    <p className="text-dcp-muted text-xs uppercase tracking-widest font-bold">{item.detail}</p>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Trust Badges */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3 text-dcp-muted">
                <Shield className="w-4 h-4 text-dcp-green" />
                <span className="text-xs font-medium uppercase tracking-wider">Secure End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-3 text-dcp-muted">
                <Clock className="w-4 h-4 text-dcp-green" />
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
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-dcp-green/8 rounded-full blur-[80px]"></div>

            <GlassCard className="p-10 md:p-12 relative z-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-dcp-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="text-dcp-green w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-dcp-dark mb-4">Message Transmitted</h2>
                  <p className="text-dcp-muted text-lg mb-8">Your message has been logged in our system. The team will review and respond within 48 hours.</p>
                  <Button onClick={() => setStatus('idle')} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-dcp-muted uppercase tracking-widest">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="Kelvin"
                        className="w-full bg-dcp-bg border border-dcp-green/20 rounded-2xl px-6 py-4 text-dcp-dark placeholder:text-dcp-muted/50 focus:outline-none focus:ring-2 focus:ring-dcp-green/30 focus:border-dcp-green transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-dcp-muted uppercase tracking-widest">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Migongo"
                        className="w-full bg-dcp-bg border border-dcp-green/20 rounded-2xl px-6 py-4 text-dcp-dark placeholder:text-dcp-muted/50 focus:outline-none focus:ring-2 focus:ring-dcp-green/30 focus:border-dcp-green transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-dcp-muted uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="citizen@nakuru.go.ke"
                      className="w-full bg-dcp-bg border border-dcp-green/20 rounded-2xl px-6 py-4 text-dcp-dark placeholder:text-dcp-muted/50 focus:outline-none focus:ring-2 focus:ring-dcp-green/30 focus:border-dcp-green transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-dcp-muted uppercase tracking-widest">Topic of Conversation</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        className="w-full bg-dcp-bg border border-dcp-green/20 rounded-2xl px-6 py-4 text-dcp-dark focus:outline-none focus:ring-2 focus:ring-dcp-green/30 focus:border-dcp-green transition-all font-medium appearance-none"
                      >
                        <option className="bg-white">General Inquiry</option>
                        <option className="bg-white">Education Policy</option>
                        <option className="bg-white">Infrastructure Project</option>
                        <option className="bg-white">Constituent Welfare</option>
                        <option className="bg-white">Event Invitation</option>
                      </select>
                      <MessageSquare className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-dcp-muted pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-dcp-muted uppercase tracking-widest">Your Message</label>
                    <textarea
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share your thoughts, suggestions, or concerns..."
                      className="w-full bg-dcp-bg border border-dcp-green/20 rounded-2xl px-6 py-4 text-dcp-dark placeholder:text-dcp-muted/50 focus:outline-none focus:ring-2 focus:ring-dcp-green/30 focus:border-dcp-green transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    isLoading={status === 'submitting'}
                    className="w-full py-5 text-lg shadow-xl shadow-dcp-green/10"
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Send Message Official'}
                  </Button>

                  {status === 'error' && (
                    <p className="text-red-500 text-center text-sm font-bold">Failed to send message. Please check your connection and try again.</p>
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
