
function Whychoose() {
  const benefits = [
    {
      title: "AI-Powered Learning Paths",
      desc: "Personalized curriculum that adapts to your learning style, pace, and goals using advanced AI algorithms.",
      svg: <svg xmlns="http://www.w3.org/2000/svg"
        width="36" height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-brain text-blue-500">
        <path d="M12 18V5" />
        <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
        <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
        <path d="M18 18a4 4 0 0 0 2-7.464" />
        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
        <path d="M6 18a4 4 0 0 1-2-7.464" />
        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
      </svg>

    },
    {
      title: "Micro Learning Sessions",
      desc: "Bite-sized 5-minute lessons that fit perfectly into your busy schedule. Learn anywhere, anytime.",
      svg: <svg xmlns="http://www.w3.org/2000/svg"
        width="35" height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clock-3 text-yellow-500">
        <path d="M12 6v6h4" />
        <circle cx="12" cy="12" r="10" />
      </svg>

    },
    {
      title: "Interactive Quizzes",
      desc: "Engaging quizzes and assessments that reinforce learning and track your progress in real time.",
      svg: <svg xmlns="http://www.w3.org/2000/svg"
        width="36" height="36"
        viewBox="0 0 24 24"
        fill="green">
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      </svg>

    },
    {
      title: "Achievement System",
      desc: "Earn certificates, badges, and unlock new content as you progress through your learning journey.",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="purple" stroke="purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy">
        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
      </svg>

    },
    {
      title: "Progress Analytics",
      desc: "Detailed insights into your learning patterns, strengths, and areas for improvement.",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C71585" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-signal-icon lucide-signal">
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20V8" />
        <path d="M22 4v16" />
      </svg>


    },
    {
      title: "Community Learning",
      desc: "Connect with fellow learners, share achievements, and learn together in a supportive community.",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>

    },
  ];


  return (
    // <section className="bg-gray-50 py-16 px-6 mt-20">
    //   <div className=" mx-auto text-center">
    //     <h2 className="text-5xl font-bold text-black mb-4">
    //       Why Choose Learnify?
    //     </h2>
    //     <p className="text-gray-600 mb-12 text-2xl ">
    //       Experience the future of learning with our innovative features designed to. <br />maximize your potential.
    //     </p>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    //       {benefits.map((item, index) => (
    //         <div
    //           key={index}
    //           className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
    //         >
    //           <div className=" mb-4">{item.icon}</div>
    //           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
    //             {item.title}
    //           </h3>
    //           <p className="text-gray-600 text-lg">{item.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="bg-gray-50 py-16 px-6 mt-20">

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-4">
          Why Choose Learnify?
        </h2>
        <p className="text-gray-600 mb-12 text-2xl">
          Experience the future of learning with our innovative features designed to. <br />
          maximize your potential.
        </p>
      </div>

      {/* Grid Section */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md py-6 px-10 hover:shadow-lg transition"
          >
            <div className="icon bg-gray-100 rounded-xl w-15 h-15 mb-10 mt-10 flex justify-center items-center ">{item.svg}</div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

  );
}

export default Whychoose;