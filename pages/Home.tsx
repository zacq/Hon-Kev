import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, BookOpen, Hammer, Cpu, Heart,
  Play, ChevronRight, TrendingUp, Home as HomeIcon, Leaf
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { LATEST_NEWS } from '../constants';

// Animated counter hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Individual stat counter card
const StatCard: React.FC<{ icon: React.FC<any>; value: number; suffix: string; label: string; delay: number }> = ({
  icon: Icon, value, suffix, label, delay
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 1800, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="glass-card-light rounded-2xl p-6 flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 rounded-xl bg-dcp-green/10 border border-dcp-green/20 flex items-center justify-center mb-4 group-hover:bg-dcp-green/20 transition-colors">
        <Icon className="w-6 h-6 text-dcp-green" />
      </div>
      <div className="text-4xl font-black text-dcp-dark mb-1">
        {inView ? count.toLocaleString() : 0}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-dcp-muted font-semibold">{label}</div>
    </motion.div>
  );
};

// Featured update card
const UpdateCard: React.FC<{ item: any; index: number }> = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    whileHover={{ y: -8, transition: { duration: 0.25 } }}
    className="glass-card-light rounded-2xl overflow-hidden group cursor-pointer"
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        src={item.mediaAssets?.[0] || '/images/progress.png'}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dcp-dark/70 to-transparent" />
      <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-dcp-green text-white">
        {item.contentType}
      </span>
    </div>
    <div className="p-6">
      <p className="text-xs text-dcp-muted mb-2 uppercase tracking-wider font-medium">{item.publishDate}</p>
      <h3 className="text-lg font-bold text-dcp-dark mb-2 leading-tight group-hover:text-dcp-green transition-colors line-clamp-2">
        {item.title}
      </h3>
      <p className="text-dcp-muted text-sm leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
      <Link
        to={`/blog/${item.id}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-dcp-green hover:gap-3 transition-all"
      >
        Read more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  const visionPillars = [
    { icon: BookOpen, title: 'Education', desc: 'Modern schools, digital hubs, and bursary reforms for every child in Bahati.' },
    { icon: Leaf, title: 'Agriculture', desc: 'Tech-driven farming, cold storage, and guaranteed market linkages for our farmers.' },
    { icon: Users, title: 'Youth Employment', desc: 'Vocational training, SME grants, and digital skills creating 10,000+ jobs.' },
    { icon: Cpu, title: 'Infrastructure', desc: 'Rural roads, clean water, and full electrification connecting every ward.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

      {/* ── SECTION 1: Hero (2-column) ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Ambient background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-dcp-green/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-dcp-pale/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Headline + CTAs */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-dcp-green/10 border border-dcp-green/20 text-dcp-green text-xs font-bold tracking-[0.25em] uppercase mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dcp-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-dcp-green" />
                </span>
                Transforming Nakuru County
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                className="text-5xl md:text-7xl font-serif font-black text-dcp-dark mb-6 leading-[1.05] tracking-tight"
              >
                Building a <br />
                Stronger{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dcp-green to-dcp-dark italic">
                  Bahati
                </span>{' '}
                Together
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                className="text-lg text-dcp-sub mb-10 max-w-lg leading-relaxed"
              >
                Hon. Kelvin Migongo — Academician, Philanthropist, and Servant Leader — is driving
                transparent governance, sustainable development, and community-first policies.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 mb-14"
              >
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dcp-green hover:bg-dcp-dark text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-dcp-green/20 text-base"
                >
                  Join the Movement <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/vision"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dcp-green/20 bg-dcp-bg hover:bg-dcp-soft text-dcp-sub font-bold rounded-2xl transition-all duration-200 text-base"
                >
                  Explore Roadmap
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-8"
              >
                {[['25K+', 'Supporters'], ['420+', 'Projects'], ['100%', 'Accountability']].map(([val, lbl], i) => (
                  <React.Fragment key={lbl}>
                    {i > 0 && <div className="w-px h-8 bg-dcp-green/15" />}
                    <div>
                      <div className="text-2xl font-black text-dcp-dark">{val}</div>
                      <div className="text-[10px] uppercase tracking-widest text-dcp-muted font-bold">{lbl}</div>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* Right: Campaign image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-dcp-green/15 to-dcp-pale/20 blur-2xl scale-110" />
              <div className="relative rounded-[40px] overflow-hidden border border-dcp-green/20 shadow-2xl shadow-dcp-green/10">
                <img
                  src="/images/Landing.png"
                  alt="Hon. Kelvin Migongo"
                  className="w-full h-[620px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dcp-dark/30 via-transparent to-transparent" />

                {/* Floating glass stat pill */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="absolute bottom-8 left-8 glass-card-light rounded-2xl px-5 py-4"
                >
                  <div className="text-2xl font-black text-dcp-green">5,000+</div>
                  <div className="text-[10px] uppercase tracking-widest text-dcp-sub font-bold">Youths Empowered</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-8 right-8 glass-card-light rounded-2xl px-5 py-4"
                >
                  <div className="text-2xl font-black text-dcp-green">98%</div>
                  <div className="text-[10px] uppercase tracking-widest text-dcp-sub font-bold">Project Completion</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-dcp-green to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-dcp-green" />
        </motion.div>
      </section>

      {/* ── SECTION 2: Impact Statistics ─────────────────────────────── */}
      <section className="py-24 relative bg-dcp-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              Impact by Numbers
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-dcp-dark">
              Measurable Change, Real Lives
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Users} value={50000} suffix="+" label="Communities Reached" delay={0} />
            <StatCard icon={BookOpen} value={5000} suffix="+" label="Youth Empowered" delay={0.1} />
            <StatCard icon={TrendingUp} value={420} suffix="+" label="Projects Initiated" delay={0.2} />
            <StatCard icon={HomeIcon} value={30} suffix="+" label="Schools Supported" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Featured Updates ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex items-end justify-between mb-14">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
                Latest Updates
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-dcp-dark">
                What We're Delivering
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-dcp-green hover:gap-3 transition-all"
            >
              All Updates <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {LATEST_NEWS.map((item, i) => (
              <UpdateCard key={item.id} item={item} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-dcp-green">
              View all updates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Vision Preview ─────────────────────────────────── */}
      <section className="py-24 bg-dcp-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              The Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-dcp-dark mb-4">
              Four Pillars of Progress
            </h2>
            <p className="text-dcp-muted max-w-2xl mx-auto text-lg">
              A bold 5-point policy plan addressing every dimension of Bahati's growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="glass-card-light rounded-2xl p-6 group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                  className="w-12 h-12 rounded-xl bg-dcp-green/10 border border-dcp-green/20 flex items-center justify-center mb-5 group-hover:bg-dcp-green/20 transition-colors"
                >
                  <pillar.icon className="w-6 h-6 text-dcp-green" />
                </motion.div>
                <h3 className="text-lg font-bold text-dcp-dark mb-2">{pillar.title}</h3>
                <p className="text-dcp-muted text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-10 text-center">
            <Link
              to="/vision"
              className="inline-flex items-center gap-2 text-sm font-bold text-dcp-green hover:gap-3 transition-all"
            >
              Read the Full Manifesto <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: Media Highlight ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              Media Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-dcp-dark">
              Watch & Engage
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-card-light rounded-3xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-dcp-bg group">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <img
                  src="/images/progress.png"
                  alt="Campaign Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-dcp-dark/50" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-dcp-green flex items-center justify-center shadow-2xl shadow-dcp-dark/30 hover:bg-dcp-dark transition-colors"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.button>
                <p className="relative z-10 text-white font-bold text-lg">
                  Hon. Migongo at the People's Forum — Bahati 2026
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-8 text-center">
            <Link
              to="/media"
              className="inline-flex items-center gap-2 text-sm font-bold text-dcp-green hover:gap-3 transition-all"
            >
              View Full Media Gallery <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: Get Involved CTA ──────────────────────────────── */}
      <section className="py-24 bg-dcp-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-cta-green rounded-3xl p-10 md:p-16 relative overflow-hidden text-center"
          >
            {/* Glow blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-dcp-green/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-dcp-pale/30 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
                Join the Movement
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-dcp-dark mb-6 leading-tight">
                Be the Change <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dcp-green to-dcp-dark italic">
                  Bahati Needs
                </span>
              </h2>
              <p className="text-dcp-sub text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you volunteer your time, support the campaign, or simply spread the word —
                every action moves Bahati forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dcp-green hover:bg-dcp-dark text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-dcp-green/20"
                >
                  <Users className="w-5 h-5" /> Volunteer
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dcp-green/40 bg-dcp-green/10 hover:bg-dcp-green/20 text-dcp-green font-bold rounded-2xl transition-all duration-200"
                >
                  <Heart className="w-5 h-5" /> Support the Vision
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dcp-green/20 bg-white/60 hover:bg-white text-dcp-sub font-bold rounded-2xl transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
