import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { ACHIEVEMENTS as MOCK_ACHIEVEMENTS, IMPACT_STATS } from '../constants';
import { airtableService } from '../services/airtableService';
import { Achievement } from '../types';
import { CheckCircle2, MapPin, Calendar, ArrowRight, Loader2, TrendingUp } from 'lucide-react';

const CATEGORIES = ['All', 'Education', 'Agriculture', 'Healthcare', 'Infrastructure', 'Youth', 'Community'];

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>(MOCK_ACHIEVEMENTS);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

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
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
            Track Record
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-dcp-dark">
            Our Achievements
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-dcp-muted">
            Tangible results across every ward. We don't just promise; we deliver a modernized Bahati.
          </p>
        </motion.div>

        {/* Impact Distribution - Data Viz */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card-light rounded-3xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dcp-dark mb-4 flex items-center gap-2">
                  <TrendingUp className="text-dcp-green h-6 w-6" />
                  Impact Distribution
                </h3>
                <p className="text-dcp-muted mb-8 leading-relaxed">
                  Strategic resource allocation driven by data and community priorities. Every ward is part of the growth story.
                </p>
                <div className="space-y-4">
                  {IMPACT_STATS.map((stat) => (
                    <div key={stat.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-dcp-sub">{stat.name}</span>
                        <span className="text-sm font-bold text-dcp-green">{stat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-dcp-pale/40 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-dcp-green"
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
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid rgba(0,128,0,0.15)', borderRadius: '8px' }}
                      itemStyle={{ color: '#0F2E0F' }}
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
            className="lg:col-span-2 bg-gradient-to-br from-dcp-green to-dcp-dark rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-dcp-green/20"
          >
            <div>
              <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                98% Project <br />Completion Rate
              </h3>
              <p className="text-green-100/80 text-lg">
                Our accountability framework ensures every project is audited and finished on time.
              </p>
            </div>
            <button className="mt-8 group flex items-center gap-2 bg-white text-dcp-dark px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors w-fit">
              View Ward Reports
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Achievement List */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-dcp-dark">Latest Deliverables</h2>
            {loading && <Loader2 className="animate-spin text-dcp-green h-6 w-6" />}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-dcp-green text-white shadow-lg shadow-dcp-green/20'
                    : 'bg-dcp-bg text-dcp-muted hover:bg-dcp-pale/40 hover:text-dcp-dark border border-dcp-green/15'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {achievements.filter(a => activeFilter === 'All' || a.category === activeFilter).map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative glass-card-light rounded-3xl p-6 hover:border-dcp-green/30 transition-all"
                >
                  <div className="aspect-video w-full mb-6 overflow-hidden rounded-2xl bg-dcp-bg">
                    <img 
                      src={item.photos[0] || '/images/progress.png'} 
                      alt={item.projectName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-dcp-green/10 text-dcp-green text-xs font-bold rounded-full uppercase tracking-tighter">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-dcp-muted gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.dateCompleted}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-dcp-dark mb-3 group-hover:text-dcp-green transition-colors leading-tight">
                    {item.projectName}
                  </h3>

                  <div className="flex items-start gap-2 text-dcp-muted text-sm mb-4">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    {item.location}
                  </div>

                  <div className="bg-dcp-bg rounded-2xl p-4 border border-dcp-green/10 mb-4">
                    <div className="text-2xl font-bold text-dcp-green">
                      {item.impactMetrics}
                    </div>
                    <div className="text-[10px] text-dcp-muted uppercase font-bold tracking-widest mt-1">
                      Verified Impact
                    </div>
                  </div>

                  <p className="text-dcp-muted text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-bold text-dcp-sub group-hover:text-dcp-green transition-all">
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