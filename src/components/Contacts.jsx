import adibImage from "../assets/images/adibImage.png"

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Contacts = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <div className="card lg:card-side bg-blue-100 shadow-xl md:m-10 m-2">
            <figure data-aos="fade-down"><img src={adibImage} alt="" /></figure>
            <div data-aos="fade-up" className="card-body">
                <h2 className="card-title limelight md:text-5xl text-2xl text-black">Meet the man</h2>
                <div className="space-y-2">
                    <p className="md:text-5xl text-3xl text-yellow-500 font-medium ">Md. Adib Arman Shuvro</p>
                    <p className="md:text-2xl text-xl text-rose-500 font-medium ">01873345589</p>
                    <p className="md:text-2xl text-xl text-rose-500 font-medium ">adib@gmail.com</p>
                    <p className="md:text-xl text-lg text-rose-500 font-normal ">I will work my best to achieve my goal. I am looking forward to take the risks. I am trying to go through the barrier of reality for my dreams and ambition. If you cannot take risks you cannot create a future</p>
                   
                </div>

            </div>
        </div>
    );
};

export default Contacts;