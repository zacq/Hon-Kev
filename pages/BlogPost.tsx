import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LATEST_NEWS } from '../constants';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = LATEST_NEWS.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen bg-white">
                <h2 className="text-2xl font-bold text-dcp-dark mb-4">Article Not Found</h2>
                <Link to="/blog" className="text-dcp-green hover:text-dcp-dark font-semibold">
                    Back to Updates
                </Link>
            </div>
        );
    }

    return (
        <article className="pt-28 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/blog" className="inline-flex items-center gap-2 text-dcp-muted hover:text-dcp-green mb-10 transition-colors font-semibold text-sm">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Updates
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-10 text-center"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-dcp-green bg-dcp-green/10 border border-dcp-green/20 rounded-full">
                        {post.contentType}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-black text-dcp-dark leading-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center text-dcp-muted text-sm gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-dcp-green" />
                            {post.publishDate}
                        </div>
                        <div className="font-semibold text-dcp-sub">
                            By {post.author}
                        </div>
                    </div>
                </motion.header>

                {/* Featured Media */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 rounded-2xl overflow-hidden border border-dcp-green/15"
                >
                    {post.youtubeEmbed ? (
                        <iframe
                            className="w-full h-[400px] md:h-[500px]"
                            src={post.youtubeEmbed}
                            title={post.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <img
                            src={post.mediaAssets[0]}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    )}
                </motion.div>

                {/* Content Body */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="prose prose-lg prose-green mx-auto"
                >
                    {post.body ? (
                        <div className="whitespace-pre-wrap text-dcp-sub leading-relaxed">{post.body}</div>
                    ) : (
                        <p className="text-xl leading-relaxed text-dcp-sub">{post.excerpt}</p>
                    )}
                </motion.div>

                {/* Footer / Share */}
                <div className="mt-12 pt-8 border-t border-dcp-green/10 flex justify-between items-center">
                    <div className="text-dcp-muted text-sm">
                        Tags: <span className="text-dcp-green font-semibold">#{post.contentType}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-dcp-muted hover:text-dcp-green font-semibold transition-colors text-sm">
                        <Share2 className="h-4 w-4" />
                        Share this article
                    </button>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
