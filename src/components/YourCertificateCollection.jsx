import { CiShare2 } from "react-icons/ci";

const YourCertificateCollection=()=>{

    const certificate=[
        {
            title:"Advanced Machine Learning Fundamentals",
            info:"Learnify Academy",
            issuedate:"Issued: January 15,2024"
        },

        {
            title:"Data Science and Analytics",
            info:"Learnify Academy",
            issuedate:"Issued: January 15,2024"
        },

        {
            title:"Full Stack Web Development Mastery",
            info:"Learnify Academy",
            issuedate:"Issued: January 15,2024"
        },

        {
            title:"Product Management Professional Plan",
            info:"Learnify Academy",
            issuedate:"Issued: January 15,2024"
        },

        {
            title:"Digital Marketing Stratergy Excellence",
            info:"Learnify Academy",
            issuedate:"Issued: January 15,2024"
        },

        {
            title:"UI/UX Design Fundamentals and Principles",
            info:"Learnify Academy",
            issuedate:"Issued: January 15,2024"
        }
    ];

    return(
        <>
            <section className="px-5 py-5">
                {/* Heading and Buttons styled  */}
                <div className="text-center mt-8 mb-8">
                  <h2 className="text-4xl font-bold text-slate-800">
                    Your <span className="text-slate-600">Certificate Collection</span>
                 </h2>

                    <p className="text-xl mt-2">
                       Browse and share your verified achievements across different learning categories.
                    </p>
                </div>

               <div className="flex justify-center gap-4 my-6 flex-wrap">
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                    All
                </button>
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                    AI & Machine Learning
                </button>
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                    Data Science
                </button>
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                    Marketing
                </button>
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                    Web Development
                </button>
                <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                    Design
                </button>
            </div>

                {/* card design */}
                <div className="my-20 lg:grid grid-cols-3 gap-10">
                {
                    certificate.map(function(detail,key){
                        return(
                            <figure key={key} className="border rounded-xl overflow-hidden mb-5">
                    <div className="w-full h-48 bg-gray-500"></div>
                    <figcaption className="p-5">
                        <h4 className="text-2xl font-semibold mb-3 h-15">{detail.title}</h4>
                        <p className="text-slate-500 mb-2">{detail.info}</p>
                        <p className="text-slate-500 mb-5">{detail.issuedate}</p>
                        <div className="flex justify-between items-center border-t-2 border-slate-300 py-5">
                            <CiShare2 className="border rounded h-10 w-10" size={28}/>
                            <button type="button" className="border w-80 h-10 rounded-lg bg-blue-500 text-white"><i class="fa-solid fa-arrow-down"></i>  Download</button>
                        </div>
                    </figcaption>
                </figure>
                        )
                    })
                }
            </div>
            </section>
        </>
    )
}

export default YourCertificateCollection;