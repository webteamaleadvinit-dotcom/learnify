// src/components/CTAReady.jsx
import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function Readytotranform() {
  return (
    <section className="bg-blue-400 text-white py-10 mt-10">
      <div className="container mx-auto text-center px-2">
        <h2 className="text-2xl font-bold mb-2 mt-2">
          Ready to Transform Your Learning?
        </h2>
        <p className="mb-8 text-lg">
          Join over 50,000 learners who are already mastering new skills with AI-powered micro-learning.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl ">
            Start learning Free
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl">
            Watch Demo
          </button>
        </div>
        
        <div className="font-semibold text-black flex justify-center gap-4 mb-6">
            <div className="flex aligns-center gap-2">
              <AiOutlineSafetyCertificate className="text-green-200" size={20}/>
              <p>30-Day Money-Back Guarantee</p>
            </div>

            <div className="flex aligns-center gap-2">
              <BsFillPersonCheckFill className="text-green-200" size={20}/>
              <p>24/7 Learning Support</p>
            </div>

            <div className="flex aligns-center gap-2">
              <LiaCertificateSolid className="text-green-200" size={20}/>
              <p>Verified Certificates</p>
            </div>
        </div>
      </div>
    </section>
  );
}