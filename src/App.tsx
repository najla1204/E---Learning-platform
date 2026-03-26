import React from 'react';
import { BookOpen, Search, Star, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-indigo-700" />
          <span className="text-2xl font-serif font-bold text-indigo-900">EduNest</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-indigo-600">Courses</a>
          <a href="#" className="hover:text-indigo-600">Categories</a>
          <a href="#" className="hover:text-indigo-600">My Learning</a>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-slate-400 cursor-pointer hover:text-indigo-600" />
          {/* Flaw 6: Login button more prominent than Start Learning */}
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-transform hover:scale-105">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 md:py-32 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Flaw 7: Inconsistent font sizes */}
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
          Elevate Your Mind <br/> With World-Class Education
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Join a community of lifelong learners. Access thousands of courses taught by industry experts and academic leaders from around the globe.
        </p>
        
        {/* Flaw 1: Start Learning button slightly away from hero text */}
        <div className="mt-32"> 
          {/* Flaw 6: Start Learning is less prominent */}
          <button className="border-2 border-slate-300 text-slate-600 px-6 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
            Start Learning <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Flaw 5: Categories section before Featured Courses */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Flaw 7: Inconsistent font sizes */}
          <h2 className="text-3xl font-serif font-bold text-slate-800">Explore Categories</h2>
          <p className="mt-2 text-xs text-slate-500 uppercase tracking-widest">Find your next passion</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {['Computer Science', 'Business & Management', 'Arts & Humanities', 'Data Science', 'Personal Development', 'Language Learning', 'Engineering', 'Health & Medicine'].map((cat, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-slate-50 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="font-medium text-slate-700">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-8 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Flaw 7: Inconsistent font sizes */}
          <h2 className="text-5xl font-serif font-bold text-slate-900">Featured Courses</h2>
          <p className="mt-4 text-2xl text-slate-600">Hand-picked by our academic board</p>
          
          <div className="grid md:grid-cols-3 mt-12">
            
            {/* Card 1 */}
            {/* Flaw 2: Inconsistent size/alignment */}
            {/* Flaw 3: Inconsistent spacing (weird margins) */}
            <div className="mb-4 mr-3 md:mr-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-[420px] flex flex-col">
                <img src="https://picsum.photos/seed/cs101/600/400" alt="Course" className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 line-clamp-2">Introduction to Advanced Algorithms and Data Structures</h3>
                  <p className="text-slate-500 mt-2">Dr. Alan Turing</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-indigo-700">$49.99</span>
                    {/* Flaw 4: Ratings less visible */}
                    <div className="flex items-center gap-1 text-[10px] text-slate-300">
                      <Star className="w-3 h-3 fill-current" />
                      <span>4.9 (2.1k)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            {/* Flaw 2: Inconsistent size/alignment (different height, weird padding) */}
            {/* Flaw 3: Inconsistent spacing */}
            <div className="mt-6 ml-2 md:ml-4 md:mr-2">
              <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden h-[380px] flex flex-col">
                <img src="https://picsum.photos/seed/business/600/400" alt="Course" className="w-full h-40 object-cover" />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800">Modern Business Strategy</h3>
                  <p className="text-slate-600 mt-1 text-sm">Prof. Sarah Jenkins</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold text-indigo-600">$59.99</span>
                    {/* Flaw 4: Ratings less visible */}
                    <div className="flex items-center gap-1 text-[9px] text-slate-200 opacity-60">
                      <Star className="w-2 h-2 fill-current" />
                      <span>4.7 (850)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            {/* Flaw 2: Inconsistent size/alignment */}
            {/* Flaw 3: Inconsistent spacing */}
            <div className="-mt-2 ml-4 md:ml-8">
              <div className="bg-white rounded-3xl shadow-lg border-2 border-slate-50 overflow-hidden h-[450px] flex flex-col">
                <img src="https://picsum.photos/seed/design/600/400" alt="Course" className="w-full h-56 object-cover" />
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900">UI/UX Design Principles</h3>
                  <p className="text-slate-400 mt-3 italic">Elena Rodriguez</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-black text-indigo-800">$39.99</span>
                    {/* Flaw 4: Ratings less visible */}
                    <div className="flex items-center gap-1 text-xs text-slate-100">
                      <Star className="w-4 h-4 fill-slate-200 text-slate-200" />
                      <span className="text-slate-300">4.8 (1.2k)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-20 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Flaw 7: Inconsistent font sizes */}
          <h2 className="text-2xl font-serif">What Our Students Say</h2>
          <p className="mt-6 text-sm opacity-80">Join thousands of satisfied learners.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-indigo-800/50 p-8 rounded-2xl text-left border border-indigo-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold">Student Name {i}</h4>
                    <p className="text-indigo-300 text-sm">Alumni</p>
                  </div>
                </div>
                <p className="text-indigo-100 italic">"EduNest completely transformed my career path. The quality of instruction is unmatched, and the platform is incredibly intuitive."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-indigo-500" />
              <span className="text-xl font-serif font-bold text-white">EduNest</span>
            </div>
            <p className="text-sm">Empowering minds through accessible, world-class education.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Browse Courses</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} EduNest Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
