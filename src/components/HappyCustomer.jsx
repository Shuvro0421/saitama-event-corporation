import Marquee from "react-fast-marquee";

import { FaFacebookSquare, FaGoogle, FaAmazon, FaYoutube, FaMicrosoft } from 'react-icons/fa';
import { SiSony, SiTesla, SiTata } from 'react-icons/si';



const HappyCustomer = () => {
    return (
        <div>
            <div>
                <h1 className="text-center mt-10 font-bold md:text-5xl text-2xl limelight text-rose-500"><span className="text-yellow-500">Our</span> Happy Customers</h1>
            </div>
            <div className="my-5">
                <Marquee speed={200}>
                    <div className="flex">
                        <p><FaFacebookSquare className="mr-20  text-blue-500  md:text-5xl text-4xl"></FaFacebookSquare></p>
                        <p><FaGoogle className="mr-20 text-slate-900  md:text-5xl text-4xl"></FaGoogle></p>
                        <p><FaAmazon className="mr-20 text-blue-950 md:text-5xl text-4xl"></FaAmazon></p>
                        <p><FaYoutube className="mr-20 text-red-700 md:text-5xl text-4xl"></FaYoutube></p>
                        <p><FaMicrosoft className="mr-20 text-blue-700  md:text-5xl text-4xl"></FaMicrosoft></p>
                        <p><SiSony className="mr-20 text-black md:text-5xl text-4xl"></SiSony></p>
                        <p><SiTesla className="mr-20 text-slate-700  md:text-5xl text-4xl"></SiTesla></p>
                        <p><SiTata className="mr-20 text-blue-950  md:text-5xl text-4xl"></SiTata></p>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default HappyCustomer;