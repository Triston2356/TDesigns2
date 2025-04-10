import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function BlogWebsite() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdf6f0] text-gray-800 font-serif p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* 🔗 Quick Navigation Links */}
          <nav className="mb-10 flex justify-center space-x-8 text-sm font-medium">
            <Link href="/projects" className="text-pink-600 hover:underline">Projects</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About</Link>
            <Link href="/pricing" className="text-pink-600 hover:underline">Pricing</Link>
            <Link href="/contact" className="text-pink-600 hover:underline">Contact</Link>
          </nav>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Main Blog Content */}
            <div className="md:col-span-3">
              <h1 className="text-5xl font-bold mb-6">The Cozy Creator's Journal</h1>
              <p className="text-gray-600 mb-10">Stories, thoughts, and ideas from passionate creatives.</p>

              {/* Blog Post Preview */}
              <article className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-2">Finding Your Voice as a Writer</h2>
                <p className="text-gray-600 mb-4">
                  Discovering your writing style is a journey, not a destination. Here's how I found mine and how you can explore yours.
                </p>
                <a href="#" className="text-pink-600 hover:underline">Read more →</a>
              </article>

              {/* Author Box */}
              <div className="bg-[#fefaf7] border-t border-gray-300 p-6 rounded-lg flex items-center gap-4 shadow-inner mt-10">
                <img
                  src="/images/author-avatar.jpg"
                  alt="Author"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold">Triston the Creator</h4>
                  <p className="text-sm text-gray-600">
                    Web designer & creative writer. I love sharing lessons from my creative journey and inspiring others to build beautiful things.
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a href="#" className="text-pink-600 text-sm hover:underline">Twitter</a>
                    <a href="#" className="text-pink-600 text-sm hover:underline">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><a href="#" className="hover:text-pink-600">Writing Tips</a></li>
                  <li><a href="#" className="hover:text-pink-600">Design & Aesthetics</a></li>
                  <li><a href="#" className="hover:text-pink-600">Productivity</a></li>
                  <li><a href="#" className="hover:text-pink-600">Creative Mindset</a></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><a href="#" className="hover:underline">10 Ways to Get Inspired</a></li>
                  <li><a href="#" className="hover:underline">Why You Need a Morning Routine</a></li>
                  <li><a href="#" className="hover:underline">Building a Portfolio You Love</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
