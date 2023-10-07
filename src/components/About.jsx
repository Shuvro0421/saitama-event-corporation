import saitamaImage from "../../src/assets/images/saitama.jpg"
import saitamaImage2 from "../../src/assets/images/saitama_2.jpg"
import saitamaImage3 from "../assets/images/Saitama_3.png"
import saitamaImage4 from "../assets/images/saitama_4.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-down" src={saitamaImage} className="md:max-w-sm w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight">Why It is Called <span className="text-yellow-500">Saitama <span className="text-rose-500">Event Corporation</span> </span> </h1>
                        <p className="py-6">Saitama typically refers to the character Saitama from the popular manga and anime series One Punch Man. Saitama is known for his incredible strength, as he can defeat any opponent with a single punch.</p>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-down" src={saitamaImage2} className="md:max-w-sm w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight"> <span className="text-yellow-500">Strength  <span className="text-rose-500">and Excellence</span> </span> </h1>
                        <p className="py-6">we can use Saitama's strength and unbeatable power as a symbol of the excellence and reliability of our event management services. Emphasize that, like Saitama, our corporation can handle any event-related challenge with ease and precision.</p>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-down" src={saitamaImage3} className="md:w-96 w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight"><span className="text-yellow-500">Efficiency <span className="text-rose-500">and Speed</span> </span> </h1>
                        <p className="py-6">Saitama is known for his quick and efficient victories. You could relate this to the efficiency and promptness of our event planning and execution, emphasizing our ability to deliver outstanding events swiftly.</p>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-down" src={saitamaImage4} className="md:max-w-sm w-60  rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="md:text-5xl text-black text-2xl font-bold limelight"> <span className="text-yellow-500">Uniqueness and  <span className="text-rose-500">Memorable Events</span> </span> </h1>
                        <p className="py-6">Saitama's character is unique and memorable. We could use this as a theme to highlight our ability to create distinctive and unforgettable events that stand out from the crowd.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;