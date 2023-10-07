
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const SingleContribution = ({ contribution }) => {

    useEffect(() =>{
        AOS.init({duration : 2000})
    } , [])

    const { image, title, description } = contribution
    return (
        <div className="card glass">
            <figure  data-aos="fade-down"><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2  data-aos="fade-up" className="limelight text-rose-500 card-title">{title}</h2>
                <p  data-aos="fade-down" className="text-yellow-500 font-semibold ">{description}</p>
            </div>
        </div>
    );
};

export default SingleContribution;