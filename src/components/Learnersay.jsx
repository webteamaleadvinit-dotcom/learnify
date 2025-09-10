const Learnersay=()=>{

    const client=[
        {
            img:"./src/assets/man.png",
            cname:"Roshan",
            date:"Sep 2004",
            para:"write something about me which i don't know but i know what you are talking about and also tell me more about the experience you had in last trip",
            more:"Read Full Review......"
        },

        {
            img:"./src/assets/man.png",
            cname:"Ganesh",
            date:"Oct 2004",
            para:"write something about me which i don't know but i know what you are talking about and also tell me more about the experience you had in last trip",
            more:"Read Full Review......"
        },

        {
            img:"./src/assets/man.png",
            cname:"Kumaar",
            date:"Nov 2004",
            para:"write something about me which i don't know but i know what you are talking about and also tell me more about the experience you had in last trip",
            more:"Read Full Review......"
        }
    ];

    return(
        <>
            <section className="mb-8 mt-8">
                <div className="container mx-auto text-center px-20 py-15">
                    <h3 className="text-4xl md:text-5xl font-bold mb-8">What Our Learners Say</h3>
                    <p className="text-lg md:text-xl lg:text-3xl tracking-wide">Join thousands of students and professionals who have transformed their Learning journey with Learnify</p>
                </div>

                <div className="container mx-auto px-20 mt-5">
                     <div className="lg:grid grid-cols-3 gap-10">
                        {
                            client.map(function(item,key){
                                return(
                                    <figure key={key} className="bg-[#e7e7e7] p-5 rounded-2xl md:flex mb-8 shadow-lg">
                            <div className="w-full sm:w-96 mr-5">
                            <img src={item.img} alt="" className="w-24 h-24 rounded-[50%] object-cover"/>
                            </div>
                            <figcaption className="pb-8">
                                <h4 className="text-lg leading-loose font-semibold">{item.cname}</h4>
                                <p className="text-lg leading-loose">{item.date}</p>
                                <div className="mb-2">
                                    <a href="" className="text-[#fbbf24] mr-2"><i class="fa-solid fa-star"></i></a>
                                    <a href="" className="text-[#fbbf24] mr-2"><i class="fa-solid fa-star"></i></a>
                                    <a href="" className="text-[#fbbf24] mr-2"><i class="fa-solid fa-star"></i></a>
                                    <a href="" className="text-[#fbbf24] mr-2"><i class="fa-solid fa-star"></i></a>
                                    <a href="" className="text-[#fbbf24] mr-2"><i class="fa-regular fa-star"></i></a>
                                </div>
                                <p className="text-base">{item.para}</p>
                                <a href="" className="text-blue-700 font-semibold mb-5">{item.more}</a>
                            </figcaption>
                            </figure>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Learnersay;