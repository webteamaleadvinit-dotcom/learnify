import React from 'react'

const WelcomeSection = () => {
  return (
    <div>
      <div className="p-6">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold">Welcome back, Austin</h1>
        <p className="text-gray-600 mt-1">
          Ready to continue your learning journey? You're doing great!
        </p>

        {/* Reminder Card */}
        <div className="relative mt-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-5 shadow-lg text-white">
          {/* Close Button */}
          <button className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 rounded-full h-10 w-10 p-2">
            ✕
          </button>

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="bg-white/20 rounded-full p-3">
              <span className="text-2xl">⏰</span>
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h2 className="font-semibold">Daily Study Reminder</h2>
              <p className="text-sm text-gray-200">Best time to learn 6:00 PM</p>
              <p className="mt-3 text-gray-100">
                You learn best in the evening! Set aside 30 minutes today to
                maintain your streak.
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                  Set Reminder
                </button>
                <button className="bg-white/20 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30">
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
