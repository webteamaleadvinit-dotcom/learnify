// import React from 'react'

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
// } from "recharts";


// const progress = 65;

// const radarData = [
//   { subject: "AI/ML", A: 85 },
//   { subject: "Python", A: 90 },
//   { subject: "Data Science", A: 78 },
//   { subject: "JavaScript", A: 92 },
//   { subject: "React", A: 60 },
//   { subject: "SQL", A: 65 },
//   { subject: "Docker", A: 70 },
//   { subject: "Statistics", A: 80 },
// ];

// const LearningProgress = () => {
//   return (
//     <div className='px-6'>
//       <div className=" min-h-screen p-6 border rounded-lg shadow-lg">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* -------- LEFT SIDE -------- */}
//           <div className="space-y-6">
//             {/* Overall Progress */}
//             <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold">Overall Progress</h3>
//                 <p className="text-gray-500">You've completed 149 out of 217 lessons</p>
//               </div>
//               <div className="w-24 h-24 my-4">
//                 <CircularProgressbar
//                   value={progress}
//                   text={`${progress}%`}
//                   styles={buildStyles({
//                     textColor: "#16a34a",
//                     pathColor: "#16a34a",
//                     trailColor: "#e5e7eb",
//                   })}
//                 />
//               </div>
//             </div>

//             {/* Weekly Goal */}
//             <div className="bg-white rounded-xl shadow p-4">
//               <h3 className="text-lg font-semibold">Weekly Goal</h3>
//               <p className="text-xl font-bold text-orange-600">87% Complete</p>
//               <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
//                 <div className="bg-orange-500 h-3 rounded-full" style={{ width: "87%" }}></div>
//               </div>
//               <p className="text-gray-500 mt-1">24 out of 28 lessons completed</p>
//             </div>

//             {/* Current Level */}
//             <div className="bg-white rounded-xl shadow p-4">
//               <h3 className="text-lg font-semibold">Current Level</h3>
//               <p className="text-green-600 font-bold">Advanced Learner</p>
//               <p className="text-gray-500">Next: Expert Level</p>
//             </div>

//             {/* Study Time */}
//             <div className="bg-white rounded-xl shadow p-4">
//               <h3 className="text-lg font-semibold">Today's Study Time</h3>
//               <p className="font-bold text-blue-600 text-xl">2h 35m</p>
//               <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
//                 <div className="bg-blue-500 h-3 rounded-full" style={{ width: "85%" }}></div>
//               </div>
//               <p className="text-gray-500 mt-1">Goal: 3h</p>
//             </div>

//             {/* Learning Streak */}
//             <div className="bg-white rounded-xl shadow p-4">
//               <h3 className="text-lg font-semibold">Learning Streak 🔥</h3>
//               <p className="font-bold text-red-600 text-xl">32 days</p>
//               <p className="text-gray-500">Best: 45 days</p>
//             </div>


//           </div>

//           {/* -------- RIGHT SIDE -------- */}
//           <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow p-6 flex flex-col items-center">
//             <h3 className="text-lg font-semibold mb-4">Learning Focus Area</h3>
//             <RadarChart
//               cx={200}
//               cy={150}
//               outerRadius={120}
//               width={400}
//               height={300}
//               data={radarData}
//             >
//               <PolarGrid />
//               <PolarAngleAxis dataKey="subject" />
//               <PolarRadiusAxis angle={30} domain={[0, 100]} />
//               <Radar
//                 name="Score"
//                 dataKey="A"
//                 stroke="#2563eb"
//                 fill="#2563eb"
//                 fillOpacity={0.6}
//               />
//             </RadarChart>

//             {/* <div className="mt-6 text-sm text-gray-600 ">
//               <p><strong>AI/ML:</strong> 85%</p>
//               <p><strong>Python:</strong> 90%</p>
//               <p><strong>Data Science:</strong> 78%</p>
//               <p><strong>JavaScript:</strong> 92%</p>
//               <p className="mt-2"><strong>Strongest:</strong> JavaScript</p>
//               <p className="mt-1 text-blue-600">
//                 Focus Recommendation: Data Science Fundamentals
//               </p>
//             </div> */}

