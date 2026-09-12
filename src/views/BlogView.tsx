import React, { useState } from 'react';
import { BLOG_POSTS, SITE_IMAGES, BUSINESS_INFO } from '../data/siteData';
import { BlogPost } from '../types';
import { Clock, BookOpen, ChevronRight, X } from 'lucide-react';

export const BlogView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={SITE_IMAGES.hero}
            alt="Blog Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Event Planning &amp; Catering Guides
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Practical advice on menu planning, guest portioning, marquee coordination, and vendor selection in Islamabad.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-bold bg-red-600 text-white px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                      <Clock className="w-3.5 h-3.5 text-red-600" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-700">
                    <span>Read Guide</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Single Article Modal View */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
              {selectedPost.category} &bull; {selectedPost.readTime}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              {selectedPost.title}
            </h2>

            <div className="mt-4 rounded-xl overflow-hidden h-52 sm:h-64">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed max-h-[40vh] overflow-y-auto pr-2">
              {selectedPost.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-600">
                Prepared by Cater Dine Events Editorial Team
              </span>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Cater Dine, I read your article "${selectedPost.title}" and have questions.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                Discuss with Coordinator
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
