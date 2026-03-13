import React from 'react';
import { LATEST_NEWS } from '../constants';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Campaign Updates</h1>
          <p className="mt-4 text-gray-600">Speeches, events, and progress reports from the ground.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LATEST_NEWS.map((post) => (
            <article key={post.id} className="bg-white flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48">
                <img src={post.mediaAssets[0]} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-campaign-primary uppercase">
                  {post.contentType}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.publishDate}
                  </div>
                  <div className="text-gray-400 capitalize">By {post.author}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 flex-1 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-campaign-primary font-medium hover:text-green-800 text-left">
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}

          {/* Placeholder for fetching more content from Airtable */}
          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-8 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <p className="text-gray-500">More updates loading from archive...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;