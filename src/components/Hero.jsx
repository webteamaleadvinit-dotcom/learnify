import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-content   w-full flex justify-center items-center flex-col gap-10 pt-30 pb-20'>
          <div className='hero-content-heading '>
            <h1 className='text-6xl font-bold text-center'>Master skill  with</h1>
            <h1 className='text-7xl font-bold text-blue-500'>AI-Powered Learning</h1>
          </div>
          <div className='hero-content-subheading flex justify-center items-center '>
            <h2 className='w-[45%] mx-auto text-2xl text-center '>Tranform your learning journey with bite-sized lessons, interactive quizzes, and personalized AI- driven paths. Perfect for students and professional who want to learn smarter, not harder </h2>
          </div>

          <div className="buttons flex items-center gap-10">
            <button className='bg-blue-500 px-10 py-4 rounded-xl text-3xl text-white'>Start Learning Free</button>
            <button className='bg-blue-500 px-10 py-4 rounded-xl text-3xl text-white'>Watch Demo</button>
          </div>

          <div className="hero-content-extra flex items-center gap-10">
            <h2 className='text-xl text-center'>No Credit Card Required</h2>
            <h2 className='text-xl text-center'>5-Minutes Lessons</h2>
            <h2 className='text-xl text-center'>AI- Powerred Programme</h2>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