//             <div className="mt-6 text-sm text-gray-600 w-full flex flex-col gap-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center">
//                   <p className="flex justify-between">
//                     <strong className="text-blue-600">AI/ML:</strong>
//                     <span className="font-bold">85%</span>
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center">
//                   <p className="flex justify-between">
//                     <strong className="text-yellow-400">Python:</strong>
//                     <span className="font-bold">90%</span>
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center">
//                   <p className="flex justify-between">
//                     <strong className="text-green-400">Data Science:</strong>
//                     <span className="font-bold">78%</span>
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center ">
//                   <p className="flex justify-between">
//                     <strong className="text-orange-400">JavaScript:</strong>
//                     <span className="font-bold">92%</span>
//                   </p>
//                 </div>

//                 <div className="  rounded-lg p-2 text-center col-span-2 font-bold text-2xl">
//                   <p><strong className='text-purple-500'>Strongest:</strong> <span className='text-orange-300'> JavaScript</span></p>
//                 </div>
//               </div>

//               {/* Last line full width */}
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 shadow-sm text-center mt-3">
//                 <p className="text-blue-600 font-medium">
//                   Focus Recommendation: Data Science Fundamentals
//                 </p>
//               </div>
//             </div>


//           </div>
//         </div>

//         {/* Stats Row */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white py-6 ">
//           <div className="bg-blue-50 rounded-xl shadow p-4 text-center border">
//             <p className="text-sm  text-blue-600">Total Time</p>
//             <h2 className="text-xl font-bold  text-blue-600">519h 25m</h2>
//           </div>
//           <div className="bg-green-50 rounded-xl shadow p-4 text-center border">
//             <p className="text-sm text-green-600">Lessons Done</p>
//             <h2 className="text-xl font-bold text-green-600">149</h2>
//           </div>
//           <div className="bg-purple-50 rounded-xl shadow p-4 text-center border">
//             <p className="text-sm text-purple-500">Active Course</p>
//             <h2 className="text-xl font-bold text-purple-500">6</h2>
//           </div>
//           <div className="bg-orange-50 rounded-xl shadow p-4 text-center border">
//             <p className="text-sm text-orange-500">Weekly Goal</p>
//             <h2 className="text-xl font-bold text-orange-500">87%</h2>
//           </div>
//         </div>

//         {/* Performance */}
//         <div className="bg-green-50 border rounded-xl shadow p-4 flex justify-between items-start px-6">
//           <div>
//             <h3 className="text-lg font-semibold">🚀 Outstanding Performance!</h3>
//             <p className="text-gray-600 mt-2">
//               You're learning <span className="font-bold">40% faster</span> than average student and maintaining excellent consistency.
//             </p>
//             <ul className="text-gray-500 text-sm mt-2 pl-4 flex items-center gap-6 ">
//               <li className='bg-white p-3 rounded-xl'>+25% this month</li>
//               <li className='bg-white p-3 rounded-xl'>Avg 2.1h/day</li>
//               <li className='bg-white p-3 rounded-xl'>Goal : 90%</li>
//             </ul>
//           </div>

//           <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             View Analytics
//           </button>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default LearningProgress


import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const progress = 65;

const radarData = [
  { subject: "AI/ML", A: 85 },
  { subject: "Python", A: 90 },
  { subject: "Data Science", A: 78 },
  { subject: "JavaScript", A: 92 },
  { subject: "React", A: 60 },
  { subject: "SQL", A: 65 },
  { subject: "Docker", A: 70 },
  { subject: "Statistics", A: 80 },
];

