import React from 'react'
import { FaBrain } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";

const CourseProgress = () => {

    const course=[
        {
            icon: <FaBrain className="bg-blue-500 text-white rounded-lg p-3"size={60}/>,
            title:"Complete Machine Learning & Data Science Bootcamp 2024",
            instructor:"by Angela Yu",
            rating:"4.9   180,000+ students",
            students:"85% complete",
            timeSpent:"127h 30m",
            progress:"85",
            completedLessons:"34/40 lessons",
            nextLesson:"Next: Deep Neural Networks and Backprogation"
        },

        {
            icon: <FaPython className="bg-blue-500 text-white rounded-lg p-3"size={60}/>,
            title:"Python for Data Science & Machine Learning Bootcamp",
            instructor:"by Jose Reed",
            rating:"4.8   395,000+ students",
            students:"72% complete",
            timeSpent:"89h 15m",
            progress:"72",
            completedLessons:"29/41 lessons",
            nextLesson:"Next: Advanced Pandas & Data Manipulation"
        },

        {
            icon: <IoLogoJavascript className="bg-blue-500 text-white rounded-lg p-3"size={60}/>,
            title:"The Complete JavaScript Course 2024 : From Zero to Expert",
            instructor:"by Alia Khan",
            rating:"4.9   670,000+ students",
            students:"90% complete",
            timeSpent:"156h 45m",
            progress:"90",
            completedLessons:"45/50 lessons",
            nextLesson:"Next: Advanced ES6+ Features and Async Programming"
        },

        {
            icon: <FaReact className="bg-blue-500 text-white rounded-lg p-3"size={60}/>,
            title:"React - The Complete Guide 2024(incl. React Router & Redux)",
            instructor:"by Joseph Williams",
            rating:"4.8   425,000+ students",
            students:"45% complete",
            timeSpent:"68h 20m",
            progress:"45",
            completedLessons:"18/39 lessons",
            nextLesson:"Next: Redux Toolkit & State Management Patterns"
        },

        {
            icon: <AiOutlineConsoleSql className="bg-blue-500 text-white rounded-lg p-3"size={60}/>,
            title:"The Complete SQL Bootcamp : Go from Zero to Hero",
            instructor:"by Lia Baker",
            rating:"4.7   290,000+ students",
            students:"63% complete",
            timeSpent:"45h 10m",
            progress:"63",
            completedLessons:"15/24 lessons",
            nextLesson:"Next: Advanced Joins & Subqueries Optimization"
        },

        {
            icon: <FaDocker className="bg-blue-500 text-white rounded-lg p-3"size={60}/>,
            title:"Docker & Kubernetes : The Complete Guide",
            instructor:"by Sia Amane",
            rating:"4.7   110,000+ students",
            students:"36% complete",
            timeSpent:"32h 45m",
            progress:"36",
            completedLessons:"8/23 lessons",
            nextLesson:"Next: Container Orchestration with Kubernetes"
        }
    ];
  
      return(
          <>
              <section className="w-full px-5 mt-5">
                <h3 className="text-3xl font-bold">Course Progress</h3>
                <div className="mt-5">
                    {/* course info div */}
                    {
                        course.map(function(x){
                            return(
                                <div className="rounded-xl shadow-lg overflow-hidden mb-15">
                    <div className="px-4 sm:px-6 py-5 flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="flex-shrink-0">{x.icon}</div>

                        <div className="flex-1">
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{x.title}</h4>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
                                <p className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-0">{x.instructor}</p>
                                <p className="text-sm sm:text-base md:text-lg font-semibold">{x.rating}</p>
                            </div>
                            <p className="text-green-500 text-base sm:text-lg md:text-2xl font-bold mt-2">{x.students}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-2">
                                <div className="bg-blue-500 h-2 sm:h-3 rounded-full" style={{ width: `${x.progress}%` }}></div>
                            </div>
                        </div>

                        <div className="w-full md:w-48 text-left md:text-right mt-3 md:mt-0">
                            <p className="text-sm sm:text-base md:text-lg font-semibold mb-2">{x.timeSpent}</p>
                            <p className="text-sm sm:text-base md:text-lg font-semibold">Time spent</p>
                            <p className="mt-3 text-sm sm:text-base md:text-lg font-bold">{x.completedLessons}</p>
                        </div>
                    </div>

                    <div className="px-4 sm:px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                        <div><IoMdPlay size={28} className="border rounded-full w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3"/></div>

                        <div className="w-full">
                            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-slate-500">{x.nextLesson}</p>
                        </div>

                        <div className="w-full md:w-auto"><button type="button" className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition">Continue</button></div>
                    </div>
                    </div>
                            );
                        })
                    }
                </div>
            </section>
          </>
      )
}

export default CourseProgress
