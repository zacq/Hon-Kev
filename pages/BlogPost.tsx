import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LATEST_NEWS } from '../constants';
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = LATEST_NEWS.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="pt-20 pb-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold text-gray-900">Article Not Found</h2>
                <Link to="/blog" className="mt-4 inline-block text-campaign-primary hover:underline">
                    Back to Updates
                </Link>
            </div>
        );
    }

    return (
        <article className="pt-8 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-campaign-primary mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Campaign Updates
                </Link>

                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="inline-block px-3 py-1 bg-green-100 text-campaign-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        {post.contentType}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center text-gray-500 text-sm space-x-6">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {post.publishDate}
                        </div>
                        <div className="font-medium text-gray-900">
                            By {post.author}
                        </div>
                    </div>
                </header>

                {/* Featured Media (Image or YouTube) */}
                <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                    {post.youtubeEmbed ? (
                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <iframe
                                className="w-full h-[400px] md:h-[500px]"
                                src={post.youtubeEmbed}
                                title={post.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <img
                            src={post.mediaAssets[0]}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    )}
                </div>

                {/* Content Body */}
                <div className="prose prose-lg prose-green mx-auto text-gray-800">
                    {post.body ? (
                        <div className="whitespace-pre-wrap">{post.body}</div>
                    ) : (
                        <p className="text-xl leading-relaxed">{post.excerpt}</p>
                    )}
                </div>

                {/* Footer / Share */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                    <div className="text-gray-500 text-sm">
                        Tags: <span className="text-gray-900 font-medium">#{post.contentType}</span>
                    </div>
                    <button className="inline-flex items-center text-gray-600 hover:text-campaign-primary font-medium transition-colors">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share this article
                    </button>
                </div>

            </div>
        </article>
    );
};

export default BlogPost;
