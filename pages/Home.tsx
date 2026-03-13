import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Layout, Activity, Star, Shield, Zap, Globe, TrendingUp, Award, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import NewsletterForm from '../components/NewsletterForm';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/premium_kenyan_leader_portrait_1773388293957.png"
            alt="Hon. Kelvin Migongo"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60"></div>
          
          {/* Static Design Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-10 tracking-[0.3em] uppercase backdrop-blur-xl">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Transforming Nakuru County
              </div>
              
              <h1 className="text-7xl md:text-9xl font-serif font-black text-white mb-10 leading-[0.9] tracking-tighter">
                Lead with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 italic">Vision.</span>
              </h1>
              
              <p className="text-2xl text-zinc-300 mb-14 max-w-2xl leading-relaxed font-medium opacity-90">
                Hon. Kelvin Migongo is redefining governance through radical transparency, sustainable innovation, and community-first leadership. 
                <span className="text-emerald-500 block mt-2 font-bold">The future is now.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl shadow-emerald-900/40 relative group overflow-hidden">
                  <Link to="/get-involved" className="flex items-center relative z-10">
                    Join the Movement
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </motion.span>
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
                <Link to="/vision" className="inline-flex items-center px-12 py-6 text-xl border border-white/10 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all font-bold backdrop-blur-md">
                  Explore Roadmap
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-20 flex items-center gap-8 opacity-50">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">25K+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Total Supporters</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">420+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Policy Projects</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">100%</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Accountability</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4"
        >
          <div className="w-px h-24 bg-gradient-to-b from-white/20 via-emerald-500 to-transparent"></div>
          <span className="text-[10px] vertical-text uppercase tracking-[0.5em] text-zinc-500 font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll to Explore</span>
        </motion.div>
      </section>

      {/* Vision 2030 Feature Section */}
      <section className="py-40 relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px]"></div>
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
                <img 
                  src="/nakuru_vision_2030_sustainable_city_sketch_1773388319343.png" 
                  alt="Nakuru Vision 2030" 
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                  <div className="text-4xl font-serif font-black text-white mb-2">Nakuru 2030</div>
                  <div className="text-emerald-400 font-bold tracking-widest uppercase text-xs">The Digital Frontier</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-10">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                A Radical Blueprint
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-[1.1]">
                Sustainable <br />
                Urban <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Evolution.</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                Our vision for 2030 isn't just about infrastructure; it's about building an ecosystem where technology serves the people. We're implementing smart grids, digital public services, and green transit systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Smart Healthcare", desc: "Digital records and telemedicine for every village." },
                  { title: "Agri-Tech Hubs", desc: "Empowering farmers with satellite-driven data." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all">
                    <h3 className="text-white font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/vision" className="inline-flex items-center gap-4 text-emerald-400 font-black tracking-widest uppercase text-sm group hover:gap-6 transition-all">
                Read the Whitepaper <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Carousel / Section */}
      <section className="py-40 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8">Four Pillars of Progress</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Globe, title: "Global Scale", desc: "Connecting local talent to the global digital economy." },
              { icon: Shield, title: "Total Integrity", desc: "Block-chain verifiable budget tracking for all projects." },
              { icon: Zap, title: "Rapid Execution", desc: "Halving delivery times for essential public services." },
              { icon: Users, title: "Inclusive Power", desc: "Real-time voting on local ward initiatives via mobile." }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500 rotate-6 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  <pillar.icon className="w-10 h-10 text-emerald-400 group-hover:text-zinc-950 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[150px] rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="space-y-12"
          >
            <div className="text-emerald-500 text-8xl font-serif opacity-30 leading-none">“</div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight font-light">
              Leadership is about creating an environment where <span className="text-emerald-400 font-bold not-italic">every dreamer</span> in Nakuru has a realistic path to achievement.
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="text-xl font-serif font-bold text-white tracking-widest uppercase">Hon. Kelvin Migongo</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-black">Member of Parliament | Nakuru</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-emerald-500 relative overflow-hidden group">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-zinc-950">
              <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
                Ready to <br />Transform?
              </h2>
              <p className="text-2xl font-medium opacity-80 mb-12 max-w-lg leading-relaxed">
                We are building the most sophisticated political grassroots movement in Kenya. Your talent is required.
              </p>
              <div className="flex items-center gap-12">
                <Button variant="outline" className="border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white px-10 py-5 text-xl font-black">
                  <Link to="/get-involved">Join Volunteer Force</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-zinc-950 p-10 md:p-16 rounded-[48px] shadow-2xl">
              <div className="mb-10">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Weekly Briefing</h3>
                <p className="text-zinc-500 font-medium">Get exclusive updates on our policy wins and upcoming townhalls.</p>
              </div>
              <NewsletterForm variant="premium" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;