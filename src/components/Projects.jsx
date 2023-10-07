import projectImage from "../assets/images/project1.jpg"
import projectImage2 from "../assets/images/p_2.jpg"
import projectImage3 from "../assets/images/p3.png"
import projectImage4 from "../assets/images/p4.jpg"


import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-down" src={projectImage} className="md:w-96 w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight">International Technology Expo</h1>
                        <ul>
                            <li>- A large-scale technology trade show and expo featuring cutting-edge products and innovations from global tech companies.</li>
                            <li>- Includes keynote speakers, interactive workshops, and networking opportunities for industry professionals.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-down" src={projectImage2} className="md:w-96 w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight"> Global Leadership Summit</h1>
                        <ul>
                            <li>- An annual conference focused on leadership development and business strategy.</li>
                            <li>- Brings together thought leaders, CEOs, and entrepreneurs from various industries for knowledge sharing and networking.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-down" src={projectImage3} className="md:w-96 w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight">Olympic Sponsorship Activation </h1>
                        <ul>
                            <li>- Managing the launch and activation of sponsorship campaigns for corporate clients during major sporting events like the Olympics.</li>
                            <li>- Includes product launches, hospitality events, and brand promotions.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-down" src={projectImage4} className="md:w-96 w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight">Industry-Specific Conventions </h1>
                        <ul>
                            <li>- Organizing large-scale conventions tailored to specific industries, such as healthcare, finance, or automotive.</li>
                            <li>- Features panel discussions, workshops, and exhibitions showcasing the latest industry trends and products.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;