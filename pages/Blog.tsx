import React, { useState, useEffect } from 'react';
import { LATEST_NEWS as MOCK_NEWS } from '../constants';
import { airtableService } from '../services/airtableService';
import { Calendar, Tag, ArrowRight, User, Loader2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>(MOCK_NEWS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const data = await airtableService.getLatestNews();
        if (data && data.length > 0) {
          setPosts(data as any);
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="pt-24 pb-20 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-4">
              Bahati <span className="italic text-emerald-600 underline decoration-zinc-200">Dispatch</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-md">
              Official updates, community stories, and the roadmap for our constituency.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-400"
          >
            Published Weekly <div className="h-1 w-12 bg-zinc-200" /> Ground Updates
          </motion.div>
        </div>

        {/* Featured Post - Hero */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-zinc-200 border border-zinc-100 group"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 relative h-80 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.mediaAssets[0]} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-8 left-8 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  Featured Article
                </div>
              </div>
              <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-emerald-600 text-sm font-bold mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.publishDate}
                  </div>
                  <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-zinc-500 mb-8 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link 
                  to={`/blog/${featuredPost.id}`} 
                  className="group/btn flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold w-fit hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-900/10"
                >
                  Read Full Story
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Grid */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              Recent Archives
            </h2>
            {loading && <Loader2 className="animate-spin text-emerald-500 h-6 w-6" />}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {otherPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col group"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-zinc-200 border border-zinc-100 shadow-sm">
                    <img 
                      src={post.mediaAssets[0]} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold text-zinc-900 uppercase tracking-widest border border-zinc-200">
                      {post.contentType}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold mb-4">
                    <span>{post.publishDate}</span>
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <span>{post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:text-emerald-600 transition-all mt-auto"
                  >
                    Continue Reading
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
            
            {!loading && otherPosts.length === 0 && (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-200 rounded-[2.5rem]">
                <p className="text-zinc-400 font-medium">No archived posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;