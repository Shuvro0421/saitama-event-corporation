import Services from "./Services";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import HappyCustomer from "./HappyCustomer";
import Contribution from "./Contribution";



const Home = () => {
    
    useEffect(() =>{
        AOS.init({duration : 2000})
    } , [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VpHdrtn/bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-70 bg-black"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="" data-aos="fade-up">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold">Welcome to, <br /> <span className="limelight text-yellow-500">Satiama  <span className="text-rose-500">Event Corporation</span> </span> </h1>
                        <p className="mb-5">At Saitama Event Corporation, we specialize in crafting impeccable corporate events that leave a lasting impression. Whether you are planning a high-profile conference, a trade shows , a product launch, or an award ceremony, we are your dedicated partner in delivering professionalism and excellence.</p>
                    </div>
                </div>
            </div>
            <div className="mt-7" data-aos="fade-down">
                <Services></Services>
            </div>
            <div className="mt-7" data-aos="fade-s">
                <HappyCustomer></HappyCustomer>
            </div>
            <div className="mt-7" data-aos="fade-s">
                <Contribution></Contribution>
            </div>
        </div>
    );
};

export default Home;