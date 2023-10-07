
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const SingleContribution = ({ contribution }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const { image, title, description } = contribution
    return (
        <div className="card w-96 border-2 border-rose-500 bg-base-100 shadow-xl image-full">
            <figure ><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 data-aos="fade-right" className="card-title text-xl  text-rose-500 limelight">{title}</h2>
                <p data-aos="fade-left" className='text-yellow-500'>{description}</p>
            </div>
        </div>

    );
};

export default SingleContribution;