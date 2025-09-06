const Footer=()=>{
    return(
        <>
            <section className="bg-[#1e293b] text-white">
                <div className="container mx-auto pt-8 md:grid grid-cols-2 gap-2 lg:grid-cols-4">
                    <div className="p-8">
                        <h4 className="text-2xl font-semibold leading-loose">Learnify</h4>
                        <p className="text-sm mb-3">AI-powered micro-learning platform helping students and professionals master new skills faster.</p>
                        <div>
                            <a href="" className="mr-2"><i class="fa-brands fa-facebook"></i></a>
                            <a href="" className="mr-2"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="" className="mr-2"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="" className="mr-2"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="p-8 md:text-center">
                        <h5 className="text-lg font-semibold leading-loose">Platform</h5>
                        <ul>
                            <li className="leading-loose">Features</li>
                            <li className="leading-loose">Courses</li>
                            <li className="leading-loose">Certificates</li>
                            <li className="leading-loose">Mobile App</li>
                        </ul>
                    </div>

                    <div className="p-8 md:text-center">
                        <h5 className="text-lg font-semibold leading-loose">Support</h5>
                        <ul>
                            <li><a href="" className="leading-loose">Help Center</a></li>
                            <li><a href="" className="leading-loose">Contact us</a></li>
                            <li><a href="" className="leading-loose">FAQ</a></li>
                            <li><a href="" className="leading-loose">community</a></li>
                        </ul>
                    </div>

                    <div className="p-8 md:text-center">
                        <h5 className="text-lg font-semibold leading-loose">Company</h5>
                        <ul>
                            <li><a href="" className="leading-loose">About us</a></li>
                            <li><a href="" className="leading-loose">Careers</a></li>
                            <li><a href="" className="leading-loose">Press</a></li>
                            <li><a href="" className="leading-loose">Partners</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto mt-8 p-8 lg:flex justify-between">
                    <p className="mb-3">©2024 Learnify. All rights reserved.</p>
                    <div className="md:flex gap-5 mb-3">
                        <p>Privacy policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;