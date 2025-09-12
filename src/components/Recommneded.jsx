import React from "react";
import DL from "../assets/DL.jpeg";
import python from "../assets/python.jpeg";
import react from "../assets/react.jpeg";
export default function RecommendedForYou() {
  // 🔹 Courses data (easier to maintain & scale later)
  const courses = [
    {
      id: 1,
      img: DL,
      category: "AI & Machine Learning",
      title: "Deep Learning Fundamentals",
    },
    {
      id: 2,
      img: python,
      category: "AI & Machine Learning",
      title: "Python Data Analysis",
    },
    {
      id: 3,
      img: react,
      category: "AI & Web Development",
      title: "React Components Course",
    },
  ];

  return (
    <section className="p-6 bg-white rounded-2xl shadow-md my-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Recommended for you</h2>
        <button className="text-blue-600 font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id} // ✅ FIX for "unique key" warning
            className="border rounded-2xl shadow-sm overflow-hidden bg-white hover:shadow-md transition transform hover:-translate-y-1"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{course.category}</p>
              <h3 className="font-semibold text-base mb-3">{course.title}</h3>
              <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}