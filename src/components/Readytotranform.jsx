// src/components/CTAReady.jsx
import React from "react";

export default function Readytotranform() {
  return (
    <section className="bg-blue-400 text-white py-16 mt-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Learning?
        </h2>
        <p className="mb-8 text-lg">
          Join over 50,000 learners who are already mastering new skills with AI-powered micro-learning.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded ">
            Start learning Free
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded">
            Watch Demo
          </button>
        </div>
        <div className="text-sm">
          <span className="mx-2">30-Day Money-Back Guarantee</span> | 
          <span className="mx-2">24/7 Learning Support</span> | 
          <span className="mx-2">Verified Certificates</span>
        </div>
      </div>
    </section>
  );
}