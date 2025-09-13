import React from 'react'
import { FaPlay } from "react-icons/fa";

const Awshero = () => {
  return (
    <section className="px-5 py-5">
      <div className='relative w-full border border-black rounded-2xl h-96 overflow-hidden'>
        <video src="/aws-course-preview.mp4" poster="/aws-thumbnail.png" className="w-full h-96"></video>

        {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white text-black p-6 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
          <FaPlay className="text-2xl ml-1" />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Awshero
