import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, TrendingUp, Heart } from 'lucide-react';

const timeline = [
  {
    year: '2010',
    title: 'Grassroots Advocacy',
    desc: 'Led community initiatives focused on youth mentorship, social welfare, and constituency mobilization.',
    icon: Heart,
    active: true,
  },
  {
    year: '2016',
    title: 'Regional Development Strategist',
    desc: 'Consulted on major infrastructure and urban development projects across Nakuru County.',
    icon: TrendingUp,
    active: true,
  },
  {
    year: '2022',
    title: 'Elected Representative',
    desc: 'Elected to Parliament with a mandate to champion transparency, economic growth, and youth empowerment.',
    icon: Award,
    active: true,
  },
  {
    year: 'Today',
    title: 'Building the Future',
    desc: 'Delivering 420+ projects across Bahati and driving the community-first agenda forward every day.',
    icon: BookOpen,
    active: false,
  },
];

const values = [
  { icon: Users, title: 'People First', desc: 'Every policy decision begins and ends with the welfare of Bahati residents.' },
  { icon: Award, title: 'Integrity', desc: 'Transparent governance with publicly audited budgets and project tracking.' },
  { icon: TrendingUp, title: 'Results-Driven', desc: 'A track record of 98% project completion — promises kept, not deferred.' },
  { icon: BookOpen, title: 'Education', desc: 'Lifelong advocate for accessible, quality education for every child in Bahati.' },
];

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero Header ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dcp-green/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dcp-pale/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
                  The Leader
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-black text-dcp-dark mb-6 leading-tight">
                  About{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dcp-green to-dcp-dark italic">
                    Kelvin Migongo
                  </span>
                </h1>
                <p className="text-xl text-dcp-sub mb-8 leading-relaxed">
                  Academician. Philanthropist. Servant Leader. A visionary committed to sustainable
                  development and progress for every resident of Bahati.
                </p>
              </motion.div>

              {/* Bio glass card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="glass-card-light rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-dcp-dark mb-4">A Visionary Leader for the Modern Era</h3>
                <p className="text-dcp-muted leading-relaxed mb-4">
                  Hon. Kelvin Migongo's journey is defined by a commitment to service and transformative
                  leadership. With a background in strategic management and community advocacy, he has
                  dedicated his career to empowering citizens and driving sustainable development.
                </p>
                <p className="text-dcp-muted leading-relaxed mb-6">
                  As a seasoned professional and strategist, Kelvin brings a fresh perspective to
                  governance — focusing on meritocracy, transparency, and economic inclusivity for all.
                </p>
                <blockquote className="border-l-4 border-dcp-green pl-5 italic text-dcp-sub text-lg">
                  "True leadership is measured by the progress of the most vulnerable in our society."
                </blockquote>
              </motion.div>
            </div>

            {/* Right: Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-dcp-green/12 to-dcp-pale/20 blur-2xl scale-110" />
              <div className="relative rounded-[40px] overflow-hidden border border-dcp-green/20 shadow-2xl shadow-dcp-green/10">
                <img
                  src="/images/About.png"
                  alt="Hon. Kelvin Migongo"
                  className="w-full h-[580px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dcp-dark/25 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values / Philosophy ──────────────────────────────────── */}
      <section className="py-24 bg-dcp-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              Leadership Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-dcp-dark">Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card-light rounded-2xl p-6 group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                  className="w-12 h-12 rounded-xl bg-dcp-green/10 border border-dcp-green/20 flex items-center justify-center mb-5 group-hover:bg-dcp-green/20 transition-colors"
                >
                  <val.icon className="w-6 h-6 text-dcp-green" />
                </motion.div>
                <h3 className="text-lg font-bold text-dcp-dark mb-2">{val.title}</h3>
                <p className="text-dcp-muted text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              The Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-dcp-dark">Leadership Timeline</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-dcp-green/60 via-dcp-green/30 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                  className="relative flex gap-8 pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-5 w-12 h-12 rounded-xl flex items-center justify-center border ${item.active ? 'bg-dcp-green/20 border-dcp-green/40' : 'bg-dcp-bg border-dcp-green/20'}`}>
                    <item.icon className={`w-5 h-5 ${item.active ? 'text-dcp-green' : 'text-dcp-muted'}`} />
                  </div>

                  {/* Content */}
                  <div className="glass-card-light rounded-2xl p-6 flex-1">
                    <div className={`text-xs font-black uppercase tracking-widest mb-2 ${item.active ? 'text-dcp-green' : 'text-dcp-muted'}`}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-dcp-dark mb-2">{item.title}</h3>
                    <p className="text-dcp-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
