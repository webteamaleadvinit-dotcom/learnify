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
                {/* card design */}
                <div className="my-8 lg:grid grid-cols-3 gap-10">
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