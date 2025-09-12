// import { useState } from "react";
// import { Progress } from "@/components/ui/progress";

// export default function Mylearningprogress() {
//   const [progress, setProgress] = useState(75);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Section */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-4">
//           <h1 className="text-2xl font-bold">
//             Amazon Web Services (AWS) - Zero to Hero
//           </h1>
//           <h2 className="text-blue-600 font-semibold cursor-pointer">
//             Course Overview
//           </h2>
//           <p className="text-gray-600 text-sm">
//             Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS
//             database server, S3, SES & CloudWatch.
//           </p>

//           {/* Stats */}
//           <div className="flex flex-wrap gap-6 text-sm text-gray-700">
//             <div className="flex items-center gap-1">
//               <span className="font-semibold text-yellow-500">4.6 ⭐⭐⭐⭐☆</span>
//               <span>(1221 reviews)</span>
//             </div>
//             <span>43,741 Students</span>
//             <span>3 hours Time Duration</span>
//             <span>🌐 English, Hindi, Telugu ...more</span>
//           </div>

//           {/* Tabs */}
//           <div className="flex gap-6 border-b pt-4">
//             <button className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-2">
//               Content
//             </button>
//             <button className="text-gray-500">Notes</button>
//             <button className="text-gray-500">Reviews</button>
//           </div>

//           {/* Content Section */}
//           <div className="space-y-6 mt-4">
//             {/* Section 1 */}
//             <div className="border rounded-xl p-4">
//               <h3 className="font-semibold mb-2">Section 1: Introduction</h3>
//               <ul className="space-y-1 text-gray-700 text-sm">
//                 <li>1. Introduction</li>
//                 <li>2. Lab Session - Intro to Storage Services</li>
//                 <li>3. Lab Session - Intro to Database Services</li>
//                 <li>4. Lab Session - Intro to Compute And Networks Services</li>
//                 <li>5. Lab Session - Intro to Management Services</li>
//               </ul>
//               <div className="mt-3 flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Quiz 1 (15min)</span>
//                 <span className="text-green-600 font-medium">Completed</span>
//               </div>
//             </div>

//             {/* Section 2 */}
//             <div className="border rounded-xl p-4">
//               <h3 className="font-semibold mb-2">Section 2: AWS</h3>
//               <ul className="space-y-1 text-gray-700 text-sm">
//                 <li>6. AWS Elastic Beanstalk (9min)</li>
//                 <li>7. Highly Available & Fault Tolerant NodeJS Server (22min)</li>
//                 <li>8. AWS Command Line Interface (18min)</li>
//                 <li>9. AWS Free Tier (24min)</li>
//               </ul>
//               <div className="mt-3 flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Assignment 1 (20min)</span>
//                 <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm">
//                   Start
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Course Progress */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Course Progress</h2>

//           {/* Progress Circle */}
//           <div className="flex flex-col items-center">
//             <div className="relative w-32 h-32">
//               <svg className="w-32 h-32 transform -rotate-90">
//                 <circle
//                   cx="64"
//                   cy="64"
//                   r="58"
//                   stroke="#e5e7eb"
//                   strokeWidth="10"
//                   fill="transparent"
//                 />
//                 <circle
//                   cx="64"
//                   cy="64"
//                   r="58"
//                   stroke="#10b981"
//                   strokeWidth="10"
//                   fill="transparent"
//                   strokeDasharray={2 * Math.PI * 58}
//                   strokeDashoffset={
//                     2 * Math.PI * 58 - (progress / 100) * (2 * Math.PI * 58)
//                   }
//                   strokeLinecap="round"
//                 />
//               </svg>
//               <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//                 {progress}%
//               </span>
//             </div>
//             <p className="mt-2 text-sm text-gray-600 text-center">
//               To Finish your Course complete the Pending tasks
//             </p>
//           </div>

