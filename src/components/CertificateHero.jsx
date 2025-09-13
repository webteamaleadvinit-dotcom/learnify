import React from "react";
import { BadgeCheck, Clock, Share2 } from "lucide-react"; // Lucide icons
import achievement from "../assets/achievement.jpeg"; 

const achievements = [
  {
    title: "Certificates Earned",
    value: 12,
    icon: <BadgeCheck size={40} className="text-purple-600" />,
  },
  {
    title: "Total Learning Hours",
    value: 247,
    icon: <Clock size={40} className="text-green-500" />,
  },
  {
    title: "Certificates Shared",
    value: 8,
    icon: <Share2 size={40} className="text-indigo-400" />,
  },
];

export default function CertificateHero() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="w-full h-60 sm:h-72 md:h-80 bg-cover bg-center flex flex-col justify-center px-6 sm:px-10"
        style={{
          backgroundImage: `url(${achievement})`,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
          Your Learning <span className="text-blue-600">Achievements</span>
        </h1>
        <p className="mt-2 text-gray-700 max-w-xl text-base sm:text-lg md:text-xl font-medium">
          Showcase your expertise with verified certificates from your completed courses
        </p>
      </div>

      {/* Achievement Boxes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 py-10 px-6 sm:px-8">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center py-8 px-6 min-h-[220px] transition duration-300 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center rounded-xl bg-gray-100">
              {item.icon}
            </div>
            <span className="text-3xl sm:text-4xl font-extrabold mb-1">{item.value}</span>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}