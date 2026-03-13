import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Camera, FileText, Play, Newspaper, ChevronRight } from 'lucide-react';
import { submitMediaInquiry } from '../services/mockDatabase';

type Tab = 'photos' | 'videos' | 'press';

const photos = [
  { src: '/images/About.png', caption: 'Official Portrait', id: 1 },
  { src: '/images/Landing.png', caption: 'Campaign Rally', id: 2 },
  { src: '/images/progress.png', caption: 'Community Project', id: 3 },
  { src: '/images/masomo-bora.png', caption: 'Youth Education Drive', id: 4 },
  { src: '/images/budget.png', caption: 'Budget Review Session', id: 5 },
  { src: '/images/Saf.png', caption: 'Constituency Visit', id: 6 },
];

const videos = [
  { thumb: '/images/progress.png', title: "People's Forum — Bahati 2026", duration: '14:22' },
  { thumb: '/images/masomo-bora.png', title: 'Youth Digital Hub Launch', duration: '8:45' },
  { thumb: '/images/Landing.png', title: 'Manifesto Presentation — Nakuru', duration: '21:03' },
];

const pressItems = [
  { outlet: 'The Standard', headline: 'Migongo unveils bold tech agenda for Bahati', date: 'March 10, 2026', type: 'Feature' },
  { outlet: 'Daily Nation', headline: 'Clean water project transforms 500 families in Nakuru', date: 'March 7, 2026', type: 'News' },
  { outlet: 'NTV Kenya', headline: 'Interview: Youth employment and the Bahati model', date: 'Feb 28, 2026', type: 'TV' },
  { outlet: 'Citizen TV', headline: 'Bahati MP candidate tops transparency index', date: 'Feb 20, 2026', type: 'TV' },
];

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('photos');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const handleMediaInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    submitMediaInquiry({ note: 'Form submitted' });
    alert('Inquiry sent to press team.');
  };

  const tabs: { id: Tab; label: string; icon: React.FC<any> }[] = [
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'videos', label: 'Videos', icon: Play },
    { id: 'press', label: 'Press', icon: Newspaper },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero Header ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-dcp-green/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-dcp-green uppercase bg-dcp-green/10 border border-dcp-green/20 rounded-full">
              Media Center
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h1 className="text-5xl md:text-6xl font-serif font-black text-dcp-dark leading-tight">
                Press &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dcp-green to-dcp-dark italic">
                  Media
                </span>
              </h1>
              {/* Press kit download */}
              <div className="flex gap-3 flex-wrap">
                <button className="inline-flex items-center gap-2 px-5 py-3 border border-dcp-green/20 bg-dcp-bg hover:bg-dcp-soft text-dcp-sub text-sm font-semibold rounded-xl transition-colors">
                  <Download className="w-4 h-4" /> Biography (PDF)
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-3 border border-dcp-green/20 bg-dcp-bg hover:bg-dcp-soft text-dcp-sub text-sm font-semibold rounded-xl transition-colors">
                  <Download className="w-4 h-4" /> Official Logos (ZIP)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs ─────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: Gallery content */}
            <div className="lg:col-span-2">
              {/* Tab nav */}
              <div className="flex gap-2 mb-8 p-1 glass-card-light rounded-2xl w-fit">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'text-white' : 'text-dcp-sub hover:text-dcp-dark'}`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 bg-dcp-green rounded-xl"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Photos tab */}
                {activeTab === 'photos' && (
                  <motion.div
                    key="photos"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  >
                    {photos.map((photo, i) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square"
                        onClick={() => setLightbox(photo.src)}
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-dcp-dark/0 group-hover:bg-dcp-dark/50 transition-colors flex items-end p-4">
                          <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <p className="text-white text-xs font-semibold">{photo.caption}</p>
                            <button className="mt-1 inline-flex items-center gap-1 text-dcp-pale text-xs font-bold">
                              <Download className="w-3 h-3" /> Download
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Videos tab */}
                {activeTab === 'videos' && (
                  <motion.div
                    key="videos"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-5"
                  >
                    {videos.map((vid, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card-light rounded-2xl overflow-hidden flex flex-col sm:flex-row group cursor-pointer"
                      >
                        <div className="relative sm:w-48 aspect-video sm:aspect-auto flex-shrink-0 overflow-hidden">
                          <img
                            src={vid.thumb}
                            alt={vid.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-dcp-dark/40 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-dcp-green flex items-center justify-center shadow-lg">
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 text-[10px] font-bold text-white bg-dcp-dark/70 px-2 py-0.5 rounded">
                            {vid.duration}
                          </span>
                        </div>
                        <div className="p-5 flex flex-col justify-center">
                          <h3 className="text-dcp-dark font-bold mb-1 group-hover:text-dcp-green transition-colors">
                            {vid.title}
                          </h3>
                          <p className="text-dcp-muted text-sm">Campaign Video</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Press tab */}
                {activeTab === 'press' && (
                  <motion.div
                    key="press"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {pressItems.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="glass-card-light rounded-2xl p-6 flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-dcp-green uppercase tracking-wider">{item.outlet}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-dcp-bg text-dcp-muted font-semibold border border-dcp-green/15">{item.type}</span>
                          </div>
                          <h3 className="text-dcp-dark font-bold group-hover:text-dcp-green transition-colors mb-1">
                            {item.headline}
                          </h3>
                          <p className="text-dcp-muted text-xs">{item.date}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-dcp-muted group-hover:text-dcp-green group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Media inquiry form */}
            <div className="lg:col-span-1">
              <div className="glass-card-light rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-dcp-green/10 border border-dcp-green/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-dcp-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dcp-dark">Media Inquiries</h3>
                    <p className="text-xs text-dcp-muted">Press &amp; interview requests</p>
                  </div>
                </div>
                <form onSubmit={handleMediaInquiry} className="space-y-4">
                  {[
                    { label: 'Media House / Outlet', type: 'text' },
                    { label: 'Contact Name', type: 'text' },
                    { label: 'Email', type: 'email' },
                  ].map(field => (
                    <div key={field.label}>
                      <label className="block text-xs font-semibold text-dcp-muted mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        className="w-full bg-white border border-dcp-green/20 focus:border-dcp-green focus:ring-1 focus:ring-dcp-green rounded-xl px-4 py-2.5 text-dcp-dark text-sm outline-none transition-colors placeholder:text-dcp-muted/50"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-dcp-muted mb-1.5">Deadline (if applicable)</label>
                    <input
                      type="date"
                      className="w-full bg-white border border-dcp-green/20 focus:border-dcp-green focus:ring-1 focus:ring-dcp-green rounded-xl px-4 py-2.5 text-dcp-dark text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dcp-muted mb-1.5">Inquiry Details</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-white border border-dcp-green/20 focus:border-dcp-green focus:ring-1 focus:ring-dcp-green rounded-xl px-4 py-2.5 text-dcp-dark text-sm outline-none transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-dcp-green hover:bg-dcp-dark text-white font-bold rounded-xl transition-colors"
                  >
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dcp-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Full size"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Media;
