
function Whychoose() {
  const benefits = [
    {
      title: "AI-Powered Learning Paths",
      desc: "Personalized curriculum that adapts to your learning style, pace, and goals using advanced AI algorithms.",
    },
    {
      title: "Micro Learning Sessions",
      desc: "Bite-sized 5-minute lessons that fit perfectly into your busy schedule. Learn anywhere, anytime.",
    },
    {
      title: "Interactive Quizzes",
      desc: "Engaging quizzes and assessments that reinforce learning and track your progress in real time.",
    },
    {
      title: "Achievement System",
      desc: "Earn certificates, badges, and unlock new content as you progress through your learning journey.",
    },
    {
      title: "Progress Analytics",
      desc: "Detailed insights into your learning patterns, strengths, and areas for improvement.",
    },
    {
      title: "Community Learning",
      desc: "Connect with fellow learners, share achievements, and learn together in a supportive community.",
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
            <div className="mb-4">{item.icon}</div>
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