import React, { useState } from 'react';
import { airtableService } from '../services/airtableService';
import { VolunteerFormData, FormStatus } from '../types';
import { CheckCircle2, Users, Megaphone, Calendar, Heart, Share2, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    availability: 'Weekends',
    county: 'Nakuru',
    rolePreference: 'Grassroots Mobilization'
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    try {
      await airtableService.addVolunteer(formData as any);
      setStatus(FormStatus.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(FormStatus.ERROR);
    }
  };

  const involvementPaths = [
    {
      icon: Users,
      title: "Grassroots Mobilization",
      desc: "Join our network of community leaders and help us organize house-to-house and ward events.",
      color: "emerald"
    },
    {
      icon: Megaphone,
      title: "Digital Advocacy",
      desc: "Help amplify our message online. Perfect for content creators and social media enthusiasts.",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      desc: "Support our town halls, rallies, and community outreach programs across the constituency.",
      color: "amber"
    }
  ];

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 mb-8"
          >
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">You're in the Family!</h2>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Thank you for stepping up, <span className="font-bold text-zinc-900">{formData.fullName.split(' ')[0]}</span>. 
            Our regional coordinator will reach out to you via WhatsApp within 24 hours.
          </p>
          <button
            onClick={() => setStatus(FormStatus.IDLE)}
            className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg"
          >
            Register Another Volunteer
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Content & Inspiration */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-200">
                <Sparkles className="h-3 w-3" /> Movement 2027
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-zinc-900 mb-6">
                Be the <span className="italic text-emerald-600">Catalyst</span> for Change.
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed">
                Our vision for Bahati isn't just a political plan—it's a communal promise. Join the movement that's putting people first.
              </p>
            </motion.div>

            <div className="space-y-6">
              {involvementPaths.map((path, i) => (
                <motion.div 
                  key={path.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-6 p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <path.icon className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">{path.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{path.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-zinc-900 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Heart className="h-24 w-24" />
              </div>
              <p className="text-lg font-medium mb-4 relative z-10">"The best way to find yourself is to lose yourself in the service of others."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500" />
                <div>
                  <div className="font-bold">Hon. Kevin</div>
                  <div className="text-zinc-400 text-xs text-emerald-400">Movement Leader</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-End Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-200 border border-zinc-100 p-8 md:p-12 relative">
              <div className="absolute -top-6 -right-6 h-32 w-32 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-zinc-900/5 rounded-full blur-3xl" />

              <div className="mb-10">
                <h2 className="text-3xl font-bold text-zinc-900">Volunteer Application</h2>
                <p className="text-zinc-400 mt-2">Fill the form below to become part of the progress.</p>
              </div>

              {status === FormStatus.ERROR && (
                <div className="bg-rose-50 border border-rose-100 text-rose-600 p-4 rounded-2xl mb-8 text-sm flex items-center gap-3">
                  <div className="h-2 w-2 bg-rose-500 rounded-full animate-pulse" />
                  Connection timeout. Please try again or check your internet.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Full Identity</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        placeholder="John Doe"
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900"
                      />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Ward / Location</label>
                        <input
                          type="text"
                          required
                          value={formData.county}
                          placeholder="e.g. Bahati Central"
                          onChange={e => setFormData({ ...formData, county: e.target.value })}
                          className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900"
                        />
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        placeholder="john@example.com"
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        placeholder="+254 7..."
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Primary Interest</label>
                      <select
                        value={formData.rolePreference}
                        onChange={e => setFormData({ ...formData, rolePreference: e.target.value })}
                        className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900 appearance-none cursor-pointer"
                      >
                        <option>Grassroots Mobilization</option>
                        <option>Digital Advocacy</option>
                        <option>Event Staffing</option>
                        <option>Professional Services</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Availability</label>
                      <select
                        value={formData.availability}
                        onChange={e => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900 appearance-none cursor-pointer"
                      >
                        <option>Weekends</option>
                        <option>Weekdays</option>
                        <option>Evenings</option>
                        <option>Full-time</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Skills / How can you help?</label>
                    <textarea
                      rows={3}
                      value={formData.skills}
                      placeholder="Share your special skills (e.g., Legal, Design, Photography, Community Organizing)..."
                      onChange={e => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full bg-zinc-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-zinc-900 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === FormStatus.SUBMITTING}
                  className="w-full py-5 px-8 bg-zinc-900 text-white rounded-[1.5rem] font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-3 disabled:opacity-70 group"
                >
                  {status === FormStatus.SUBMITTING ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Syncing with Database...
                    </>
                  ) : (
                    <>
                      Join the Movement
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-zinc-300">
                <Share2 className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Help us share the vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;