const LearningProgress = () => {
  return (
    <div className="px-4 sm:px-6">
      <div className="max-w-10xl mx-auto min-h-screen p-4 sm:p-6 border rounded-lg shadow-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* -------- LEFT SIDE -------- */}
          <div className="space-y-6">
            {/* Overall Progress */}
               <h3 className="text-3xl font-semibold mb-4">Learning Progress</h3>
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between flex-wrap">
              <div>
                <h3 className="text-lg font-semibold">Overall Progress</h3>
                <p className="text-gray-500">
                  You've completed 149 out of 217 lessons
                </p>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 my-4">
                <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={buildStyles({
                    textColor: "#16a34a",
                    pathColor: "#16a34a",
                    trailColor: "#e5e7eb",
                  })}
                />
              </div>
            </div>

            {/* Weekly Goal */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Weekly Goal</h3>
              <p className="text-xl font-bold text-orange-600">87% Complete</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <p className="text-gray-500 mt-1">24 out of 28 lessons completed</p>
            </div>

            {/* Current Level */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Current Level</h3>
              <p className="text-green-600 font-bold">Advanced Learner</p>
              <p className="text-gray-500">Next: Expert Level</p>
            </div>

            {/* Study Time */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Today's Study Time</h3>
              <p className="font-bold text-blue-600 text-xl">2h 35m</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-gray-500 mt-1">Goal: 3h</p>
            </div>

            {/* Learning Streak */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold">Learning Streak 🔥</h3>
              <p className="font-bold text-red-600 text-xl">32 days</p>
              <p className="text-gray-500">Best: 45 days</p>
            </div>
          </div>

          {/* -------- RIGHT SIDE -------- */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4">Learning Focus Area</h3>
            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Score"
                    dataKey="A"
                    stroke="#2563eb"
                    fill="#2563eb"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Scores Grid */}
            <div className="mt-6 text-sm text-gray-600 w-full flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center">
                  <p className="flex justify-between">
                    <strong className="text-blue-600">AI/ML:</strong>
                    <span className="font-bold">85%</span>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center">
                  <p className="flex justify-between">
                    <strong className="text-yellow-400">Python:</strong>
                    <span className="font-bold">90%</span>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center">
                  <p className="flex justify-between">
                    <strong className="text-green-400">Data Science:</strong>
                    <span className="font-bold">78%</span>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-2 shadow-sm text-center ">
                  <p className="flex justify-between">
                    <strong className="text-orange-400">JavaScript:</strong>
                    <span className="font-bold">92%</span>
                  </p>
                </div>

                <div className="rounded-lg p-2 text-center col-span-2 font-bold text-lg sm:text-2xl">
                  <p>
                    <strong className="text-purple-500">Strongest:</strong>{" "}
                    <span className="text-orange-300"> JavaScript</span>
                  </p>
                </div>
              </div>

              {/* Last line full width */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 shadow-sm text-center mt-3">
                <p className="text-blue-600 font-medium">
                  Focus Recommendation: Data Science Fundamentals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white py-6 mt-6">
          <div className="bg-blue-50 rounded-xl shadow p-4 text-center border">
            <p className="text-sm text-blue-600">Total Time</p>
            <h2 className="text-lg sm:text-xl font-bold text-blue-600">
              519h 25m
            </h2>
          </div>
          <div className="bg-green-50 rounded-xl shadow p-4 text-center border">
            <p className="text-sm text-green-600">Lessons Done</p>
            <h2 className="text-lg sm:text-xl font-bold text-green-600">149</h2>
          </div>
          <div className="bg-purple-50 rounded-xl shadow p-4 text-center border">
            <p className="text-sm text-purple-500">Active Course</p>
            <h2 className="text-lg sm:text-xl font-bold text-purple-500">6</h2>
          </div>
          <div className="bg-orange-50 rounded-xl shadow p-4 text-center border">
            <p className="text-sm text-orange-500">Weekly Goal</p>
            <h2 className="text-lg sm:text-xl font-bold text-orange-500">87%</h2>
          </div>
        </div>

        {/* Performance */}
        <div className="bg-green-50 border rounded-xl shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 mt-6 gap-4">
          <div>
            <h3 className="text-lg font-semibold">🚀 Outstanding Performance!</h3>
            <p className="text-gray-600 mt-2">
              You're learning{" "}
              <span className="font-bold">40% faster</span> than average student
              and maintaining excellent consistency.
            </p>
            <ul className="text-gray-500 text-sm mt-2 flex flex-wrap gap-3">
              <li className="bg-white p-2 sm:p-3 rounded-xl">+25% this month</li>
              <li className="bg-white p-2 sm:p-3 rounded-xl">Avg 2.1h/day</li>
              <li className="bg-white p-2 sm:p-3 rounded-xl">Goal : 90%</li>
            </ul>
          </div>

          <button className="w-full sm:w-auto mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;
