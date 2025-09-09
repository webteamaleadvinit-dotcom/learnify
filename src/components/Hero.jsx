// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <div className='hero'>
//         <div className='hero-content   w-full flex justify-center items-center flex-col gap-10 pt-30 pb-20'>
//           <div className='hero-content-heading '>
//             <h1 className='text-6xl font-bold text-center'>Master skill  with</h1>
//             <h1 className='text-7xl font-bold text-blue-500'>AI-Powered Learning</h1>
//           </div>
//           <div className='hero-content-subheading flex justify-center items-center '>
//             <h2 className='w-[45%] mx-auto text-2xl text-center '>Tranform your learning journey with bite-sized lessons, interactive quizzes, and personalized AI- driven paths. Perfect for students and professional who want to learn smarter, not harder </h2>
//           </div>

//           <div className="buttons flex items-center gap-10">
//             <button className='bg-blue-500 px-10 py-4 rounded-xl text-3xl text-white'>Start Learning Free</button>
//             <button className='bg-blue-500 px-10 py-4 rounded-xl text-3xl text-white'>Watch Demo</button>
//           </div>

//           <div className="hero-content-extra flex items-center gap-10">
//             <h2 className='text-xl text-center'>No Credit Card Required</h2>
//             <h2 className='text-xl text-center'>5-Minutes Lessons</h2>
//             <h2 className='text-xl text-center'>AI- Powerred Programme</h2>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Hero
// import React from 'react'
// import Classroom from "../assets/classroom.jpg"
// const Hero = () => {
//   return (
//     <div className="hero px-4">
//       <div className="hero-content w-full flex flex-col justify-center items-center gap-8 pt-20 pb-16 h-screen  bg-cover bg-center"
//         style={{ backgroundImage: `url(${Classroom})` }}>

//         {/* Heading */}
//         <div className="hero-content-heading text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
//             Master skill with
//           </h1>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500">
//             AI-Powered Learning
//           </h1>
//         </div>

//         {/* Subheading */}
//         <div className="hero-content-subheading flex justify-center items-center">
//           <h2 className="w-full md:w-3/4 lg:w-1/2 mx-auto text-lg sm:text-xl md:text-2xl text-center">
//             Transform your learning journey with bite-sized lessons, interactive quizzes,
//             and personalized AI-driven paths. Perfect for students and professionals
//             who want to learn smarter, not harder.
//           </h2>
//         </div>

//         {/* Buttons */}
//         <div className="buttons flex flex-col sm:flex-row items-center gap-6">
//           <button className="bg-blue-500 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xl sm:text-2xl md:text-3xl text-white">
//             Start Learning Free
//           </button>
//           <button className="bg-blue-500 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xl sm:text-2xl md:text-3xl text-white">
//             Watch Demo
//           </button>
//         </div>

//         {/* Extra Info */}
//         <div className="hero-content-extra flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-center">
//           <h2 className="text-base sm:text-lg md:text-xl">No Credit Card Required</h2>
//           <h2 className="text-base sm:text-lg md:text-xl">5-Minute Lessons</h2>
//           <h2 className="text-base sm:text-lg md:text-xl">AI-Powered Programme</h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react'
import Classroom from "../assets/classroom.jpg"

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Classroom})` }}
    >
      {/* White overlay with opacity */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center gap-8 px-4 h-full">
        
        {/* Heading */}
        <div className="hero-content-heading">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Master skill with
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500">
            AI-Powered Learning
          </h1>
        </div>

        {/* Subheading */}
        <div className="hero-content-subheading max-w-2xl">
          <h2 className="sm:text-lg  md:text-2xl font-semibold">
            Transform your learning journey with bite-sized lessons, interactive quizzes,
            and personalized AI-driven paths. Perfect for students and professionals
            who want to learn smarter, not harder.
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="bg-blue-500 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xl sm:text-2xl md:text-3xl text-white">
            Start Learning Free
          </button>
          <button className="bg-blue-500 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xl sm:text-2xl md:text-3xl text-white">
            Watch Demo
          </button>
        </div>

        {/* Extra Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">No Credit Card Required</h2>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">5-Minute Lessons</h2>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">AI-Powered Programme</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
