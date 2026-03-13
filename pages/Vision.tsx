import React from 'react';
import { motion } from 'framer-motion';
import { POLICIES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Download, CheckCircle } from 'lucide-react';

const Vision: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero Header ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-dcp-green/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              The Blueprint
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-dcp-dark mb-6 leading-tight">
              Vision &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dcp-green to-dcp-dark italic">
                Policy
              </span>
            </h1>
            <p className="text-xl text-dcp-muted max-w-2xl mx-auto leading-relaxed">
              The 5-Point Policy Plan — a bold blueprint for economic transformation,
              sustainable development, and inclusive growth across Bahati.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Policy Cards Grid ────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {POLICIES.map((policy, i) => {
              const IconComponent = (LucideIcons as any)[policy.iconName] || LucideIcons.FileText;
              return (
                <motion.div
                  key={policy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  className="glass-card-light rounded-2xl p-8 group"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-dcp-green/10 border border-dcp-green/20 flex items-center justify-center group-hover:bg-dcp-green/20 transition-colors"
                    >
                      <IconComponent className="w-7 h-7 text-dcp-green" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-dcp-dark mb-1 group-hover:text-dcp-green transition-colors">
                        {policy.policyArea}
                      </h3>
                      <p className="text-xs font-semibold text-dcp-green uppercase tracking-wider mb-3">
                        Focus: {policy.targetAudience}
                      </p>
                      <p className="text-dcp-muted leading-relaxed mb-5 text-sm">
                        {policy.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {policy.keyInitiatives.map(item => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-dcp-green/10 border border-dcp-green/20 text-dcp-green text-xs font-semibold rounded-full"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Manifesto CTA ────────────────────────────────────────── */}
      <section className="py-24 bg-dcp-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="glass-cta-green rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-dcp-green/10 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
                Full Manifesto
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-dcp-dark mb-4">
                Read the Complete Policy Document
              </h3>
              <p className="text-dcp-muted mb-8 max-w-xl mx-auto leading-relaxed">
                Download the 50-page policy document outlining detailed budget allocations,
                timelines, and implementation strategies for every initiative.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-dcp-green hover:bg-dcp-dark text-white font-bold rounded-2xl transition-colors shadow-lg shadow-dcp-green/20"
              >
                <Download className="w-5 h-5" /> Download PDF (5MB)
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
