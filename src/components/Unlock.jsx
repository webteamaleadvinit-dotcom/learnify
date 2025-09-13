import React from 'react';
import { Play, Star } from "lucide-react"; // icons

export default function Unlock() {
  return (
    <div className="px-4 md:px-8 lg:px-5 border-shadow-sm">

      {/* Badge */}
      <section className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-white p-10 rounded-2xl shadow-lg my-10 text-center">
      
        <span className="inline-block bg-white text-indigo-600 text-xs md:text-sm px-4 py-1 rounded-full uppercase mb-4 font-semibold tracking-wide">
          LIMITED TIME OFFER
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock Your Full <span className="text-yellow-300">Learning Potential</span>
        </h2>

        {/* Description */}
        <p className="mb-8 text-base md:text-lg max-w-2xl mx-auto opacity-90">
          Join over 50,000 professionals who’ve accelerated their careers with AI-powered
          personalized learning paths and expert-crafted content.
        </p>

        {/* Stats inside cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-center">
          <div className="bg-white/10 px-6 py-4 rounded-xl">
            <h3 className="font-bold text-2xl md:text-3xl">50,000+</h3>
            <p className="opacity-90 text-sm">Active Learners</p>
          </div>
          <div className="bg-white/10 px-6 py-4 rounded-xl">
            <h3 className="font-bold text-2xl md:text-3xl">1,200+</h3>
            <p className="opacity-90 text-sm">Expert Courses</p>
          </div>
          <div className="bg-white/10 px-6 py-4 rounded-xl">
            <h3 className="font-bold text-2xl md:text-3xl">95%</h3>
            <p className="opacity-90 text-sm">Success Rate</p>
          </div>
        </div>

        {/* Buttons with icons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
          <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-yellow-300 transition">
            <Star size={18} /> Start Premium Trial
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            <Play size={18} /> Watch Demo
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-2 text-xs md:text-sm opacity-80">
          14-day money back guarantee • Cancel anytime • Industry Certified
        </p>
      </section>

    </div>
  );
}