//           {/* Progress Details */}
//           <div className="mt-6 space-y-2 text-sm text-gray-700">
//             <p>✔ Lesson Completed : 9/9 videos</p>
//             <p>✔ Duration completed: 145/179 Hours</p>
//             <p>✔ Assignments Completed : 3/4 Quizzes</p>
//           </div>

//           {/* Overall Progress */}
//           <div className="mt-6">
//             <Progress value={progress} />
//             <p className="text-sm mt-2">Overall Progress: {progress}%</p>
//           </div>

//           {/* To be Covered */}
//           <div className="mt-6 text-sm text-gray-700 space-y-1">
//             <p className="font-semibold">To be Covered :</p>
//             <p>→ EC2 (Elastic Compute Cloud)</p>
//             <p>→ S3 (Simple Storage Service)</p>
//             <p>→ RDS (Relational Database Service)</p>
//           </div>

//           {/* Continue Button */}
//           <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-xl font-semibold">
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function Mylearningprogress() {
  const [progress, setProgress] = useState(75);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-4">
          <h1 className="text-2xl font-bold">
            Amazon Web Services (AWS) - Zero to Hero
          </h1>
          <h2 className="text-blue-600 font-semibold cursor-pointer">
            Course Overview
          </h2>
          <p className="text-gray-600 text-sm">
            Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS database server, S3, SES & CloudWatch.
          </p>

          {/* Stats */}
          {/* <div className="flex flex-wrap gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-yellow-500">4.6 ⭐⭐⭐⭐☆</span>
              <span>(1221 reviews)</span>
            </div>
            <span>43,741 Students</span>
            <span>3 hours Time Duration</span>
            <span>🌐 English, Hindi, Telugu ...more</span>
          </div> */}

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-yellow-500">4.6 ⭐⭐⭐⭐☆</span>
              <span>(1221 reviews)</span>
            </div>
            <span>43,741 Students</span>
            <span>3 hours Time Duration</span>
            <span>🌐 English, Hindi, Telugu ...more</span>
          </div>



          {/* Tabs */}
          <div className="flex gap-6 border-b pt-4">
            <button className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-2">
              Content
            </button>
            <button className="text-gray-500">Notes</button>
            <button className="text-gray-500">Reviews</button>
          </div>

          {/* Content Section */}
          <div className="space-y-6 mt-4">
            {/* Section 1 */}
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">Section 1: Introduction</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>1. Introduction</li>
                <li>2. Lab Session - Intro to Storage Services</li>
                <li>3. Lab Session - Intro to Database Services</li>
                <li>4. Lab Session - Intro to Compute And Networks Services</li>
                <li>5. Lab Session - Intro to Management Services</li>
              </ul>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">Quiz 1 (15min)</span>
                <span className="text-green-600 font-medium">Completed</span>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">Section 2: AWS</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>6. AWS Elastic Beanstalk (9min)</li>
                <li>7. Highly Available & Fault Tolerant NodeJS Server (22min)</li>
                <li>8. AWS Command Line Interface (18min)</li>
                <li>9. AWS Free Tier (24min)</li>
              </ul>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">Assignment 1 (20min)</span>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Course Progress */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Course Progress</h2>

          {/* Progress Circle */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="#10b981"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 58}
                  strokeDashoffset={2 * Math.PI * 58 - (progress / 100) * (2 * Math.PI * 58)}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                {progress}%
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 text-center">
              To Finish your Course complete the Pending tasks
            </p>
          </div>

          {/* Progress Details */}
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p>✔ Lesson Completed : 9/9 videos</p>
            <p>✔ Duration completed: 145/179 Hours</p>
            <p>✔ Assignments Completed : 3/4 Quizzes</p>
          </div>

          {/* Overall Progress - simplified linear progress bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2">Overall Progress: {progress}%</p>
          </div>

          {/* To be Covered */}
          <div className="mt-6 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">To be Covered :</p>
            <p>→ EC2 (Elastic Compute Cloud)</p>
            <p>→ S3 (Simple Storage Service)</p>
            <p>→ RDS (Relational Database Service)</p>
          </div>

          {/* Continue Button */}
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-xl font-semibold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
