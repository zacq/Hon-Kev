import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { ACHIEVEMENTS as MOCK_ACHIEVEMENTS, IMPACT_STATS } from '../constants';
import { airtableService } from '../services/airtableService';
import { Achievement } from '../types';
import { CheckCircle2, MapPin, Calendar, ArrowRight, Loader2, TrendingUp } from 'lucide-react';

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>(MOCK_ACHIEVEMENTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      setLoading(true);
      try {
        const data = await airtableService.getAchievements();
        if (data && data.length > 0) {
          // Merge or replace - replacing for now to show live data
          setAchievements(data as any); 
        }
      } catch (error) {
        console.error("Failed to fetch achievements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  return (
    <div className="pt-24 pb-20 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full">
            Track Record
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Our Achievements
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400">
            Tangible results across every ward. We don't just promise; we deliver a modernized Bahati.
          </p>
        </motion.div>

        {/* Impact Distribution - Data Viz */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-emerald-400 h-6 w-6" />
                  Impact Distribution
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Strategic resource allocation driven by data and community priorities. Every ward is part of the growth story.
                </p>
                <div className="space-y-4">
                  {IMPACT_STATS.map((stat) => (
                    <div key={stat.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-zinc-300">{stat.name}</span>
                        <span className="text-sm font-bold text-emerald-400">{stat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-64 h-64 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={IMPACT_STATS}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {IMPACT_STATS.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.fill}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-emerald-600 to-green-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-emerald-900/20"
          >
            <div>
              <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                98% Project <br />Completion Rate
              </h3>
              <p className="text-emerald-100/80 text-lg">
                Our accountability framework ensures every project is audited and finished on time.
              </p>
            </div>
            <button className="mt-8 group flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors w-fit">
              View Ward Reports
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Achievement List */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Deliverables</h2>
            {loading && <Loader2 className="animate-spin text-emerald-500 h-6 w-6" />}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {achievements.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-all hover:bg-zinc-800/80"
                >
                  <div className="aspect-video w-full mb-6 overflow-hidden rounded-2xl bg-zinc-800">
                    <img 
                      src={item.photos[0] || '/images/progress.png'} 
                      alt={item.projectName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-tighter">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-zinc-500 gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.dateCompleted}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
                    {item.projectName}
                  </h3>

                  <div className="flex items-start gap-2 text-zinc-400 text-sm mb-4">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    {item.location}
                  </div>

                  <div className="bg-zinc-950/50 rounded-2xl p-4 border border-zinc-800 mb-4">
                    <div className="text-2xl font-bold text-emerald-400">
                      {item.impactMetrics}
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-1">
                      Verified Impact
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-all">
                    Show Proof 
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;